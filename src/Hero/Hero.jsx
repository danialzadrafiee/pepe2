import React, { Fragment, useEffect, useState } from "react";
import { Flex, Grid } from "@/Components/Tags/Tags";
import Header from "@/Header/Header";
import { Rocket, TelegramLogo, TwitterLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import "./Hero.scss";
const Hero = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-04-10T14:00:00Z").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

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
      <section className="bg-hero">
        <Flex className="h-dvh max-w-[1200px] mob:flex-col tab:flex-col mx-auto justify-between items-center">
          <Flex className="flex-col items-center  justify-center h-full">
            <Header />
            <div className="text-c1 relative z-[2] border-c1 border-2 bg-gradient-to-b from-black/50 to-black/40  lg:ml-10 rounded-xl p-10 mob:p-5 mob:max-w-xs text-center">
              <div className="font-impact max-w-lg  text-white leading-tight mob:text-[30px] tab:text-[60px]  tab:leading-[60px] tab:mx-auto tab:text-center tab:max-w-lg mob:leading-tight mob:text-center text-[45px]  ">
                <div>
                  Presale phase-1 <span className="text-[#0cbe50]">[Whitelist only]</span> is completed successfully
                </div>
                <div className=" text-lg font-sans font-semibold  ">
                  The second phase <span className="text-[#0cbe50]"> [public]</span> will be executed on the{" "}
                  <a href="https://launchpad.pepoleon.xyz">
                    <h1 className="glitch pointer-events-auto">Pepoleon Launchpad</h1>
                  </a>
                </div>
              </div>
              <Grid className="grid-cols-2 mx-auto mt-5 origin-top mob:scale-[0.8] mob:mx-auto tab:mx-auto  gap-2  w-full max-w-xs">
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
                <a href="https://launchpad.pepoleon.xyz" className="col-span-2  mt-2 px-0 mb-4 py-4 glowbutton font-semibold flex items-center justify-center gap-2" to="/olympic">
                  <Rocket size={32} weight="fill" />
                  Join Presale Phase-2 (public)
                </a>
              </Grid>
            </div>
          </Flex>
          <img src="./img/p1.png" className="w-[580px] absolute right-0 bottom-0 max-w-lg mob:w-auto tab:w-auto tab:h-[35dvh] mob:h-[35dvh] self-end" />
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
