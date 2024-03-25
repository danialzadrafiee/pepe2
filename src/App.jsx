import Header from "./Header/Header";
import About from "./About/About";
import { Flex, Grid, Inside } from "./Components/Tags/Tags";
import Hero from "./Hero/Hero";
import Roadmap from "./Roadmap/RoadmapCard";

const App = () => {
  return (
    <>
      <main className="bg-pep">
        <Hero />
        <About />
        <Roadmap />
      </main>
    </>
  );
};

export default App;
