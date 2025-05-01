import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function P({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const mergedClassName = twMerge("mb-5", className || []);
  return <p className={mergedClassName}>{children}</p>;
}
