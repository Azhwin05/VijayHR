import SectionIntro from "@/components/sections/SectionIntro";
import Reveal from "@/components/Reveal";

export default function WhyChoose({
  eyebrow,
  title,
  description,
  items,
  center = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: { title: string; text: string }[];
  center?: boolean;
}) {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 sm:py-28">
      <SectionIntro eyebrow={eyebrow} title={title} description={description} center={center} />

      <div className="mt-16 grid grid-cols-1 gap-x-14 gap-y-12 sm:grid-cols-2">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={(i % 2) * 0.08} className="flex gap-6">
            <span
              className="editorial shrink-0 text-[30px] leading-none"
              style={{ color: "var(--accent)", opacity: 0.34 }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-[19px] text-ink">{item.title}</h3>
              <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink/60">
                {item.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
