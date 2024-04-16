"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Hero from "@/components/sections/home/hero";
import SDLC from "@/components/sections/home/sdlc";
import WhyMetalogic from "./why-metalogic";
import Container from "@/components/ui/container";

const Home = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <Container className="h-full w-full">
        {/* Hero Section */}
        <Hero />

        {/* SDLC Section */}
        <SDLC />
      </Container>

      {/* Why Metalogic Section */}
      <WhyMetalogic />

      <Container>
        <div className="min-h-screen"></div>
      </Container>
    </>
  );
};

export default Home;
