import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Button from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center flex-col gap-16 z-10 ">
      <div className="text-center flex flex-col items-center text-secondary-foreground/90">
        {/* Header & SubHeader */}
        <h1 className="max-w-6xl text-4xl md:text-5xl lg:text-6xl font-bold">{`Today's Evolution Towards a Digital Future`}</h1>
        <p className="max-w-2xl lg:max-w-4xl text-sm md:text-lg lg:text-xl font-bold my-4">{`Discover how our state-of-the-art software solutions can revolutionize your business and drive success in the ever-evolving digital landscape.`}</p>

        {/* CTA */}
        <Button className="w-fit max-md:py-2 md:w-40 mt-6" icon outline>
          Learn More
          <ArrowRight />
        </Button>
      </div>

      {/* Hero Banner */}
      <Image
        src={"/images/hero-banner.png"}
        alt="Hero Banner"
        width={1000}
        height={1000}
        priority
        quality={100}
        className="rounded-md border-4 border-border"
      />
    </div>
  );
};

export default Hero;
