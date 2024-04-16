"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Container from "@/components/ui/container";
import Hero from "@/components/sections/home/hero";
import SDLC from "@/components/sections/home/sdlc";
import WhyMetalogic from "@/components/sections/home/why-metalogic";
import ExploreOurProducts from "@/components/sections/home/explore-our-products";
import OurServices from "@/components/sections/home/our-services";
import Button from "@/components/ui/button";

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

      <OurServices />

      <div className="min-h-[60vh] py-10 flex items-center justify-center flex-col gap-8 relative">
        <div
          className="text-center flex flex-col items-center gap-4 text-secondary-foreground/90 -z-10 max-w-3xl"
          data-scroll
          data-scroll-speed="0.05"
        >
          <span className="inline-block max-w-6xl text-3xl md:text-4xl lg:text-5xl font-bold font-pt">{`Are you ready to grow your business with us?`}</span>
          <p className="text-xl font-medium">
            Contact us today and discover how we can help your business thrive.
          </p>
        </div>
        <Button className="w-40 p-4">Contact Us</Button>

        {/* Background glow */}
        <div
          className="absolute -bottom-96 left-1/2 -translate-x-1/2 w-full h-[80vh] rounded-full blur-3xl -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(800px, rgba(23, 20, 224, 0.4), transparent 80%)",
          }}
        />
      </div>
    </>
  );
};

export default Home;
