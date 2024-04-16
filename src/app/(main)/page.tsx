import Container from "@/components/ui/container";
import Home from "@/components/sections/home/home";

export default function HomePage() {
  return (
    <>
      {/* Background grid */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#69696916_1px,transparent_1px),linear-gradient(to_bottom,#69696916_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#676767_70%,transparent_110%)] -z-10" />

      <Home />
    </>
  );
}
