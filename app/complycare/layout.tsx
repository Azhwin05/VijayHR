import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "VijayHR ComplyCare — Labour Law Compliance & Payroll",
  description:
    "Pan-India labour-law compliance and payroll management. Accurate, accountable and always audit-ready.",
};

const nav = [
  {
    label: "Services",
    href: "/complycare/services",
    mega: {
      exploreLabel: "Explore All Services",
      exploreHref: "/complycare/services",
      items: [
        { name: "Labour Law & Statutory Compliance", href: "/complycare/services/labour-law", icon: "scale" },
        { name: "Compliance Audits", href: "/complycare/services/audits", icon: "search-check" },
        { name: "Assessments & Advisory", href: "/complycare/services/advisory", icon: "lightbulb" },
        { name: "Centralised Systems & Reporting", href: "/complycare/services/systems", icon: "server" },
        { name: "Representation & Liaison", href: "/complycare/services/representation", icon: "handshake" },
        { name: "Compliance Training & Capacity Building", href: "/complycare/services/training", icon: "graduation-cap" },
        { name: "Factory Compliance", href: "/complycare/services/factory", icon: "factory" },
        { name: "Multi-Sector Labour Law", href: "/complycare/services/multi-sector", icon: "building-stack" },
        { name: "Environmental & EHS", href: "/complycare/services/ehs", icon: "leaf" },
        { name: "Vendor Compliance & Governance", href: "/complycare/services/vendor", icon: "truck" },
        { name: "POSH Compliance", href: "/complycare/services/posh", icon: "shield" },
        { name: "Payroll Management", href: "/complycare/services/payroll", icon: "wallet" },
      ],
    },
  },
  { label: "Industries", href: "/complycare/industries" },
  { label: "About", href: "/complycare/about" },
  { label: "FAQ", href: "/complycare/faq" },
  { label: "Contact", href: "/complycare/contact" },
];

export default function ComplyCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();

  return (
    <div className="brand-complycare">
      <Header
        brand="VijayHR ComplyCare"
        tagline="Compliance First. Always."
        homeHref="/complycare"
        nav={nav}
      />
      {children}
      <Footer
        brand="VijayHR ComplyCare"
        columns={[
          {
            title: "Company",
            links: [
              { label: "About", href: "/complycare/about" },
              { label: "Services", href: "/complycare/services" },
              { label: "Industries", href: "/complycare/industries" },
            ],
          },
          {
            title: "Support",
            links: [
              { label: "FAQ", href: "/complycare/faq" },
              { label: "Contact", href: "/complycare/contact" },
            ],
          },
          {
            title: "Group",
            links: [
              { label: "Vijay Associates Group", href: "/" },
              { label: "VijayHR PeopleCare", href: "/peoplecare" },
            ],
          },
        ]}
        legalLine={`© ${year} VijayHR ComplyCare Private Limited. CIN: U70200TN2026PTC193066.`}
      />
    </div>
  );
}
