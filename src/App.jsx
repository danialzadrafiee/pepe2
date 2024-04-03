import Header from "./Header/Header";
import About from "./About/About";
import { Flex, Grid, Inside } from "./Components/Tags/Tags";
import Hero from "./Hero/Hero";
import Roadmap from "./Roadmap/RoadmapCard";
import "@/button.css";
import AirdropModal from "@/Components/AirdropModal/AirdropModal";
import { useState } from "react";
import { useMainContext } from "./Context";
const App = () => {
  const { page, setPage } = useMainContext();
  return (
    <>
      <main className="bg-pep">
        {page == "airdrop" ? (
          <Recive />
        ) : (
          <>
            <Hero />
            <About />
            <Roadmap />
          </>
        )}
      </main>
    </>
  );
};

export default App;
