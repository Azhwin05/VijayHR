import Image from "next/image";
import Reveal from "@/components/Reveal";

type Industry = {
  name: string;
  challenge: string;
  approach: string;
  flagship?: boolean;
  image?: string;
};

const TINTS = ["var(--tint-1)", "var(--paper)", "var(--tint-3)", "var(--tint-2)"];

export default function IndustriesGrid({ industries }: { industries: Industry[] }) {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {industries.map((ind, i) =>
          ind.image ? (
            <Reveal
              key={ind.name}
              delay={(i % 2) * 0.06}
              className="relative overflow-hidden rounded-[12px] p-8 transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.35)]"
            >
              <Image
                src={ind.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(8,8,7,0.55) 0%, rgba(8,8,7,0.72) 45%, rgba(8,8,7,0.86) 100%)",
                }}
              />

              <div className="relative">
                <h3 className="flex flex-wrap items-center gap-2.5 text-[20px] text-white">
                  {ind.name}
                  {ind.flagship && (
                    <span
                      className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white"
                      style={{ backgroundColor: "var(--accent)" }}
                    >
                      Flagship
                    </span>
                  )}
                </h3>

                <p className="mt-5 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/55">
                  Challenge
                </p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-white/80">
                  {ind.challenge}
                </p>

                <p
                  className="mt-5 text-[10.5px] font-semibold uppercase tracking-[0.16em]"
                  style={{ color: "var(--brass)" }}
                >
                  Approach
                </p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-white">
                  {ind.approach}
                </p>
              </div>
            </Reveal>
          ) : (
            <Reveal
              key={ind.name}
              delay={(i % 2) * 0.06}
              className="rounded-[12px] border border-black/[0.06] p-8 transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_-16px_rgba(0,0,0,0.18)]"
              style={{ backgroundColor: TINTS[i % TINTS.length] }}
            >
              <h3 className="flex flex-wrap items-center gap-2.5 text-[20px] text-ink">
                {ind.name}
                {ind.flagship && (
                  <span
                    className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    Flagship
                  </span>
                )}
              </h3>

              <p className="mt-5 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink/40">
                Challenge
              </p>
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink/60">
                {ind.challenge}
              </p>

              <p
                className="mt-5 text-[10.5px] font-semibold uppercase tracking-[0.16em]"
                style={{ color: "var(--accent)" }}
              >
                Approach
              </p>
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink/75">
                {ind.approach}
              </p>
            </Reveal>
          )
        )}
      </div>
    </section>
  );
}
