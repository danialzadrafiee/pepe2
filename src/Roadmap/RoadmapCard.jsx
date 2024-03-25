import { Body, Grid, Inside } from "@/Components/Tags/Tags";
import React from "react";
const RoadmapData = [
  {
    title: "Preparing",
    img: "./img/p3.png",
    body: `We're going to start with a presale. We've designed a user-friendly website for early investors. You will connect your wallet with just one click, enter your amount, touch the buy button, and you're done, PPLON tokens are in your wallet.`,
  },
  {
    title: "Networking",
    img: "./img/p3.png",
    body: `Community is the main value of Pepoleon. During the presale, Pepoleon's plan is to save a part of the attracted budget for the liquidity pool and return another part to the media to expand the community with advertising and marketing.`,
  },
  {
    title: "Listing",
    img: "./img/p3.png",
    body: `After the presale, Pepoleon will be listed on "raydium.io".`,
  },
  {
    title: "Following Initial Listing",
    img: "./img/p3.png",
    body: `We plan to list our base pair on Uniswap and other mainstream DEXes.`,
  },
  {
    title: "Trust Building",
    img: "./img/p3.png",
    body: `We will list Pepoleon on trusted services like CMC and CoinGecko.`,
  },
  {
    title: "Dynamic Advertising",
    img: "./img/p3.png",
    body: `During the Dex, we will continue our social media advertising campaigns with rewards and airdrops for the community.`,
  },
  {
    title: "Additional Features",
    img: "./img/p3.png",
    body: `Our dev team is working on an NFT marketplace and additional Dev Tools right now. We will launch them during the Dex stage.`,
  },
  {
    title: "Central Listing",
    img: "./img/p3.png",
    body: `We are negotiating with different third parties. Our plan is to list Pepoleon on major CEXes as soon as possible.`,
  },
  {
    title: "Competition",
    img: "./img/p3.png",
    body: `Our final goal is to become the largest Meme coin community. We will keep up our competition until Pepoleon conquers all meme coins.`,
  },
];
const RoadmapCard = ({ img, title, children }) => {
  return (
    <div className="rounded-[26px] text-center bg-pep border border-c1 ">
      <header className="flex w-full items-center justify-between p-[18px]">
        <div className="bg-c1 rounded-full size-[18px]"></div>
        <div className="bg-c1 rounded-full size-[18px]"></div>
      </header>
      <Body className="p-[18px]">
        <Grid className="justify-items-center">
          <img src={img} />
          <h3 className="text-[32px] font-impact">{title}</h3>
          <div>{children}</div>
        </Grid>
      </Body>
      <footer className="flex w-full items-center justify-between p-[18px]">
        <div className="bg-c1 rounded-full size-[18px]"></div>
        <div className="bg-c1 rounded-full size-[18px]"></div>
      </footer>
    </div>
  );
};
const Roadmap = () => {
  return (
    <section id="Warmap" className="bg-black/30 py-10">
      <Inside className="max-w-[1200px] mx-auto">
        <div className="text-center font-impact text-[64px] pb-6">
          <span className="text-c1 mobile:bg-red-400">WAR</span>MAP{" "}
        </div>
        <Grid className=" tab:grid-cols-2 mob:grid-cols-1 mob:px-10 tab:px-10 grid-cols-3 gap-8 w-full">
          {RoadmapData.map(({ img, title, body }, index) => (
            <RoadmapCard key={index} img={img} title={title}>
              {body}
            </RoadmapCard>
          ))}
        </Grid>
      </Inside>
    </section>
  );
};
export default Roadmap;
