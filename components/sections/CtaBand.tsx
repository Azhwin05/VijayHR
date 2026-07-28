import Link from "next/link";
import Reveal from "@/components/Reveal";

type Action = { label: string; href: string };

export default function CtaBand({
  label,
  title,
  sub,
  actions,
}: {
  label: string;
  title: string;
  sub: string;
  actions: Action[];
}) {
  return (
    <section className="accent-band">
      <div className="mx-auto max-w-[1280px] px-6 py-24 text-center sm:px-10 sm:py-28">
        <Reveal>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/70">
            {label}
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mx-auto mt-4 max-w-xl font-display text-[30px] leading-tight text-white sm:text-[38px]">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-white/75">
            {sub}
          </p>
        </Reveal>
        <Reveal
          delay={0.18}
          className="mt-9 flex flex-wrap justify-center gap-x-10 gap-y-4"
        >
          {actions.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="group relative inline-block w-fit text-[15px] font-medium text-white"
            >
              {a.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
