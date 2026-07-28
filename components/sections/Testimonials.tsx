import SectionIntro from "@/components/sections/SectionIntro";
import Reveal from "@/components/Reveal";

export default function Testimonials({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: { quote: string; name: string; role: string }[];
}) {
  return (
    <section style={{ backgroundColor: "var(--tint-1)" }}>
      <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 sm:py-28">
        <SectionIntro eyebrow={eyebrow} title={title} />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i % 2) * 0.08}
              className="rounded-[10px] border border-black/[0.05] p-8"
              style={{ backgroundColor: "var(--paper)" }}
            >
              <span
                aria-hidden
                className="editorial block text-[40px] leading-none"
                style={{ color: "var(--accent)", opacity: 0.28 }}
              >
                &ldquo;
              </span>
              <p className="editorial mt-2 text-[21px] leading-[1.4] text-ink">
                {t.quote}
              </p>
              <p className="mt-6 text-[13px] text-ink/55">
                <span className="font-semibold text-ink">{t.name}</span>
                {" · "}
                {t.role}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
