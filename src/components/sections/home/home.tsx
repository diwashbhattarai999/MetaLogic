"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Container from "@/components/ui/container";
import Hero from "@/components/sections/home/hero";
import SDLC from "@/components/sections/home/sdlc";
import WhyMetalogic from "@/components/sections/home/why-metalogic";
import ExploreOurProducts from "@/components/sections/home//explore-our-products";

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
        <Hero />
        <SDLC />
      </Container>

      <WhyMetalogic />
      <Container>
        <ExploreOurProducts />
      </Container>

      <div className="min-h-screen"></div>
    </>
  );
};

export default Home;
