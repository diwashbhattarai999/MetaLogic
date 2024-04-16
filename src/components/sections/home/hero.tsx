"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, CircleCheckBig } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/dist/CustomEase";

import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

import { SDLC_STEPS } from "@/constants";

import Button from "@/components/ui/button";

// register gsap plugins
gsap.registerPlugin(CustomEase);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

// create custome ease
CustomEase.create("cubic-text", "0.25, 1, 0.5, 1");

const Hero = () => {
  const containerRef = useRef(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
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

  // Animation for image zooming on scroll
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const image = imageRef.current;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: image,
          start: "top top",
          scrub: true,
        },
      });

      tl.to(image, {
        scale: 1.3,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex md:items-center flex-col gap-16 z-10 py-12 md:py-16 lg:py-28"
    >
      <div className="text-center flex flex-col items-center gap-4 text-secondary-foreground/90">
        {/* Header */}
        <div className="title overflow-y-hidden inline-block align-bottom">
          <span className="inline-block max-w-6xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-pt translate-y-full will-change-transform py-2">{`Today's Evolution Towards a Digital Future`}</span>
        </div>

        {/* SubHeader */}
        <div className="title overflow-y-hidden inline-block align-bottom">
          <span className="inline-block max-w-2xl lg:max-w-4xl text-sm md:text-lg lg:text-xl font-normal sm:font-semibold md:font-bold  font-pt translate-y-full will-change-transform">{`Discover how our state-of-the-art software solutions can revolutionize your business and drive success in the ever-evolving digital landscape.`}</span>
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

        {/* SDLC steps */}
        <div className="title overflow-y-hidden inline-block align-bottom">
          <span className="inline-block translate-y-full will-change-transform">
            <ul className="flex flex-wrap items-center justify-center gap-6 mt-8 md:-mb-4">
              {SDLC_STEPS.map((step, index) => {
                return (
                  <li
                    key={index}
                    className="flex gap-2 items-center text-sm md:text-lg"
                  >
                    <CircleCheckBig className="w-5 h-5 text-success-foreground" />
                    <h1 className="font-medium">{step.title}</h1>
                  </li>
                );
              })}
            </ul>
          </span>
        </div>
      </div>

      {/* Hero Banner */}
      <div ref={imageRef} className="hero__image glass-container z-0 opacity-0">
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
    </section>
  );
};

export default Hero;
