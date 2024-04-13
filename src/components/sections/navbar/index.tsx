"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Quicksand } from "next/font/google";
import { AlignRight, X } from "lucide-react";

import { NAV_LINKS } from "@/constants";

import { cn } from "@/lib/utils";

import Container from "@/components/container";
import Button from "@/components/ui/button";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["700"] });

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const pathname = usePathname();

  const handleToggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="py-3 bg-background/70 backdrop-blur-md border-b border-border fixed top-0 left-0 w-full">
      <Container className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={"/images/metalogo.webp"}
            alt="MetaLogo"
            width={50}
            height={50}
            priority
          />
          <h1
            className={cn(
              "text-foreground font-bold text-2xl lg:text-4xl tracking-wide",
              quicksand.className
            )}
          >
            MetaLogic
          </h1>
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-3 lg:gap-8 items-center">
          {NAV_LINKS.map((link) => {
            return (
              <li key={link.title} className="px-1">
                <Link
                  href={link.link}
                  className={cn(
                    "text-primary text-sm lg:text-base font-semibold",
                    pathname === link.link ? "slider" : "slider hover-slider"
                  )}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          {/* CTA */}
          <Button className="max-sm:hidden">Get in Touch</Button>

          {/* Mobile Nav */}
          <div className="md:hidden relative w-7 h-7">
            {/* Hamburger Icons */}
            {showMenu ? (
              <X
                className="cursor-pointer w-full h-full absolute z-50 inset-0"
                onClick={handleToggleMenu}
              />
            ) : (
              <AlignRight
                className="cursor-pointer w-full h-full absolute z-50 inset-0"
                onClick={handleToggleMenu}
              />
            )}

            {/* Hamburger Menu */}
            <div
              className={cn(
                "fixed inset-0 w-screen h-screen flex items-center justify-center bg-background/95 backdrop-blur-sm z-40 duration-500",
                showMenu
                  ? "translate-x-0  pointer-events-auto"
                  : "-translate-x-[100%] pointer-events-none"
              )}
            >
              {/* Links */}
              <ul className="flex flex-col gap-10 items-center">
                {NAV_LINKS.map((link) => {
                  return (
                    <li key={link.title} className="px-1">
                      <Link
                        href={link.link}
                        className={cn(
                          "text-primary/90 text-3xl font-semibold",
                          pathname === link.link
                            ? "slider"
                            : "slider hover-slider"
                        )}
                        onClick={() => setShowMenu(false)}
                      >
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
