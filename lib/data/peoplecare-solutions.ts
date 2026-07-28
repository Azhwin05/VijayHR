export type SolutionDetail = {
  slug: string;
  name: string;
  tagline: string;
  howWeHelp: string;
  included: string[];
  outcome: string;
  related: string[];
};

export const peoplecareSolutions: SolutionDetail[] = [
  {
    slug: "talent-acquisition",
    name: "Talent Acquisition & Workforce Planning",
    tagline: "Attract and hire the right people, faster.",
    howWeHelp:
      "We build a structured, workforce-planned approach to hiring — so you stop reacting to vacancies and start planning for capability. From manpower planning to offer-to-join management, we own the funnel and deliver right-fit talent with reduced cycle time.",
    included: ["Workforce & manpower planning", "Sourcing & screening", "Structured interviews", "Offer-to-join management"],
    outcome: "Reduced cycle time and better-fit hires.",
    related: ["Onboarding & Employee Experience", "Retention & Career Development", "Organization Development"],
  },
  {
    slug: "onboarding",
    name: "Onboarding & Employee Experience",
    tagline: "Strong first impressions that improve retention.",
    howWeHelp:
      "The first 90 days decide whether a hire stays and thrives. We design onboarding journeys that get new hires productive quickly and connected to your culture from day one — with feedback loops that catch problems early.",
    included: ["Onboarding journeys", "Induction & documentation", "First-90-days plans", "New-hire feedback loops"],
    outcome: "Faster productivity and lower early attrition.",
    related: ["Talent Acquisition & Workforce Planning", "Employee Engagement & Culture", "Employee Communication"],
  },
  {
    slug: "performance-management",
    name: "Performance Management",
    tagline: "Clarity, accountability and growth at every level.",
    howWeHelp:
      "We put in place goal-setting frameworks and review cycles that make expectations clear and progress visible — and we enable your managers to run them well, turning performance conversations into growth.",
    included: ["Goal-setting frameworks", "Review cycles", "Manager enablement", "Improvement plans"],
    outcome: "Aligned, accountable teams.",
    related: ["Leadership Development", "Learning & Development", "Talent Management & Succession Planning"],
  },
  {
    slug: "learning-development",
    name: "Learning & Development",
    tagline: "Capability building that compounds.",
    howWeHelp:
      "We identify capability gaps and build learning calendars — functional and behavioural — that develop your people over time, with impact tracking so you can see the return on every program.",
    included: ["Training-needs analysis", "Learning calendars", "Functional & behavioural programs", "Impact tracking"],
    outcome: "A more capable workforce.",
    related: ["Performance Management", "Leadership Development", "Talent Management & Succession Planning"],
  },
  {
    slug: "engagement-culture",
    name: "Employee Engagement & Culture",
    tagline: "Workplaces where people want to stay.",
    howWeHelp:
      "We measure engagement, act on it, and shape culture deliberately — from shopfloor to boardroom. Recognition systems and values initiatives turn engagement from a survey score into a lived experience.",
    included: ["Engagement surveys & action plans", "Culture & values initiatives", "Shopfloor engagement", "Recognition systems"],
    outcome: "Higher engagement and retention.",
    related: ["Retention & Career Development", "Employee Communication", "Onboarding & Employee Experience"],
  },
  {
    slug: "leadership-development",
    name: "Leadership Development",
    tagline: "Managers and supervisors who drive performance.",
    howWeHelp:
      "Most managers are promoted for technical skill and left to figure out leadership alone. We fix that — with Supervisor Excellence programs, coaching and first-time-manager tracks that build leaders at every level.",
    included: ["Supervisor Excellence programs", "Leadership skill-building", "Coaching & mentoring", "First-time-manager tracks"],
    outcome: "Stronger leaders at every level.",
    related: ["Performance Management", "Talent Management & Succession Planning", "Learning & Development"],
  },
  {
    slug: "organization-development",
    name: "Organization Development",
    tagline: "Structures and processes built to scale.",
    howWeHelp:
      "As you grow, informal ways of working break. We design the org structures, role clarity, policies and competency frameworks that let you scale without losing momentum — and manage the change along the way.",
    included: ["Org structure & role clarity", "HR policy & process design", "Change management", "Competency frameworks"],
    outcome: "An organization ready to grow.",
    related: ["Performance Management", "Talent Management & Succession Planning", "Employee Communication"],
  },
  {
    slug: "talent-succession",
    name: "Talent Management & Succession Planning",
    tagline: "Protecting your future leadership.",
    howWeHelp:
      "We identify your high-potential talent, develop them deliberately, and build the leadership pipelines and succession plans that ensure continuity — so a key departure never becomes a crisis.",
    included: ["Talent identification", "High-potential development", "Leadership pipelines", "Succession plans"],
    outcome: "Continuity and bench strength.",
    related: ["Leadership Development", "Learning & Development", "Retention & Career Development"],
  },
  {
    slug: "employee-communication",
    name: "Employee Communication",
    tagline: "Alignment from the boardroom to the shopfloor.",
    howWeHelp:
      "When communication breaks down, engagement and trust follow. We build internal communication frameworks and leadership-to-frontline channels — with feedback mechanisms that keep your whole workforce aligned and informed.",
    included: ["Internal communication frameworks", "Leadership-to-frontline channels", "Engagement communications", "Feedback mechanisms"],
    outcome: "An aligned, informed workforce.",
    related: ["Employee Engagement & Culture", "Onboarding & Employee Experience", "Organization Development"],
  },
  {
    slug: "retention-career",
    name: "Retention & Career Development",
    tagline: "Keeping your best people, longer.",
    howWeHelp:
      "Losing good people is expensive and avoidable. We build career paths, run stay interviews and design retention strategies and growth plans that give your best people a reason to stay and grow with you.",
    included: ["Career pathing", "Retention strategies", "Stay interviews", "Growth & development plans"],
    outcome: "A stable, committed team.",
    related: ["Employee Engagement & Culture", "Talent Management & Succession Planning", "Learning & Development"],
  },
];
