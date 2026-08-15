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
        { name: "Vendor Compliance & Third-Party Governance", href: "/complycare/services/vendor", icon: "truck" },
        { name: "Compliance Audits", href: "/complycare/services/audits", icon: "search-check" },
        { name: "Employment & HR Documentation", href: "/complycare/services/hr-documentation", icon: "briefcase" },
        { name: "Compliance Assessment & Advisory", href: "/complycare/services/advisory", icon: "lightbulb" },
        { name: "Compliance Training & Capacity Building", href: "/complycare/services/training", icon: "graduation-cap" },
        { name: "Factory Compliance & Industrial Support", href: "/complycare/services/factory", icon: "factory" },
        { name: "POSH Compliance", href: "/complycare/services/posh", icon: "shield" },
        { name: "Centralised Systems & Reporting", href: "/complycare/services/systems", icon: "server" },
        { name: "Environmental, Pollution Control & EHS", href: "/complycare/services/ehs", icon: "leaf" },
        { name: "Employee Statutory Benefits Management", href: "/complycare/services/statutory-benefits", icon: "heart" },
        { name: "Compliance Management", href: "/complycare/services/compliance-management", icon: "pulse" },
      ],
    },
  },
  { label: "New Labour Codes", href: "/complycare/new-labour-codes" },
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
        switchTo={{ label: "PeopleCare", href: "/peoplecare" }}
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
              { label: "New Labour Codes", href: "/complycare/new-labour-codes" },
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
