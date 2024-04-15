"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlignRight, X } from "lucide-react";

import { NAV_LINKS } from "@/constants";

import { cn } from "@/lib/utils";

import useNavbarAnimation from "@/hooks/useNavbarAnimation";

import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Logo from "@/components/ui/logo";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const pathname = usePathname();

  const handleToggleMenu = () => setShowMenu(!showMenu);

  // For hiding when scrolling down and showing when scrolling up
  const navbarRef = useNavbarAnimation();

  return (
    <nav
      ref={navbarRef}
      className="py-3 bg-background/70 backdrop-blur-md border-b border-border/20 fixed top-0 left-0 w-full z-50"
    >
      <Container className="flex items-center justify-between w-full">
        {/* Logo */}
        <Logo />

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
            {/* Close */}
            <X
              className={cn(
                "cursor-pointer w-full h-full absolute z-50 inset-0 duration-300",
                showMenu
                  ? "rotate-0 opacity-100 pointer-events-auto"
                  : "rotate-180 opacity-0 pointer-events-none"
              )}
              onClick={handleToggleMenu}
            />

            {/* Menu */}
            <AlignRight
              className={cn(
                "cursor-pointer w-full h-full absolute z-50 inset-0 duration-300",
                showMenu
                  ? "rotate-180 opacity-0 pointer-events-none"
                  : "rotate-0 opacity-100 pointer-events-auto"
              )}
              onClick={handleToggleMenu}
            />

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
