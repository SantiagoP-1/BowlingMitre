import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  icon?: ReactNode;
};

export function Button({ href, children, variant = "solid", icon }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-150";
  const solid = "bg-brand-red text-cream hover:bg-[#9c2818]";
  const outline = "border border-cream/40 text-cream hover:border-cream/80";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variant === "solid" ? solid : outline}`}
    >
      {icon}
      {children}
    </a>
  );
}
