import { createBrowserRouter } from "react-router-dom";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Roadmap from "./Roadmap/RoadmapCard";
import Receive from "./Receive/Receive";
import Signup from "./Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="bg-pep">
          <Hero />
          <About />
          <Roadmap />
        </div>
      </>
    ),
  },
  {
    path: "/withdraw_airdrop",
    element: <Receive />,
  },
  {
    path: "/presale_signup",
    element: <Signup />,
  },
]);

export default router;
