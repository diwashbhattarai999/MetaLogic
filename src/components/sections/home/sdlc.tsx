import { SDLC_STEPS } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

const SDLC = () => {
  return (
    <section
      className="min-h-screen flex items-center flex-col gap-16 z-10 mt-16 md:mt-48"
      data-scroll-section
    >
      {/* Header */}
      <div
        className="text-center flex flex-col items-center gap-4 text-secondary-foreground/90 -z-10"
        data-scroll
        data-scroll-speed="0.2"
      >
        <span className="inline-block max-w-6xl text-3xl md:text-4xl lg:text-5xl font-bold font-pt">{`From Vision to Reality: Designing, Building, and Scaling Together`}</span>
      </div>

      {/* SDLC Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SDLC_STEPS.map((step, i) => (
          <div
            key={i}
            className={`row-span-1 bg-accent/95 backdrop-blur-md text-accent-foreground rounded-lg w-full glass-container flex flex-col items-start justify-center px-6 py-16 md:py-10 gap-2 relative ${
              i === 1 ? "row-span-2" : ""
            }`}
            data-scroll
            data-scroll-speed={`${i / 30}`}
            data-scroll-delay={`${i / 100}`}
          >
            <div className="hero__glow absolute inset-0 -z-10 bg-button/10 blur-2xl filter" />
            <h1 className="font-semibold text-3xl">{step.title}</h1>
            <p>{step.description}</p>

            <Image
              src={step.image}
              alt=""
              width={50}
              height={50}
              className={cn(
                "absolute top-2 right-5",
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
