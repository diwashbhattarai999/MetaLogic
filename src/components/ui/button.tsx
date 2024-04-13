import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  outline?: boolean;
  destructive?: boolean;
  icon?: boolean;
  full?: boolean;
  disabled?: boolean;
  className?: string;
}

const Button = ({
  children,
  outline,
  destructive,
  icon,
  full,
  disabled,
  className,
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-button text-button-foreground hover:bg-button/90 hover:text-button-foreground/90 py-2 px-4 rounded-md duration-300 font-medium cursor-pointer disabled:cursor-not-allowed disabled:opacity-60",
        outline &&
          "bg-transparent text-secondary-foreground border-2 border-muted-foreground hover:border-transparent",
        destructive && "bg-destructive hover:bg-destructive/90 text-white",
        icon && "flex items-center justify-center gap-4 py-3",
        full ? "w-full" : "w-fit",
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
