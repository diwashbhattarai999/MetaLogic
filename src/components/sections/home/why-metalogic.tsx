"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import { WHY_METALOGIC } from "@/constants";

import { cn } from "@/lib/utils";

import Container from "@/components/ui/container";
import BallLine from "./ball-line";

const WhyMetalogic = () => {
  return (
    <section className="bg-accent text-accent-foreground mt-5 py-20">
      <Container className="flex flex-col items-center gap-20  min-h-screen relative">
        {/* Background glow */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full blur-3xl z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(800px, rgba(23, 20, 224, 0.3), transparent 80%)",
          }}
        />

        {/* Header & Subheader */}
        <div
          className="text-center max-w-6xl"
          data-scroll
          data-scroll-speed="0.05"
        >
          <h1 className="sm:text-xl md:text-2xl lg:text-3xl font-bold">
            Why Metalogic <span className="text-button">?</span>
          </h1>
          <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-pt">
            To upscale your business to the next level
          </p>
        </div>

        {/* Content */}
        <div className="md:border border-muted rounded-lg md:bg-background/10 backdrop-blur-md shadow-sm p-0 md:p-20 max-w-7xl">
          <h2 className="md:text-xl font-semibold text-center">
            Innovation is our driving force. We explore the latest tech trends
            to deliver groundbreaking solutions that keep you ahead.
          </h2>

          <div className="flex items-start justify-center gap-8 mt-16">
            {/* left - svg */}
            <BallLine />

            {/* right - content */}
            <div className="max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-4">
              {WHY_METALOGIC.map((w, i) => {
                return (
                  <div
                    key={w.title}
                    className={cn(
                      "border border-muted rounded-lg bg-background/10 backdrop-blur-md shadow-sm p-8 flex items-start justify-center flex-col gap-2",
                      i === 1 && "row-span-2 gap-8"
                    )}
                  >
                    <h3 className="text-xl font-semibold">{w.title}</h3>
                    <p className="text-muted">{w.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyMetalogic;
