import { useState } from "react";
import { Flex, Label } from "@/Components/Tags/Tags";
import { PublicKey } from "@solana/web3.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Link } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import { Copy, Question } from "@phosphor-icons/react";
import CopyToClipboard from "react-copy-to-clipboard";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const Olympic = () => {
  const [txhash, setTxhash] = useState("");
  const [telegramId, setTelegramId] = useState("");
  const [errors, setErrors] = useState({});

  const handleTxhashChange = (e) => {
    setTxhash(e.target.value);
  };

  const handleTelegramIdChange = (e) => {
    setTelegramId(e.target.value);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!txhash) {
      newErrors.txhash = "Tx hash is required";
      isValid = false;
    }

    if (!telegramId) {
      newErrors.telegramId = "Telegram ID is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("https://formsubmit.co/subdanial@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            txhash,
            telegramId,
          }),
        });
        if (response.ok) {
          console.log("User data submitted successfully");
          toast.success("Signup successful!");
          setTxhash("");
          setTelegramId("");
        } else {
          console.error("Error submitting user data");
          toast.error("Signup failed. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting user data:", error);
        toast.error("Signup failed. Please try again.");
      }
    }
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center mob:min-h-dvh bg-pep">
      <Modal center={true} styles={{ modal: { backgroundColor: "slategray", borderRadius: "10px", padding: "20px" } }} open={modalOpen} classNames={"bg-red-500"} onClose={() => setModalOpen(false)}>
        Ladies and gentlemen, welcome to the Pepoleon Olympics! 🎉 For just 0.006 SOL, you can sign up and join in the excitement of our bracket-style competition. 🏆 The grand prize? An exclusive
        1-on-1 NFT experience with incredible perks in the Papo ecosystem! 🎁 But wait, there's more! Alternatively, participants can choose a fantastic 0.5 Sana option. 💰 Get ready to unleash your
        competitive spirit and let the games begin! 🏅🔥 Let's make history together! 🌍✨
      </Modal>

      <Link to="/">
        <ArrowLeft size={40} className="text-white absolute z-40 top-9 left-9 mob:top-4 mob:left-4 bg-gray-800/60 border-2 border-white p-2 rounded-full cursor-pointer" />
      </Link>
      <div onClick={() => setModalOpen(true)}>
        <Question size={40} className="text-white absolute z-40 top-9 right-9 mob:top-4 mob:right-4 bg-gray-800/60 border-2 border-white p-2 rounded-full cursor-pointer" />
      </div>

      <Flex className="flex-col items-center justify-center p-6">
        <img src="/img/olym.png" className="w-[200px] " />
        <div className="max-w-sm w-full bg-gray-800 rounded-lg shadow-lg p-6">
          <>
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-white mb-2">Step 1: Deposit SOL</h2>
              <p className="text-gray-400">Deposit 0.006 SOL to the following wallet:</p>
              <div className="mt-2 p-4 px-2 bg-gray-700 gap-2 items-center rounded-lg flex">
                <p className="text-xs font-mono text-gray-300">Ak3at3Ufpykdm8nKYxvZLfhCRzGDMkD2UePuiohSS4z6</p>
                <CopyToClipboard text="Ak3at3Ufpykdm8nKYxvZLfhCRzGDMkD2UePuiohSS4z6" onCopy={handleCopy}>
                  <div className="relative">
                    <Copy size={18} className="text-gray-300 cursor-pointer" weight={copied ? "fill" : "regular"} />
                    {copied && <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded">Copied!</div>}
                  </div>
                </CopyToClipboard>
              </div>
              <div className="mt-4 flex justify-center">
                <QRCodeCanvas value="Ak3at3Ufpykdm8nKYxvZLfhCRzGDMkD2UePuiohSS4z6" size={150} bgColor="#1F2937" fgColor="#FFFFFF" />
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold text-white mb-2">Step 2: Enter Transaction Hash</h2>
              <Label className="block text-gray-400 font-semibold mb-2">Transaction Hash</Label>
              <input
                placeholder="Enter transaction hash"
                className={`w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 ${errors.txhash ? "border-red-500" : ""}`}
                value={txhash}
                onChange={handleTxhashChange}
              />
              {errors.txhash && <p className="text-red-500 text-sm mt-1">{errors.txhash}</p>}
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold text-white mb-2">Step 3: Enter Telegram ID</h2>
              <Label className="block text-gray-400 font-semibold mb-2">Telegram ID</Label>
              <input
                placeholder="@your_telegram_id"
                className={`w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 ${errors.telegramId ? "border-red-500" : ""}`}
                value={telegramId}
                onChange={handleTelegramIdChange}
              />
              {errors.telegramId && <p className="text-red-500 text-sm mt-1">{errors.telegramId}</p>}
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Step 4: Sign Up</h2>
              <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200" onClick={handleSignup}>
                Sign Up and Join Olympic Game
              </button>
            </div>
          </>
        </div>
      </Flex>
      <ToastContainer />
    </div>
  );
};

export default Olympic;
