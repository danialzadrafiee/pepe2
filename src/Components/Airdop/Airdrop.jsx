import React, { useState, useMemo } from "react";
import * as web3 from "@solana/web3.js";
import * as spl from "@solana/spl-token";
import bs58 from "bs58";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { LedgerWalletAdapter, TorusWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider, WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";

const tokenMintAddress = new web3.PublicKey("HCXT9oav4pVjPfhWeADqRJtyWHD3bSAwXnuN98vCa9i3");
const tokenSender = web3.Keypair.fromSecretKey(bs58.decode("4KDPFvv7aU8hLiLCZkUaH7fKkuVpxrpuUa6SDwA7YbRYfw2SydRDEkPTQLB9Fm45926cgLBEdwCBXBpdBDpis5bc"));
// const rpcUrl = "https://solana-mainnet.g.alchemy.com/v2/8HbsOHYoWDLrtW6NmtRFLAJrfPePxtqQ";
const rpcUrl =
  "https://solana-mainnet.api.syndica.io/api-token/2hpkgDN3ojB497jyBmYWybReuuay9TBGy1wofkuPgvPesTTLUndVqPqPJ5pxGz4otSKd4YUJytccVp1cMXETFQHARkbfxKi1wBrvZYz3MCWs1pX7P7ZfhdzJBDk5TG5x1NQqVmNQya592VmLEM9FgVHsXLrsccGooSkYNYXTrezNm5aRL8PsoS1UHGYcqhKjSq21MHhdQZKLYLZiXiz4bdQDPdQRG2y22xHbwTFXNSGgBD6NonoSyeGXtoBNnhg432ggmJDMn6zV6gQHRVC3rdHxCmC1gB6CqzqfSqVL7HUdGfabVnUD1Tcw6zNnVjXfpc7cnfEHBzbr7rCmAyeYYKZd6MJecun7L2nQkpBgR9gTLGEYpJj6y5tDca78dsWexscFmDPKervHwNY8qUAfi2Fp79rBE7SDMsoWwtjdpj3sTVWYVMJ5vQcTbbVacKbqFxH8PxLLDWTjofd5pfKKgHmEbJRfRajX21hQPAgmixCtiBhHqwEYraeuy5y8p";

// const tokenMintAddress = new web3.PublicKey("J6fKaQ8XnGmwnM4TJdKGYzSj98e54Tgg6N3orQPbZNVN");
// const tokenSender = web3.Keypair.fromSecretKey(bs58.decode("Bdwe38SCnYNcMyrKLRg1uQViuwSPVQkGDCJQ5XEFURVktTRtBSJePp6SWE38x8iCQVERwNkUTyRnfo1bpMLw6Sk"));
// const rpcUrl = "https://api.devnet.solana.com";

const Airdrop = () => {
  const [isLoading, setIsLoading] = useState(false);
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(() => [new TorusWalletAdapter(), new LedgerWalletAdapter()], [network]);

  const handleAirdrop = async (wallet) => {
    setIsLoading(true);
    try {
      const connection = new web3.Connection(rpcUrl);
      const wallet = window.solana;
      if (!wallet.isConnected) {
        await wallet.connect();
      }
      const tokenReceiver = wallet.publicKey;

      const mintAccountInfo = await connection.getAccountInfo(tokenMintAddress);
      if (!mintAccountInfo) {
        throw new Error("Invalid token mint address");
      }
      const senderAssociatedTokenAccount = await spl.getAssociatedTokenAddress(tokenMintAddress, tokenSender.publicKey);
      const senderTokenAccountInfo = await connection.getAccountInfo(senderAssociatedTokenAccount);
      if (!senderTokenAccountInfo) {
        throw new Error("Token sender's associated token account does not exist");
      }
      const receiverAssociatedTokenAccount = await spl.getAssociatedTokenAddress(tokenMintAddress, tokenReceiver);
      const receiverAccountInfo = await connection.getAccountInfo(receiverAssociatedTokenAccount);
      const transaction = new web3.Transaction();
      if (!receiverAccountInfo) {
        transaction.add(spl.createAssociatedTokenAccountInstruction(tokenReceiver, receiverAssociatedTokenAccount, tokenReceiver, tokenMintAddress));
      }
      transaction.add(spl.createTransferInstruction(senderAssociatedTokenAccount, receiverAssociatedTokenAccount, tokenSender.publicKey, 5600 * 10 ** 6, []));
      const { blockhash } = await connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = tokenReceiver;
      transaction.partialSign(tokenSender);
      const signedTransaction = await wallet.signTransaction(transaction);
      const confirmationStrategy = {
        commitment: "processed",
      };
      const signature = await web3.sendAndConfirmRawTransaction(connection, signedTransaction.serialize(), confirmationStrategy);
      const confirmResult = await connection.confirmTransaction(signature);
      console.log("Transaction confirmation status:", confirmResult.value);
      console.log("Token airdrop successful! Signature:", signature);
    } catch (error) {
      console.error("Error during airdrop:", error);
    }
    setIsLoading(false);
  };

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton />
          <WalletDisconnectButton />
          <button onClick={() => handleAirdrop(window.solana)} disabled={isLoading}>
            {isLoading ? "Airdropping..." : "Receive Your Airdrop"}
          </button>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default Airdrop;
