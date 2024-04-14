import Link from "next/link";
import HoverButton from "./animations/hover-button";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ILogoProps {
  color?: string;
}

const Logo = ({ color = "text-foreground/95" }: ILogoProps) => {
  return (
    <Link href={"/"}>
      <HoverButton>
        <Image
          src={"/images/metalogo.webp"}
          alt="MetaLogo"
          width={50}
          height={50}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={cn(color)}>
          <h1 className="font-bold text-xl sm:text-2xl lg:text-[2rem] tracking-wider font-noto">
            MetaLogic
          </h1>
          <p className="font-medium text-sm font-noto">
            Software Private Limited
          </p>
        </div>
      </HoverButton>
    </Link>
  );
};

export default Logo;
