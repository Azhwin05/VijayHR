const RULES: [RegExp, string][] = [
  [/pipeline|succession/i, "building-stack"],
  [/metric|dashboard|instinct|analytics|measur/i, "eye"],
  [/supervisor|manager|leader/i, "star"],
  [/attrition|retention|re-hiring|career|stay /i, "users"],
  [/hiring|recruit|sourc|screen|interview|workforce/i, "search-check"],
  [/engage|culture|recogni|wellbeing|experience/i, "heart"],
  [/train|learn|coaching|workshop|skill|develop/i, "graduation-cap"],
  [/offer|join|onboard|induction/i, "handshake"],
  [/feedback|survey|communicat|listen|pulse/i, "pulse"],
  [/plan|journey|90|calendar|cadence|roadmap|timeline/i, "clock"],
  [/reward|compens|payroll|salary|pay /i, "wallet"],
  [/policy|document|framework|structure|design|process/i, "briefcase"],
];

export function iconFor(text: string, fallback = "check-shield"): string {
  for (const [re, name] of RULES) if (re.test(text)) return name;
  return fallback;
}
