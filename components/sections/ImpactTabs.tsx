"use client";

import { useState } from "react";

type Group = { title: string; items: string[] };

export default function ImpactTabs({ groups }: { groups: Group[] }) {
  const [active, setActive] = useState(0);
  const current = groups[active];

  return (
    <div className="mt-10">
      <div className="flex flex-wrap gap-2">
        {groups.map((group, i) => {
          const isActive = active === i;
          return (
            <button
              key={group.title}
              type="button"
              onClick={() => setActive(i)}
              className="rounded-full border px-4 py-2 text-[12.5px] font-medium transition-colors duration-200"
              style={{
                borderColor: isActive ? "var(--accent)" : "rgba(0,0,0,0.1)",
                backgroundColor: isActive ? "var(--accent)" : "transparent",
                color: isActive ? "var(--paper)" : "var(--ink)",
                touchAction: "manipulation",
              }}
            >
              {group.title}
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col gap-3">
        {current.items.map((item) => (
          <div key={item} className="flex gap-3">
            <span
              aria-hidden
              className="mt-[7px] h-1 w-1 shrink-0 rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
            />
            <p className="text-[14.5px] leading-relaxed text-ink/70">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
