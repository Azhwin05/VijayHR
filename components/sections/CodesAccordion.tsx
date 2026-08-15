"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

type Code = { name: string; body: string; areas: string[] };

export default function CodesAccordion({ codes }: { codes: Code[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="mt-10 flex flex-col gap-2.5">
      {codes.map((code, i) => {
        const isOpen = open === i;
        return (
          <Reveal
            key={code.name}
            delay={i * 0.04}
            className="rounded-[10px] border transition-colors duration-300"
            style={{
              backgroundColor: isOpen ? "var(--tint-1)" : "transparent",
              borderColor: isOpen
                ? "rgba(var(--accent-rgb),0.22)"
                : "rgba(0,0,0,0.07)",
            }}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
            >
              <span className="font-display text-[17px] text-ink">{code.name}</span>
              <span
                aria-hidden
                className="shrink-0 text-[20px] leading-none transition-transform duration-300"
                style={{
                  color: "var(--accent)",
                  transform: isOpen ? "rotate(90deg)" : "none",
                }}
              >
                {isOpen ? "–" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-7">
                <p className="max-w-2xl text-[14.5px] leading-relaxed text-muted">
                  {code.body}
                </p>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/45">
                  Key Areas
                </p>
                <ul className="mt-3 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                  {code.areas.map((area) => (
                    <li key={area} className="flex gap-2.5 text-[13.5px] leading-relaxed text-ink/70">
                      <span
                        aria-hidden
                        className="mt-[8px] h-1 w-1 shrink-0 rounded-full"
                        style={{ backgroundColor: "var(--accent)" }}
                      />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
