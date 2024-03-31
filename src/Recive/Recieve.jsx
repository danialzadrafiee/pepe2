import React, { useState, useMemo } from "react";
import * as web3 from "@solana/web3.js";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { LedgerWalletAdapter, TorusWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider, WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";
import bs58 from "bs58";
import { Flex, Grid } from "@/Components/Tags/Tags";
import { ArrowLeft, ArrowsClockwise, Check, Gift } from "@phosphor-icons/react";
import { useMainContext } from "@/Context";
import { Buffer } from 'buffer';
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
          "Content-Type": "application/json",
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
      const signature = await web3.sendAndConfirmRawTransaction(
        connection,
        signedTransaction.serialize(),
        confirmationStrategy
      );
      const confirmResult = await connection.confirmTransaction({ signature });
      console.log("Transaction confirmation status:", confirmResult.value);
      console.log("Token airdrop successful! Signature:", signature);
    } catch (error) {
      console.error("Error during airdrop:", error);
    }
    setIsLoading(false);
  };
  const { page, setPage } = useMainContext();

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="min-h-dvh h-full z-[60] bg-pep flex tab:flex-col mob:flex-col items-center justify-center p-4">
            <ArrowLeft onClick={() => setPage(0)} size={40} className="text-c1 absolute top-9 left-9 mob:top-4mob:left-4 bg-black/60 border-2 border-c1  p-2  rounded-full cursor-pointer" />
            <img src="/img/p1.png" className="grayscale lg:absolute mob:mx-auto right-0 bottom-0 w-[50%] max-w-[28vw] md:w-[28vw]" alt="" />
            <div className="rounded-lg pointer-events-none grayscale w-full max-w-lg border-2 p-6 sm:p-10 border-c1 bg-gradient-to-br from-black/70 to-gray-900/70 shadow-lg shadow-c1/30">
              <Grid className="items-center">
                <h2 className="text-xl font-semibold flex justify-between items-center mb-2">
                  <div>Withdraw Airdrops</div> <span className="rounded text-sm px-2  bg-yellow-400 text-yellow-900">Soon</span>
                </h2>
                <Flex className="flex-col space-y-6">
                  <ul className="list-none [&>li]:ml-0 space-y-4">
                    <li className="bg-gray-800/50 p-4 rounded-lg shadow-md">
                      <Grid className="gap-4">
                        <div className="text-lg text-white">First, connect your Solana wallet</div>
                        <WalletMultiButton className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full hover:from-purple-600 hover:to-blue-500 transition duration-300 ease-in-out" />
                      </Grid>
                    </li>
                    <li className="bg-gray-800/50 p-4 rounded-lg shadow-md">
                      <Grid className="gap-4">
                        <div className="text-lg text-white">Check if you received the airdrop</div>
                        <Grid className="grid-cols-1 sm:grid-cols-3 gap-4">
                          <Grid className="gap-2">
                            <small className="text-gray-400">Amount</small>
                            <div className="bg-black h-12 flex items-center justify-center rounded-lg border-2 border-c1 w-full">
                              <span className="text-sm text-white">-</span>
                            </div>
                          </Grid>
                          <Grid className="gap-2">
                            <small className="text-gray-400">Status</small>
                            <div className="bg-black h-12 flex items-center justify-center rounded-lg border-2 border-c1 w-full">
                              <span className=" text-sm   text-white">Not checked</span>
                            </div>
                          </Grid>
                          <Grid>
                            <small className="h-6 sm:block hidden"></small>
                            <button className="rounded-lg h-12 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 hover:from-purple-600 hover:to-blue-500 transition duration-300 ease-in-out">
                              <ArrowsClockwise weight="fill" className="text-white" /> <div>CHECK</div>
                            </button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </li>
                    <li className="bg-gray-800/50 p-4 rounded-lg shadow-md">
                      <Grid className="gap-4">
                        <div className="text-lg text-white">Withdraw your $PPLON</div>
                        <button
                          onClick={handleAirdrop}
                          className="rounded-lg bg-gradient-to-r from-c1 to-purple-600 w-full flex items-center justify-center gap-2 h-14 mt-4 text-white font-semibold hover:from-purple-600 hover:to-c1 transition duration-300 ease-in-out disabled:opacity-50"
                          disabled={isLoading}
                        >
                          <Gift className="text-white" /> {isLoading ? "Airdropping..." : "Receive"}
                        </button>
                        <small className="mt-2 text-gray-400">
                          A <strong>Fee</strong> may be required to create an ATA, which is a <strong>Solana fee, not ours</strong>. More info
                          <a className="text-c1 ml-1 hover:underline" target="_blank" href="https://spl.solana.com/associated-token-account">
                            here
                          </a>
                          .
                        </small>
                      </Grid>
                    </li>
                  </ul>
                </Flex>
              </Grid>
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default AirButton;
