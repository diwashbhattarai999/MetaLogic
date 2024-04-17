"use client";

import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { cn } from "@/lib/utils";

import { SDLC_STEPS } from "@/constants";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SDLC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stepsRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const screenWidth = window.innerWidth;
      const translateX = screenWidth <= 768 ? `-410vw` : `-150vw`;

      gsap.fromTo(
        stepsRef.current,
        {
          translateX: 0,
        },
        {
          translateX,
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
            pin: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="min-h-screen w-full flex flex-col gap-16 z-10 mt-16 md:mt-48 "
    >
      {/* Header */}

      <div
        data-scroll
        data-scroll-speed="0.15"
        className="text-center w-full text-3xl md:text-4xl lg:text-5xl font-bold font-pt flex items-center justify-center"
      >
        <h1 className="max-w-6xl">
          {`From Vision to Reality: Designing, Building, and Scaling Together`}
        </h1>
      </div>

      {/* SDLC Steps */}
      <div
        ref={stepsRef}
        className="flex gap-8 items-center justify-between relative w-[500vw] md:w-[245vw] h-full"
      >
        {SDLC_STEPS.map((step, i) => (
          <div
            key={i}
            className="h-[24rem] w-[100vw] md:w-[50vw] backdrop-blur-md text-primary rounded-lg bg-background border border-border/50 flex flex-col items-start justify-center px-6 py-16 md:py-10 gap-2 relative shadow-sm"
          >
            {/* Background glow */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full blur-3xl -z-50 pointer-events-none"
              style={{
                background:
                  "radial-gradient(800px, rgba(65, 68, 232, 0.1), transparent 30%)",
              }}
            />
            <h1 className="font-semibold text-3xl">{step.title}</h1>
            <p>{step.description}</p>
            <Image
              src={step.image}
              alt={step.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={cn(
                "!left-auto !top-2 !right-5 !w-14 !h-14",
                step.rotate && "rotate-45"
              )}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SDLC;
