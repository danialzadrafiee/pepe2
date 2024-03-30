import React from "react";
import { Flex, Grid } from "@/Components/Tags/Tags";
import Header from "@/Header/Header";
const Hero = () => {
  const TokenomicsCard = ({ title, value }) => {
    return (
      <Flex className="flex-col items-center   justify-center">
        <div className="border-c1 mob:border mob:pt-4  border-r w-full">
          <div className="bg-c2 w-max mx-auto  h-max text-c1 border border-c1  py-2 px-3 tab:text-sm tab:px-2 tab:py-1 text-[16px] mob:text-[14px] rounded-full">{title}</div>
          <div className="text-[64px] tab:text-[35px]  mob:text-[32px] text-center font-impact text-pep">{value}</div>
        </div>
      </Flex>
    );
  };
  return (
    <section className="bg-hero">
      <Flex className="h-dvh max-w-[1200px] mob:flex-col tab:flex-col  mx-auto justify-between items-center">
        <Grid>
          <Header />
          <div className="font-impact leading-[80px] mob:text-[45px] tab:text-[60px] tab:mt-48  tab:leading-[60px]  tab:mx-auto tab:text-center  tab:max-w-lg  mob:mt-32 mob:leading-[50px] mob:text-center text-[80px] mob:pb-4  tab:pb-2 pb-14">
            Don't miss the great <span className="text-[#0cbe50]">presale</span>
          </div>
          <div className="text-xl mob:text-lg mob:text-center mob:px-4 mob:mx-auto  max-w-lg tab:text-center pb-6">Presale will launch soon. Join Pepoleon's army to conquer all the memes.</div>
          <Grid className="grid-cols-2 origin-top mob:scale-[0.8] mob:mx-auto tab:mx-auto  gap-2  w-max">
            <a
              href="https://t.me/PepoleonPortal"
              className="mb-2 inline-block rounded bg-[#0cbe50]  text-c3 hover:text-white hover:bg-blue-500 px-6 py-2.5 mob:px-5 mob:py-2 text-sm font-medium w-max uppercase shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
              <span className="flex gap-2 items-center">
                <svg className="size-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                  <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                </svg>
                Telegram
              </span>
            </a>
            <a
              href="https://twitter.com/PepoleonOnSol"
              type="button"
              className="mb-2 flex rounded  text-c3 hover:text-white bg-[#0cbe50] hover:bg-blue-500 px-6 py-2.5 text-sm w-max font-medium uppercase leading-normal  shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
              <span className="flex gap-2  items-center">
                <svg className="size-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                </svg>
                <div>Twitter</div>
              </span>
            </a>
          </Grid>
        </Grid>
        <img src="./img/p1.png" className="w-[580px] mob:w-auto tab:w-auto tab:h-[35dvh]  mob:h-[35dvh] self-end" />
      </Flex>
      <section id="Tokenomics">
        <Grid className="grid-cols-4 mob:grid-cols-2 border-t border-b border-c1 mob:h-max h-[195px]  bg-black/40 w-full">
          <TokenomicsCard title="TOTAL SUPPLY" value="690B" />
          <TokenomicsCard title="PRESALE SUPPLY" value="379.5B" />
          <TokenomicsCard title="LP BURNE" value="AT  LAUNCH" />
          <TokenomicsCard title="OWNERSHIP" value="REWOKE" />
        </Grid>
      </section>
    </section>
  );
};

export default Hero;
