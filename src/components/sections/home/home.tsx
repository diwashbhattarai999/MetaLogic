"use client";

import { useEffect } from "react";

import Hero from "./hero";
import SDLC from "./sdlc";

const Home = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* SDLC Section */}
      <SDLC />
    </>
  );
};

export default Home;
