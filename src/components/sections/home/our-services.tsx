"use client";
import { OUR_SERVICES } from "@/constants";

import { cn } from "@/lib/utils";

import Container from "@/components/ui/container";
import Image from "next/image";

const OurServices = () => {
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
          <h1 className="inline-block max-w-6xl text-3xl md:text-4xl lg:text-5xl font-bold font-pt">
            Our Services
          </h1>
        </div>

        {/* Content */}
        <div className="md:border border-muted rounded-lg md:bg-background/10 backdrop-blur-md shadow-sm p-0 md:p-20 max-w-7xl">
          <div className="max-w-4xl grid grid-cols-1 lg:grid-cols-2 row-span-4 gap-4">
            {OUR_SERVICES.map((service, i) => {
              return (
                <div
                  key={service.title}
                  className={cn(
                    "border border-muted rounded-lg bg-background/10 backdrop-blur-md shadow-sm p-8 flex items-start justify-center flex-col gap-2 relative",
                    i === 1 && "row-span-2 gap-8"
                  )}
                >
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted">{service.description}</p>

                  <Image
                    src={service.image}
                    alt=""
                    width={50}
                    height={50}
                    className="absolute top-2 right-5"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurServices;
