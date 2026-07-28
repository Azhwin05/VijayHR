import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/sections/SectionIntro";

export default function Ecosystem({
  title,
  text,
  pillars,
}: {
  title: string;
  text: string;
  pillars: { name: string; text: string; current?: boolean }[];
}) {
  return (
    <section style={{ backgroundColor: "var(--tint-2)" }}>
      <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 sm:py-28">
        <SectionIntro eyebrow="One Group" title={title} description={text} center />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 0.08}
              className="rounded-[12px] border p-8"
              style={{
                backgroundColor: p.current ? "var(--paper)" : "transparent",
                borderColor: p.current
                  ? "rgba(var(--accent-rgb),0.28)"
                  : "rgba(0,0,0,0.07)",
              }}
            >
              {p.current && (
                <span
                  className="mb-4 inline-block rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  You are here
                </span>
              )}
              <h3 className="text-[19px] text-ink">{p.name}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink/60">
                {p.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
