import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

export default function SectionIntro({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "flex flex-col items-center text-center" : ""}>
      <Reveal>
        <Eyebrow center={center}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.06}>
        <h2
          className={`mt-5 text-[30px] leading-[1.1] text-ink sm:text-[42px] ${
            center ? "mx-auto max-w-2xl" : "max-w-xl"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p
            className={`mt-4 text-[16px] leading-relaxed text-muted ${
              center ? "mx-auto max-w-lg" : "max-w-lg"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
