import Reveal from "@/components/Reveal";

export default function DeliverPanel({
  items,
}: {
  items: { title: string; sub: string }[];
}) {
  return (
    <section className="mx-auto max-w-[1280px] px-6 sm:px-10">
      <div
        className="grid grid-cols-1 gap-px overflow-hidden rounded-[12px] border border-black/[0.06] sm:grid-cols-2 lg:grid-cols-4"
        style={{ backgroundColor: "var(--hairline)" }}
      >
        {items.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 0.06}
            className="p-7"
            style={{ backgroundColor: "var(--paper)" }}
          >
            <span
              aria-hidden
              className="mb-5 block h-[2px] w-7 rounded-full"
              style={{ backgroundColor: "var(--accent)", opacity: 0.5 }}
            />
            <p className="text-[18px] font-semibold leading-snug tracking-[-0.02em] text-ink">
              {item.title}
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink/55">
              {item.sub}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
