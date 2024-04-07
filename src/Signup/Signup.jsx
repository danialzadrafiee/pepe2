import { useState } from "react";
import { Flex, Grid, Label } from "@/Components/Tags/Tags";
import axios from "axios";
import { PublicKey } from "@solana/web3.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArrowLeft, WarningCircle } from "@phosphor-icons/react/dist/ssr";
import { Link } from "react-router-dom";
import { TelegramLogo } from "@phosphor-icons/react/dist/ssr";

const Signup = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [experience, setExperience] = useState("");
  const [investment, setInvestment] = useState("");
  const [errors, setErrors] = useState({});
  const end = true;
  const handleWalletAddressChange = (e) => {
    setWalletAddress(e.target.value);
  };

  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };

  const handleInvestmentClick = (inv) => {
    setInvestment(inv);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!walletAddress) {
      newErrors.walletAddress = "Wallet address is required";
      isValid = false;
    } else {
      try {
        new PublicKey(walletAddress);
      } catch (error) {
        newErrors.walletAddress = "Invalid Solana wallet address";
        isValid = false;
      }
    }

    if (!experience) {
      newErrors.experience = "Experience is required";
      isValid = false;
    }

    if (!investment) {
      newErrors.investment = "Investment is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSignup = async () => {
    if (validateForm()) {
      try {
        const response = await axios.post("https://ps.developerpie.com:5000/signup", {
          walletAddress,
          experience,
          investment,
        });
        const user = response.data;
        console.log("User signed up:", user);
        toast.success("Signup successful!");
        // Reset form fields
        setWalletAddress("");
        setExperience("");
        setInvestment("");
      } catch (error) {
        console.error("Error signing up user:", error);
        toast.error("Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center mob:min-h-dvh bg-pep">
      <Link to="/">
        <ArrowLeft size={40} className="text-c1 absolute z-40 top-9 left-9 mob:top-4 mob:left-4 bg-black/60 border-2 border-c1  p-2  rounded-full cursor-pointer" />
      </Link>

      <Flex className="flex-col items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <img src="/img/tr.png" className="w-[200px]" />
        <div className="max-w-sm p-6 w-full bg-black/90 border-c1 border-2 rounded-lg shadow-lg">
          {!end ? (
            <>
              <Grid>
                <Label className="text-indigo-400 text-lg font-semibold mb-2">Wallet Address</Label>
                <input
                  placeholder="Your Solana wallet address"
                  className={`px-4 py-3 rounded-lg bg-gray-700 text-white border-2 focus:outline-none focus:border-indigo-500 transition duration-300 ease-in-out ${
                    errors.walletAddress ? "border-red-500" : "border-gray-600"
                  }`}
                  value={walletAddress}
                  onChange={handleWalletAddressChange}
                />
                {errors.walletAddress && <p className="text-red-500 text-sm mt-1">{errors.walletAddress}</p>}
              </Grid>
              <Grid className="mt-6">
                <Label className="text-indigo-400 text-lg font-semibold mb-2">How much is your experience?</Label>
                <Grid className="grid-cols-2 gap-4">
                  {["professional", "beginner"].map((exp) => (
                    <Flex key={exp} className="items-center">
                      <label className="ml-2 text-gray-300 mob:text-sm flex gap-1 items-center">
                        <input
                          type="radio"
                          name="experience"
                          value={exp}
                          checked={experience === exp}
                          onChange={handleExperienceChange}
                          className="form-radio size-4 text-indigo-500 transition duration-150 ease-in-out"
                        />
                        <div>I'm {exp}</div>
                      </label>
                    </Flex>
                  ))}
                </Grid>
                {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
              </Grid>
              <Grid className="mt-6">
                <Label className="text-indigo-400 text-lg font-semibold mb-2">How much do you like to invest?</Label>
                <Grid className="grid-cols-2 gap-4">
                  {["Less than 10 SOL", "10 to 50 SOL", "50 to 100 SOL", "More than 100 SOL"].map((inv, i) => (
                    <button
                      key={i}
                      className={`rounded-lg text-sm bg-gradient-to-r ${
                        ["from-indigo-600 to-purple-600", "from-purple-600 to-pink-600", "from-pink-600 to-red-600", "from-red-600 to-yellow-600"][i]
                      } text-white px-2 py-3 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${investment === inv ? "ring-2 ring-offset-2 ring-indigo-500" : ""}`}
                      onClick={() => handleInvestmentClick(inv)}
                    >
                      {inv}
                    </button>
                  ))}
                </Grid>
                {errors.investment && <p className="text-red-500 text-sm mt-1">{errors.investment}</p>}
              </Grid>
              <Grid className="mt-6">
                <button
                  className="w-full rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-3 px-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  onClick={handleSignup}
                >
                  Sign up
                </button>
              </Grid>
            </>
          ) : (
            <>
              <div className="text-lg semibold text-red-400">
                <Flex className="items-center gap-1">
                  <WarningCircle size={20} />
                  <div>Whitelist capacity has been filled.</div>
                </Flex>
              </div>
              <div className="text-green-500">But don't worry. You can still participate in the pre-sale. The whitelist is only determined for priority in the purchasing queue.</div>
              <a className="px-3 rounded items-center py-2 flex gap-1 w-max mt-2 bg-blue-500 text-white" href="https://t.me/+oe2FiHBJo9NlZGY0">
                <TelegramLogo size={20} weight="fill" />
                <div>Join Telegram</div>
              </a>
            </>
          )}
        </div>
      </Flex>
      <ToastContainer />
    </div>
  );
};

export default Signup;
