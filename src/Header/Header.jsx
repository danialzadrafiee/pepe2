import { Flex, Grid, Inside } from "@/Components/Tags/Tags";
import React, { useEffect, useRef, useState } from "react";
import { Pause, Play, TelegramLogo, TwitterLogo } from "@phosphor-icons/react";
import { useMainContext } from "@/Context";
import { Link } from "react-router-dom";
const Header = () => {
  const [firstPlayFlag, setFirstPlayFlag] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  useEffect(() => {
    const playAudio = () => {
      if (firstPlayFlag === 0) {
        audioRef.current.play();
        setIsPlaying(true);
        setFirstPlayFlag(1);
      }
    };

    document.addEventListener("click", playAudio);
    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, [firstPlayFlag]);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <header className=" absolute bg-gradient-to-b from-black/50 to-transparent top-0 w-full left-0">
      <Inside className="max-w-[1200px] mx-auto mob:px-2 grid tab:grid-cols-2 tab:px-6 mob:grid-cols-2 grid-cols-3 w-full items-center pt-3 justify-between">
        <Flex className="items-center gap-2 ">
          <img src="./img/p3.png" className="size-[80px] flip" alt="logo" />
          <Grid>
            <div className="text-3xl mob:text-2xl pt-3 leading-3  mob:leading-[10px] font-impact text-c1 b">Pepoleon</div>
            <div>Presale</div>
          </Grid>
        </Flex>
        <Flex className="gap-8 tab:hidden mob:hidden items-center justify-center">
          <a href="#Tokenomics">Tokenomic</a>
          <a href="#About">About</a>
          <a href="#Warmap">War Map</a>
        </Flex>
        <Flex className="justify-end gap-1 items-center">
          <a href="https://t.me/PepoleonPortal" className="size-10 bg-c3 rounded border border-c1/50 text-c1 flex items-center justify-center">
            <TelegramLogo size={20} weight="fill" />
          </a>
          <a href="https://twitter.com/PepoleonOnSol" className="size-10 bg-c3 rounded border border-c1/50 text-c1 flex items-center justify-center">
            <TwitterLogo size={20} weight="fill" />
          </a>

          <div
            onClick={() => {
              toggleMusic();
            }}
            className=" cursor-pointer size-10 bg-c3 rounded border border-c1/50 text-c1 flex items-center justify-center"
          >
            {isPlaying ? <Pause size={20} weight="fill" /> : <Play size={20} weight="fill" />}
          </div>
          <audio ref={audioRef} loop={true} src="./pepoleon.mp3"></audio>
        </Flex>
      </Inside>
    </header>
  );
};
export default Header;
