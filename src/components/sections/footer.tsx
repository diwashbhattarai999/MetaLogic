import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import Container from "@/components/ui/container";
import Logo from "@/components/ui/logo";

const FOOTER_INFOS = [
  {
    title: "Company",
    links: [
      { title: "Feedback", link: "/" },
      { title: "Partnership", link: "/" },
      { title: "Terms and Conditions", link: "/" },
    ],
  },
  {
    title: "Services",
    links: [
      { title: "Custom Software Development", link: "/" },
      { title: "Web Development", link: "/" },
      { title: "Mobile App Development", link: "/" },
      { title: "Cloud Computing Services", link: "/" },
      { title: "Quality Assurance and Testing", link: "/" },
      { title: "UI/UX Designing", link: "/" },
      { title: "Maintenance and Support", link: "/" },
      { title: "Dev Ops", link: "/" },
      { title: "Blockchain Solutions", link: "/" },
    ],
  },
  {
    title: "Join",
    links: [
      { title: "Careers at MetaLogic", link: "/" },
      { title: "Internships", link: "/" },
    ],
  },
];

const FOOTER_CONTACTS = [
  { title: "info@metalogic.com.np", link: "mailto:<EMAIL>", icon: Mail },
  { title: "+ 977 9851353599", link: "tel:+91 9876543210", icon: Phone },
  { title: "Saptakhel, Lalitpur (Head office)", link: "/", icon: MapPin },
];

const Footer = () => {
  return (
    <footer className="mt-8 bg-accent text-background min-h-screen lg:min-h-full lg:h-screen relative">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full blur-3xl z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(800px, rgba(23, 20, 224, 0.422), transparent 80%)",
        }}
      />

      <Container className="flex justify-between flex-col h-full z-10">
        {/* Logo */}
        <div className="-ml-3 my-2 w-fit">
          <Logo color="text-secondary/90" />
        </div>

        {/* Top - Links & Socials */}
        <div className="flex flex-col-reverse md:flex-row gap-10 items-start pt-12 mb-8">
          {/* Left */}
          <div className="w-full md:basis-[55%] grid gap-4 sm:gap-2 md:gap-4 grid-cols-1 min-[350px]:grid-cols-2 xl:grid-cols-3">
            {FOOTER_INFOS.map((section, i) => (
              <ul key={i} className={cn("flex flex-col gap-2")}>
                {/* Title */}
                <h2 className="text-lg md:text-xl font-semibold mb-2 pb-2 pr-4 border-b border-border w-fit">
                  {section.title}
                </h2>

                {/* Links */}
                {section.links.map((link, i) => (
                  <Link
                    href={link.link}
                    key={link.title}
                    className="flex items-center gap-2 group cursor-pointer"
                  >
                    <div className="group-hover:translate-x-1 duration-300 overflow-hidden flex items-center pt-1">
                      <ArrowRight className="hidden md:inline mr-1 w-5 h-5 -translate-x-5 group-hover:translate-x-0 group-hover:-rotate-45" />
                      <div className="md:-translate-x-5 group-hover:translate-x-0 text-muted">
                        {link.title}
                      </div>
                    </div>
                  </Link>
                ))}
              </ul>
            ))}
          </div>

          {/* Right */}
          <div className="w-full md:basis-[45%] flex flex-col gap-8">
            {/* Subscribe to Newsletter */}
            <div className="w-full">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">
                <p>Subscribe to </p>
                <p>our newsletter</p>
              </h1>
              <div className="relative w-full md:w-[80%] text-secondary/80">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="p-2 md:p-5 border border-border bg-muted/30 text-xl backdrop-blur-md rounded-2xl outline-none w-full"
                />
                <ArrowRight className="absolute top-1/2 right-5 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7" />
              </div>
            </div>

            {/* Contact links */}
            <ul className="flex flex-col gap-2">
              <h2 className="text-lg md:text-xl font-semibold mb-2 pb-2 pr-4 border-b border-border w-fit">
                Contacts
              </h2>

              {/* links */}
              <div className="flex flex-col gap-3 text-sm text-muted">
                {FOOTER_CONTACTS.map((contact) => {
                  return (
                    <Link
                      href={contact.link}
                      key={contact.title}
                      className="flex items-center gap-2 group cursor-pointer"
                    >
                      <contact.icon className="w-5 h-5" />

                      <div className="group-hover:translate-x-1 duration-300 overflow-hidden flex items-center">
                        <ArrowRight className="inline mr-1 w-5 h-5 -translate-x-5 group-hover:translate-x-0 group-hover:-rotate-45" />
                        <div className="-translate-x-5 group-hover:translate-x-0">
                          {contact.title}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </ul>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="border-t border-t-border/70 flex items-center justify-center text-center py-4 text-xs md:text-sm max-sm:flex-col max-sm:gap-2">
          <p>
            Copyright &copy; 2024 MetaLogic. All Rights Reserved. Saptakhel,
            Lalitpur
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
