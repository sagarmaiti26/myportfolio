import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="relative mb-8 flex justify-center">
      {/* large faded word behind the heading */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-heading text-[3.25rem] font-bold uppercase leading-none tracking-tight text-brand/[0.08] sm:text-[6.5rem]"
      >
        {children}
      </span>

      <h2 className="font-heading text-3xl font-semibold capitalize tracking-tight text-brand sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}
