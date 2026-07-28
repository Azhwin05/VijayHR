type FooterColumn = { title: string; links: { label: string; href: string }[] };

export default function Footer({
  brand,
  columns,
  legalLine,
}: {
  brand: string;
  columns: FooterColumn[];
  legalLine: string;
}) {
  return (
    <footer
      className="border-t border-black/[0.06]"
      style={{ backgroundColor: "var(--tint-1)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="h-6 w-[3px] rounded-full"
                style={{ backgroundColor: "var(--accent)" }}
              />
              <span className="text-[16px] font-bold tracking-[-0.03em] text-ink">
                {brand}
              </span>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink/40">
                {col.title}
              </span>
              {col.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-[14px] text-ink/70 transition-colors hover:text-[var(--accent)]"
                >
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-black/[0.07] pt-6">
          <p className="text-[13px] text-ink/45">{legalLine}</p>
        </div>
      </div>
    </footer>
  );
}
