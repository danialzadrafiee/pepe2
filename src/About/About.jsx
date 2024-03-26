import { Grid } from "@/Components/Tags/Tags";
import React from "react";
const About = () => {
  return (
    <section>
      <div id="About" className="flex mob:bg-gradient-to-b from-black/20 to-transparent tab:flex-col mob:flex-col max-w-[1200px] mx-auto py-10 justify-center items-center gap-12">
        <img src="./img/p2.png" className="w-[400px] mob:w-auto tab:w-auto tab:h-72 mob:h-60" />
        <Grid className="mob:text-center tab:-mt-10 mob:-mt-10">
          <h2 className="text-[60px] tab:items-center tab:justify-center tab:text-[40px] mob:items-center mob:justify-center  mob:text-[30px] flex gap-2 font-impact">
            ABOUT
            <span className="text-c1">PEPOLEON</span>
          </h2>
          <div className="mob:px-4 tab:max-w-lg tab:text-center mob:text-[15px]">
            The internet is drowning in normie memes! Bland, uninspired, and forgettable. The dream of a truly Meme Empire fades without a memeperor. But fear not, Pepoleon has arrived! Pepoleon is
            tired of these pretenders to the meme throne. Pepoleon will: Wage war on the normies: No more recycled formats, no more uninspired rehashes. Pepoleon will conquer the memes, one meme at a
            time. Build a Meme Empire: From the dankest corners of Reddit to the fleeting glory of Twitter trends, Pepoleon's dominion shall spread. Pepoleon will tweet, Pepoleon will meme, Pepoleon
            will go viral. Join Pepoleon's Army and be a part of the conquest.
          </div>
        </Grid>
      </div>
    </section>
  );
};

export default About;
