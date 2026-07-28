"use client";

import { useState } from "react";

type Faq = { q: string; a: string };
type Group = { title: string; items: Faq[] };

export default function FaqAccordion({ groups }: { groups: Group[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-14">
      {groups.map((group) => (
        <div key={group.title}>
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              {group.title}
            </span>
            <span
              aria-hidden
              className="h-[2px] w-9 rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
            />
          </div>

          <div className="mt-7 flex flex-col gap-2.5">
            {group.items.map((item) => {
              const key = `${group.title}-${item.q}`;
              const isOpen = open === key;
              return (
                <div
                  key={key}
                  className="rounded-[10px] border transition-colors duration-300"
                  style={{
                    backgroundColor: isOpen ? "var(--tint-1)" : "transparent",
                    borderColor: isOpen
                      ? "rgba(var(--accent-rgb),0.22)"
                      : "rgba(0,0,0,0.07)",
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : key)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="text-[16px] font-semibold leading-snug tracking-[-0.018em] text-ink">
                      {item.q}
                    </span>
                    <span
                      aria-hidden
                      className="mt-0.5 shrink-0 text-[20px] leading-none transition-transform duration-300"
                      style={{
                        color: "var(--accent)",
                        transform: isOpen ? "rotate(90deg)" : "none",
                      }}
                    >
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="max-w-3xl px-6 pb-6 text-[15px] leading-relaxed text-ink/65">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
