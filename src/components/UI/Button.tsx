import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonSize = "sm" | "default" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  size?: ButtonSize;
  children: ReactNode;
};

export const Button = ({
  className = "",
  size = "default",
  children,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent bg-accent text-primary-tx hover:bg-accent/90 shadow-lg shadow-accent/25";

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
