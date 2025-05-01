import { ReactNode } from "react";

export default function P({ children }: { children: ReactNode }) {
  return <p className="mb-5">{children}</p>;
}
