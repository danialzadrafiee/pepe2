import React, { Fragment, useState } from "react";
import { Flex, Grid } from "@/Components/Tags/Tags";
import Header from "@/Header/Header";
import { Gift, Rocket, TelegramLogo, TwitterLogo } from "@phosphor-icons/react";
import AirdropModal from "@/Components/AirdropModal/AirdropModal";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isAirdropModalOpen, setIsAirdropModalOpen] = useState(false);

  const TokenomicsCard = ({ title, value }) => {
    return (
      <Flex className="flex-col items-center   justify-center">
        <div className="border-c1 mob:border mob:pt-4  border-r w-full">
          <div className="bg-c2 w-max mx-auto  h-max text-c1 border border-c1  py-2 px-3 tab:text-sm tab:px-2 tab:py-1 text-[16px] mob:text-[14px] rounded-full">{title}</div>
          <div className="text-[64px] tab:text-[35px]  mob:text-[32px] text-center font-impact text-c1">{value}</div>
        </div>
      </Flex>
    );
  };
  return (
    <Fragment>
      <AirdropModal {...{ isAirdropModalOpen, setIsAirdropModalOpen }} />
      <section className="bg-hero">
        <Flex className="h-dvh max-w-[1200px] mob:flex-col tab:flex-col  mx-auto justify-between items-center">
          <Grid>
            <Header />
            <div className="font-impact max-w-xl leading-[80px] mob:text-[45px] tab:text-[60px] tab:mt-48  tab:leading-[60px]  tab:mx-auto tab:text-center  tab:max-w-lg  mob:mt-28 mob:leading-[50px] mob:text-center text-[80px] mob:pb-4  tab:pb-2 pb-14">
              Don't miss the great <span className="text-[#0cbe50]">presale</span>
            </div>
            <div className="text-xl mob:text-lg mob:text-center  mob:-mt-4 mob:px-4 mob:mx-auto  max-w-lg tab:text-center pb-4">
              Presale will launch soon. Join Pepoleon's army to conquer all the memes.
            </div>
            <Grid>
              <Grid className="grid-cols-2 origin-top mob:scale-[0.8] mob:mx-auto tab:mx-auto  gap-2  w-full max-w-xs">
                <a href="https://t.me/PepoleonPortal" className="rounded bg-c1 gap-2 font-semibold py-2 flex items-center justify-center text-primary">
                  <TelegramLogo size={32} weight="fill" />
                  <div>Telegram</div>
                </a>
                <a href="https://twitter.com/PepoleonOnSol" className="rounded bg-c1 gap-2 font-semibold py-2 flex items-center justify-center text-primary">
                  <span className="flex gap-2  items-center">
                    <TwitterLogo size={32} weight="fill" />
                    <div>Twitter</div>
                  </span>
                </a>
                  {/*  onClick={() => setIsAirdropModalOpen(true)} */}
                {/* <Link className="col-span-2  mt-2 glowbutton font-semibold flex items-center justify-center gap-2" to="/presale_signup">
                    <Rocket size={32} weight="fill" />
                    Sign up for Pre-sale
                </Link> */}
              </Grid>
            </Grid>
          </Grid>
          <img src="./img/p1.png" className="w-[580px] absolute right-0 bottom-0 max-w-lg mob:w-auto tab:w-auto tab:h-[35dvh]  mob:h-[35dvh] self-end" />
        </Flex>
        <section id="Tokenomics">
          <Grid className="grid-cols-4 mob:grid-cols-2 border-t border-b border-c1 mob:h-max h-[195px]  bg-black/40 w-full">
            <TokenomicsCard title="TOTAL SUPPLY" value="690B" />
            <TokenomicsCard title="PRESALE SUPPLY" value="379.5B" />
            <TokenomicsCard title="LP BURN" value="AT  LAUNCH" />
            <TokenomicsCard title="OWNERSHIP" value="REVOKED" />
          </Grid>
        </section>
      </section>
    </Fragment>
  );
};

export default Hero;
