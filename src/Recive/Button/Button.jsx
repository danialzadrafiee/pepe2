import React, { useState, useMemo } from "react";
import * as web3 from "@solana/web3.js";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { LedgerWalletAdapter, TorusWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider, WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";
import bs58 from "bs58";

const AirButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(() => [new TorusWalletAdapter(), new LedgerWalletAdapter()], [network]);
  const handleAirdrop = async () => {
    setIsLoading(true);
    try {
      const wallet = window.solana;
      if (!wallet.isConnected) {
        await wallet.connect();
      }
      const tokenReceiver = wallet.publicKey.toString();

      const response = await fetch("http://localhost:3000/sign-transaction", {
        method: "POST",
        headers: {
          "Content-Type": "buttonlication/json",
        },
        body: JSON.stringify({ tokenReceiver }),
      });
      const { transaction } = await response.json();
      const decodedTransaction = bs58.decode(transaction);
      const transactionBuffer = Buffer.from(decodedTransaction);
      const partiallySignedTransaction = web3.Transaction.from(transactionBuffer);
      const signedTransaction = await wallet.signTransaction(partiallySignedTransaction);
      const connection = new web3.Connection(endpoint);
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
          <button onClick={handleAirdrop} disabled={isLoading}>
            {isLoading ? "Airdropping..." : "Receive Your Airdrop"}
          </button>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default AirButton;
