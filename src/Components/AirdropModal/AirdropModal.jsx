import { TwitterLogo, X } from "@phosphor-icons/react";
import { Body, Flex, Grid, Inside } from "../Tags/Tags";
import { useState } from "react";
import { useMainContext } from "@/Context";

const AirdropModal = ({ isAirdropModalOpen, setIsAirdropModalOpen }) => {
  const {page, setPage} = useMainContext();
  const [walletAddress, setWalletAddress] = useState("");
  const handleShareOnTwitter = () => {
    if (!walletAddress) {
      alert("Please enter your wallet address. 🙏");
      return;
    }
    const message = encodeURIComponent(
      `I'm joining the @PepoleonOnSol Army! 🚀🔥\n\nHere is my wallet address:\n${walletAddress}\nI'm gonna receive my $PPLON airdrop. You can also get the airdrop—just check out https://pepoleon.xyz`
    );
    const twitterUrl = `https://twitter.com/intent/tweet?text=${message}`;
    window.open(twitterUrl, "_blank");
    setIsAirdropModalOpen(false);
  };

  return (
    <>
      <div className={`fixed w-dvw h-dvh bg-black/80 flex items-center justify-center z-50 ${!isAirdropModalOpen && "hidden"}`}>
        <Inside className="max-w-xs  flex-col flex h-max p-6 mx-auto w-full bg-pep justify-between rounded-xl">
          <header>
            <Flex className="items-center justify-between ">
              <div className="text-center text-white font-impact text-2xl">Airdrop</div>
              <X size={24} className="cursor-pointer" onClick={() => setIsAirdropModalOpen(false)} />
            </Flex>
          </header>
          <Body>
            <div className="">There is few steps to claim.</div>
            <img src="/img/pepoleonAirdrop.jpg" className=" my-2 rounded-lg w-full " alt="" />
            <ul>
              <li>1. Enter your wallet address</li>
              <li>2. Click on share on twitter</li>
              <li>3. Share generated tweet</li>
              <li>
                4. Follow
                <a href="https://twitter.com/PepoleonOnSol" className="text-c1">
                  @PepoleonOnSol
                </a>
              </li>
              <li>4. We will share AirDrop withdraw link on Peploen Twitter </li>
            </ul>
            <Grid>
              <input
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                type="text"
                placeholder="Enter your solana wallet address"
                className="w-full border text-xs border-c1 rounded-lg p-2 bg-black/80 mt-3"
              />
              <button onClick={handleShareOnTwitter} className="w-full !py-3 text-white flex items-center justify-center twbtn rounded-lg p-2 mt-3 font-semibold gap-2">
                <span>
                  <TwitterLogo weight="fill" />
                </span>
                <div>Share on Twitter</div>
              </button>
                <div className="pt-2 m-auto">Alredy shared? <span className="text-c1 cursor-pointer" onClick={()=>setPage("airdrop")}>Claim</span></div>
            </Grid>
          </Body>
          <div></div>
        </Inside>
      </div>
    </>
  );
};
export default AirdropModal;
