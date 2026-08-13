"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

const INITIAL_COUNT = 12;

export default function ClientLogosGrid({
  eyebrow,
  title,
  description,
  logos,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  logos: string[];
}) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? logos : logos.slice(0, INITIAL_COUNT);
  const remaining = logos.length - INITIAL_COUNT;

  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 sm:py-28">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="mt-5 max-w-xl text-[32px] leading-[1.1] text-ink sm:text-[42px]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-ink/60">
            {description}
          </p>
        </Reveal>
      )}

      <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[14px] border border-black/[0.06] bg-black/[0.06] sm:grid-cols-4">
        {visible.map((logo, i) => (
          <div
            key={logo}
            className="flex h-[110px] items-center justify-center bg-paper p-6 transition-colors duration-300 hover:bg-tint-1"
            style={{ transitionDelay: `${Math.min(i, 12) * 15}ms` }}
          >
            <div className="relative h-10 w-full">
              <Image
                src={`/clients/${logo}.png`}
                alt=""
                fill
                sizes="140px"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {remaining > 0 && (
        <div className="mt-10 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="rounded-full bg-ink px-6 py-3 text-[13px] font-medium text-paper transition-colors duration-300 hover:bg-ink/85"
          >
            {expanded ? "Show Fewer Companies" : "Show More Companies"}
          </button>
          {!expanded && (
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
              And {remaining}+ More
            </p>
          )}
        </div>
      )}
    </section>
  );
}
