import Image from "next/image";
import Reveal from "@/components/Reveal";
import Button from "@/components/ui/Button";
import Counter from "@/components/Counter";

type Stat = { value: number; suffix?: string; prefix?: string; label: string };
type Cta = { label: string; href: string; variant?: "solid" | "outline" };

export default function Hero({
  label,
  heading,
  emphasis,
  sub,
  ctas,
  stats,
  image,
  center = false,
}: {
  label: string;
  heading: string;
  emphasis: string;
  sub: string;
  ctas: Cta[];
  stats?: Stat[];
  image?: string;
  center?: boolean;
}) {
  const centered = center && !image;
  return (
    <section className={`relative overflow-hidden ${image ? "lg:min-h-[620px]" : ""}`}>
      {/* soft brand wash behind the hero — the page's quiet colour ground */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-[0.55]"
        style={{
          background:
            "radial-gradient(120% 70% at 12% 0%, var(--tint-1) 0%, transparent 62%), radial-gradient(90% 60% at 92% 8%, var(--tint-2) 0%, transparent 60%)",
        }}
      />

      {/* supporting photography — sized to the image's own aspect ratio
          (never cropped, so its built-in edge fade stays intact) and
          masked with an extra gradient so it dissolves into the page
          instead of ending in a hard rectangle */}
      {image && (
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/2 hidden w-[48%] -translate-y-1/2 lg:block xl:right-[-2%] xl:w-[45%]"
          style={{ aspectRatio: "1400 / 933" }}
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="45vw"
            className="object-contain object-right"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 10%, rgba(0,0,0,0.35) 22%, rgba(0,0,0,0.75) 36%, black 52%, black 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 10%, rgba(0,0,0,0.35) 22%, rgba(0,0,0,0.75) 36%, black 52%, black 100%)",
            }}
            priority
          />
        </div>
      )}

      <div className={`relative z-10 mx-auto max-w-[1280px] px-6 pb-20 pt-24 sm:px-10 sm:pt-32 ${centered ? "text-center" : ""}`}>
        <div className={image ? "lg:max-w-[480px] xl:max-w-[560px]" : ""}>
          <Reveal as="p" className="mb-7 text-[12px] font-medium uppercase tracking-[0.18em] text-muted">
            {label}
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className={`text-[40px] leading-[1.03] text-ink sm:text-[64px] ${centered ? "mx-auto max-w-3xl" : "max-w-4xl"}`}>
              {heading}
              <br />
              <span className="editorial italic text-ink/45">{emphasis}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className={`mt-8 text-[17px] leading-[1.65] text-ink/65 ${centered ? "mx-auto max-w-xl" : "max-w-xl"}`}>
              {sub}
            </p>
          </Reveal>

          <Reveal delay={0.24} className={`mt-10 flex flex-wrap items-center gap-4 ${centered ? "justify-center" : ""}`}>
            {ctas.map((cta) => (
              <Button key={cta.href} href={cta.href} variant={cta.variant ?? "solid"}>
                {cta.label}
              </Button>
            ))}
          </Reveal>

          {/* mobile/tablet — image stacks below the CTAs instead of
              bleeding off an edge that doesn't exist at this width */}
          {image && (
            <Reveal delay={0.3} className="relative mt-12 aspect-[1400/933] w-full lg:hidden">
              <Image
                src={image}
                alt=""
                fill
                sizes="100vw"
                className="rounded-[12px] object-contain object-center"
              />
            </Reveal>
          )}
        </div>

        {stats && (
          <Reveal
            delay={0.3}
            className={`relative mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-[12px] border border-black/[0.06] sm:grid-cols-4 ${
              image ? "lg:max-w-[560px]" : ""
            }`}
            style={{ backgroundColor: "var(--hairline)" }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="px-6 py-7"
                style={{ backgroundColor: "var(--tint-1)" }}
              >
                <div className="text-[30px] font-bold tracking-[-0.04em] text-ink">
                  <Counter value={s.value} suffix={s.suffix} prefix={s.prefix} />
                </div>
                <p className="mt-1.5 text-[13px] text-ink/55">{s.label}</p>
              </div>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  );
}
