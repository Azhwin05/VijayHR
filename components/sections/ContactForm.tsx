"use client";

import { useState } from "react";

type Errors = Partial<Record<"name" | "company" | "email" | "phone", string>>;

export default function ContactForm({
  title,
  sub,
  interestLabel = "Area of Interest",
  interestOptions,
  sizeLabel = "Company Size",
  sizeOptions = ["< 50 employees", "50 – 200", "201 – 500", "501 – 1,000", "1,000+"],
  includeDesignation = false,
  messagePlaceholder = "Tell us about your current challenges or what you're looking for…",
  submitLabel,
  successTitle = "Message Received",
  successText = "Thank you, {name}. A specialist will be in touch within one business day.",
}: {
  title: string;
  sub: string;
  interestLabel?: string;
  interestOptions: string[];
  sizeLabel?: string;
  sizeOptions?: string[];
  includeDesignation?: boolean;
  messagePlaceholder?: string;
  submitLabel: string;
  successTitle?: string;
  successText?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [firstName, setFirstName] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const company = String(form.get("company") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Name is required";
    if (!company) nextErrors.company = "Company name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Valid email required";
    if (!phone) nextErrors.phone = "Phone is required";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setFirstName(name.split(" ")[0]);
    setStatus("sending");
    setTimeout(() => setStatus("done"), 900);
  }

  if (status === "done") {
    return (
      <div className="rounded-[14px] border border-black/[0.07] p-10 text-center sm:p-14" style={{ backgroundColor: "var(--tint-1)" }}>
        <h3 className="font-display text-[24px] text-ink">{successTitle}</h3>
        <p className="mt-3 text-[15px] text-muted">
          {successText.replace("{name}", firstName)}
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-[4px] border-0 border-b border-black/[0.12] bg-transparent py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-ring)]";

  return (
    <div className="rounded-[14px] border border-black/[0.07] p-8 sm:p-10" style={{ backgroundColor: "var(--tint-1)" }}>
      <h3 className="font-display text-[22px] text-ink">{title}</h3>
      <p className="mt-2 text-[14px] text-muted">{sub}</p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
        <div>
          <label className="text-[12.5px] font-medium text-ink/50">Full Name *</label>
          <input name="name" placeholder="Rajesh Kumar" className={inputClass} />
          {errors.name && (
            <p className="mt-1 text-[12px] text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="text-[12.5px] font-medium text-ink/50">Company *</label>
          <input name="company" placeholder="Acme Industries" className={inputClass} />
          {errors.company && (
            <p className="mt-1 text-[12px] text-red-600">{errors.company}</p>
          )}
        </div>

        {includeDesignation && (
          <div>
            <label className="text-[12.5px] font-medium text-ink/50">Designation</label>
            <input name="designation" placeholder="Managing Director" className={inputClass} />
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="text-[12.5px] font-medium text-ink/50">Email *</label>
            <input name="email" placeholder="rajesh@acme.in" className={inputClass} />
            {errors.email && (
              <p className="mt-1 text-[12px] text-red-600">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="text-[12.5px] font-medium text-ink/50">Phone *</label>
            <input name="phone" placeholder="+91 98xxx xxxxx" className={inputClass} />
            {errors.phone && (
              <p className="mt-1 text-[12px] text-red-600">{errors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <label className="text-[12.5px] font-medium text-ink/50">{interestLabel}</label>
          <select name="interest" defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select…
            </option>
            {interestOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-[12.5px] font-medium text-ink/50">{sizeLabel}</label>
          <select name="size" defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select size…
            </option>
            {sizeOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-[12.5px] font-medium text-ink/50">Message (optional)</label>
          <textarea
            name="message"
            rows={3}
            placeholder={messagePlaceholder}
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-2 inline-flex items-center justify-center rounded-full px-7 py-[13px] text-[15px] font-medium text-white transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.35)] disabled:opacity-60"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {status === "sending" ? "Sending…" : submitLabel}
        </button>
      </form>
    </div>
  );
}
