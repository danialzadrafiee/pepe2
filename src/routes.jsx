import { createBrowserRouter, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Roadmap from "./Roadmap/RoadmapCard";
import Receive from "./Receive/Receive";
import Signup from "./Signup/Signup";

const ProgressBar = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // window.location.href = "https://presale.pepoleon.xyz";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white">
      <div className="progress-bar h-2 bg-c1"></div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="bg-pep">
          <Hero />
          <About />
          <Roadmap />
          {/* <ProgressBar /> */}
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
