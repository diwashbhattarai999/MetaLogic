import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: IContainerProps) => {
  return (
    <div
      className={cn("max-w-[1700px] mx-auto md:px-10 sm:px-6 px-4", className)}
    >
      {children}
    </div>
  );
};

export default Container;
