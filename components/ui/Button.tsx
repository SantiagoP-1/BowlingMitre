import type { ReactNode } from "react";

type CommonProps = {
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
};

type Props = ButtonAsLink | ButtonAsButton;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal";

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

const variants = {
  primary:
    "bg-linear-to-r from-brand-red to-brand-red-deep text-white shadow-[0_10px_28px_-10px_rgba(227,28,35,0.75)] hover:brightness-110 hover:-translate-y-0.5",
  ghost:
    "bg-white/[0.03] text-paper border border-line hover:border-brand-teal hover:text-brand-teal",
};

export function Button(props: Props) {
  const { variant = "primary", size = "md", icon, className = "", children } = props;
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <a href={props.href} target={props.target} rel={props.rel} className={classes}>
        {icon}
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button type={buttonProps.type ?? "button"} onClick={buttonProps.onClick} className={classes}>
      {icon}
      {children}
    </button>
  );
}
