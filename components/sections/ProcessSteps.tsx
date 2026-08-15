import SectionIntro from "@/components/sections/SectionIntro";
import Reveal from "@/components/Reveal";

export default function ProcessSteps({
  eyebrow,
  title,
  description,
  steps,
  center = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  steps: { title: string; text: string }[];
  center?: boolean;
}) {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 sm:py-28">
      <SectionIntro eyebrow={eyebrow} title={title} description={description} center={center} />

      <div className="relative mt-16">
        {/* connecting hairline that the steps sit on */}
        <div
          aria-hidden
          className="absolute left-0 right-0 top-[7px] hidden h-px sm:block"
          style={{ backgroundColor: "var(--hairline)" }}
        />
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-4 sm:gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} className="relative">
              <span
                aria-hidden
                className="mb-6 block h-[15px] w-[15px] rounded-full border-[3px]"
                style={{
                  borderColor: "var(--accent)",
                  backgroundColor: "var(--paper)",
                }}
              />
              <span
                className="editorial text-[24px] leading-none"
                style={{ color: "var(--accent)", opacity: 0.36 }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[19px] text-ink">{step.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink/60">
                {step.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
