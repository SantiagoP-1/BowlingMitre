import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  maxW = "max-w-6xl",
}: {
  children: ReactNode;
  className?: string;
  maxW?: string;
}) {
  return <div className={`mx-auto w-full ${maxW} px-5 sm:px-8 ${className}`}>{children}</div>;
}
