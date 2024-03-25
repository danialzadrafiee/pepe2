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
            Meme Conquest Awaits The internet is drowning in normie memes. Bland, uninspired, and utterly forgettable. The dream of a true Meme Empire fades without a memeperor. But fear not, for
            Pepoleon has arrived! We, the Pepoleon Army, are tired of these pretenders. We yearn for a leader with a strategic mind, a bicorne that demands respect, and the undeniable swagger of a
            true memperor. Join us, and together we shall: Wage war on the normies: No more recycled formats, no more uninspired rehashes. We will conquer the memes with fresh LOLs and originality.
            Build a Meme Empire: From the dankest corners of Reddit to the fleeting glory of Twitter trends, our dominion shall spread. We will leave other meme coins trembling in our wake. Moon with
            the Power of Laughter: Forget Lambos. We'll be soaring through the digital stratosphere, fueled by the unbridled joy of a perfectly executed meme. We'll tweet, we'll meme, we'll moon. Are
            you ready to make Meme Nation truly chad again? Then enlist in the Pepoleon Army today!
          </div>
        </Grid>
      </div>
    </section>
  );
};

export default About;
