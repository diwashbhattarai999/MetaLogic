"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, CircleCheckBig } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Button from "@/components/ui/button";

import { CustomEase } from "gsap/dist/CustomEase";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { PRODUCT_DEVELOPMENT_LIFECYCLE } from "@/constants";

// register gsap plugins
gsap.registerPlugin(CustomEase);
gsap.registerPlugin(useGSAP);

// create custome ease
CustomEase.create("cubic-text", "0.25, 1, 0.5, 1");

const Hero = () => {
  const containerRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Animation for header and subheader
  useEffect(() => {
    const titles = document.querySelectorAll(".title");
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    titles.forEach((title, index) => {
      const el = title.querySelectorAll("div span");
      const delay = index * 0.08;

      tl.to(
        el,
        {
          duration: 0.5,
          ease: "cubic-text",
          y: 0,
        },
        delay
      );
    });

    return () => {};
  }, []);

  // Animation for image and glow
  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(".hero__image, .hero__glow", { opacity: 1 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      tl.fromTo(
        ".hero__image",
        { y: 100 },
        { y: 0, opacity: 1, duration: 1.3 },
        "+=0.3"
      );
      tl.fromTo(
        ".hero__glow",
        { scale: 0.5 },
        { scale: 1, opacity: 1, duration: 1.8 },
        "-=1"
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center flex-col gap-16 z-10 py-12 md:py-16 lg:py-28"
    >
      <div className="text-center flex flex-col items-center gap-4 text-secondary-foreground/90">
        {/* Header */}
        <div className="title overflow-y-hidden inline-block align-bottom">
          <span className="inline-block max-w-6xl text-4xl md:text-5xl lg:text-6xl font-bold font-pt translate-y-full will-change-transform">{`Today's Evolution Towards a Digital Future`}</span>
        </div>

        {/* SubHeader */}
        <div className="title overflow-y-hidden inline-block align-bottom">
          <span className="inline-block max-w-2xl lg:max-w-4xl text-sm md:text-lg lg:text-xl font-bold  font-pt translate-y-full will-change-transform">{`Discover how our state-of-the-art software solutions can revolutionize your business and drive success in the ever-evolving digital landscape.`}</span>
        </div>

        {/* CTA */}
        <div className="title overflow-y-hidden inline-block align-bottom">
          <span className="inline-block translate-y-full will-change-transform">
            <Button
              className="w-fit max-md:py-2 md:w-40 mt-6 rounded-full"
              icon
              outline
            >
              Learn More
              <ArrowRight />
            </Button>
          </span>
        </div>

        {/* Development steps */}
        <div className="title overflow-y-hidden inline-block align-bottom">
          <span className="inline-block translate-y-full will-change-transform">
            <ul className="flex items-center gap-6 mt-8 -mb-4">
              {PRODUCT_DEVELOPMENT_LIFECYCLE.map((pdl, index) => {
                return (
                  <li
                    key={index}
                    className="flex gap-2 items-center text-sm md:text-lg"
                  >
                    <CircleCheckBig className="w-5 h-5 text-success-foreground" />
                    <h1 className="font-medium">{pdl.title}</h1>
                  </li>
                );
              })}
            </ul>
          </span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="hero__image glass-container z-0 opacity-0">
        <div className="hero__glow absolute inset-0 -z-10 bg-button/30 blur-2xl filter opacity-0" />
        <Image
          src={"/images/hero-banner.png"}
          alt="Hero Banner"
          width={1000}
          height={1000}
          priority
          quality={100}
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default Hero;
