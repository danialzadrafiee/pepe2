import React, { Fragment, useEffect, useState } from "react";
import { Flex, Grid } from "@/Components/Tags/Tags";
import Header from "@/Header/Header";
import { Rocket, TelegramLogo, TwitterLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import "./Hero.scss";
const Hero = () => {
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
            <div className="text-c1 relative z-[2]  lg:ml-10 rounded-xl  mob:max-w-xs text-center">
              <iframe
                className="max-w-lg w-full rounded-lg border-4 border-c1 h-[600px]"
                src="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=HCXT9oav4pVjPfhWeADqRJtyWHD3bSAwXnuN98vCa9i3&fixed=in"
                frameborder="0"
              ></iframe>
              <a className="bg-black mt-2 text-sm p-2 block max-w-xs break-all rounded-xl" href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=HCXT9oav4pVjPfhWeADqRJtyWHD3bSAwXnuN98vCa9i3&fixed=in">
                https://raydium.io/swap/?inputCurrency=sol&outputCurrency=HCXT9oav4pVjPfhWeADqRJtyWHD3bSAwXnuN98vCa9i3&fixed=in
              </a>
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
