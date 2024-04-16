import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { OUR_PRODUCTS } from "@/constants";

import { cn } from "@/lib/utils";

import Button from "@/components/ui/button";

const ExploreOurProducts = () => {
  return (
    <section className="min-h-screen flex items-center flex-col gap-16 z-10 mt-16 md:mt-32">
      {/* Header */}
      <div
        className="text-center flex flex-col items-center gap-4 text-secondary-foreground/90 -z-10"
        data-scroll
        data-scroll-speed="0.05"
      >
        <span className="inline-block max-w-6xl text-3xl md:text-4xl lg:text-5xl font-bold font-pt">{`Explore Our Products`}</span>
      </div>

      {/* Products */}
      {OUR_PRODUCTS.map((product, index) => {
        return (
          <div
            key={product.title}
            className={cn(
              "flex flex-col md:flex-row items-start justify-between gap-4 w-full max-w-7xl h-[800px] relative",
              index % 2 !== 0 && "md:flex-row-reverse text-right"
            )}
          >
            {/* Background SVG */}
            <div className="absolute top-0 -z-10 h-full w-full bg-white opacity-50">
              <Image
                src={"/images/explore-bg.svg"}
                alt="Chart"
                width={1000}
                height={1000}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Left - Product description */}
            <div
              className={cn(
                "md:basis-[55%] mt-36 flex flex-col",
                index % 2 !== 0 ? "items-end" : "items-start"
              )}
            >
              {/* Title */}
              <h3 className="text-accent font-semibold mb-2 relative text-lg whitespace-nowrap">
                {product.title}

                {/* Title Overlay */}
                <span
                  className={cn(
                    "absolute text-6xl opacity-10 -z-10",
                    index % 2 !== 0 ? "-top-6 -right-1" : "-top-6 -left-1"
                  )}
                >
                  {product.title}
                </span>
              </h3>

              {/* Subtitle */}
              <h2
                className={cn(
                  "text-primary font-bold text-xl md:text-2xl lg:text-3xl mb-4",
                  index % 2 !== 0 ? "md:-mr-[1px]" : "md:-ml-[1px]"
                )}
              >
                {product.subtitle}
              </h2>

              {/* Description */}
              <ul className="max-w-2xl">
                {product.descriptions.map((description) => {
                  return (
                    <li
                      key={description}
                      className="text-muted-foreground font-medium"
                    >
                      {description}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right  Product Images */}
            <div className="md:basis-[45%] h-full relative">
              {product.images.map((image, index) => {
                return (
                  <div key={index}>
                    <div className="hero__glow absolute inset-0 -z-10 bg-button/5 blur-2xl filter h-1/2 rounded-full" />

                    <Image
                      src={image}
                      alt="Chart"
                      width={200}
                      height={200}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={cn(
                        "absolute",
                        index == 0 && "top-0 left-0",
                        index == 1 && "top-0 right-0",
                        index == 2 && "bottom-40 left-1/2"
                      )}
                      data-scroll
                      data-scroll-speed={index / 15}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* See All Button */}
      <Link href={"/"} className="-mt-32 mb-16 z-40">
        <Button className="p-4 w-60" icon outline>
          See All Products
          <ArrowRight />
        </Button>
      </Link>
    </section>
  );
};

export default ExploreOurProducts;
