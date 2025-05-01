import { ReactNode } from "react";

export default function Section({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) {
  return (
    <section className="w-full max-w-4xl pl-6 pr-6 scroll-mt-24 z-40" id={id}>
      {children}
    </section>
  );
}
