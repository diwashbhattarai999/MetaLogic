"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Info } from "lucide-react";

import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

import { cn } from "@/lib/utils";

import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Hero from "@/components/sections/home/hero";
import SDLC from "@/components/sections/home/sdlc";
import OurServices from "@/components/sections/home/our-services";
import WhyMetalogic from "@/components/sections/home/why-metalogic";
import ExploreOurProducts from "@/components/sections/home/explore-our-products";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [showInfo, setShowInfo] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set(".info", { opacity: 1 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    tl.fromTo(
      ".info",
      { y: 50 },
      { y: 0, opacity: 1, duration: 1, delay: -0.5 }
    );
  });

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

      {/* Contact us section */}
      <div className="min-h-[60vh] py-10 flex items-center justify-center flex-col gap-8 relative">
        <div
          className="text-center flex flex-col items-center gap-4 text-secondary-foreground/90 -z-10 max-w-3xl"
          data-scroll
          data-scroll-speed="0.05"
        >
          <span className="inline-block max-w-6xl text-lg md:text-4xl lg:text-5xl font-bold font-pt">{`Are you ready to grow your business with us?`}</span>
          <p className="text-sm md:text-xl font-medium">
            Contact us today and discover how we can help your business thrive.
          </p>
        </div>
        <Button className="w-32 md:w-40 md:p-4">Contact Us</Button>

        {/* Background glow */}
        <div
          className="absolute -bottom-96 left-1/2 -translate-x-1/2 w-full h-[80vh] rounded-full blur-3xl -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(800px, rgba(23, 20, 224, 0.4), transparent 80%)",
          }}
        />
      </div>

      {/* i for brief explanation of why I chose to recreate Home Page */}
      <div
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
        className="info opacity-0 fixed top-28 right-10 p-1 bg-white rounded-full border border-border/30 shadow-lg cursor-pointer z-[60]"
      >
        <Info className="w-7 h-7 text-muted-foreground" />
      </div>

      <div
        className={cn(
          "transition",
          showInfo
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="fixed inset-0 bg-black/10 backdrop-blur-md h-screen w-screen z-50">
          <div
            className="bg-white border border-border/30 w-5 h-5 rotate-45 fixed top-[9.5rem] right-[3.2rem] rounded-sm"
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
          />
          <div
            className="fixed top-[9.8rem] right-10 flex flex-col items-center gap-3 bg-white border border-border/50 rounded-lg p-6 shadow-lg max-w-4xl md:text-lg font-pt tracking-wide text-primary/90"
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
          >
            <span>
              I chose to redesign the <b>Home Page</b> to enhance its visual
              appeal and user-friendliness. As the initial point of contact for
              most users, the homepage holds significant importance in
              establishing trust and engagement. By creating an eye-catching
              design, I want to grab
              {` visitors'`}attention and leave a strong impression, setting the
              tone for their time on our platform.
            </span>

            <span>
              This redesigned page incorporates <b>GSAP animations</b> and{" "}
              <b>Locomotive Scroll</b>, providing an immersive and captivating
              experience. With these tools, I enhanced the interface, creating
              smooth animations and transitions that engage visitors. These
              improvements not only enhance the aesthetics but also make
              browsing more intuitive and enjoyable, showing our commitment to
              innovation and excellence.
            </span>

            <span>
              I utilized additional tools to enhance various aspects of the
              website. For smoother page transitions, I integrated{" "}
              <b>nextjs-top-loader</b>, ensuring a seamless user experience. For
              notifying users, I incorporated{" "}
              <b>Sonner for toast notifications</b>, enhancing interactivity.
              Additionally, I leveraged <b>Tailwind</b> for efficient styling,
              ensuring a visually appealing and consistent design across the
              site.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
