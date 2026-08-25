import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "VijayHR PeopleCare — HR Partners on Demand",
  description:
    "Flexible HR partnership — people strategy, culture and operations delivered on demand by the Vijay Associates Group.",
  robots: { index: false, follow: false },
};

const nav = [
  { label: "Solutions", href: "/peoplecare/preview/solutions" },
  { label: "Industries", href: "/peoplecare/preview/industries" },
  { label: "About", href: "/peoplecare/preview/about" },
  { label: "FAQ", href: "/peoplecare/preview/faq" },
  { label: "Contact", href: "/peoplecare/preview/contact" },
];

export default function PeopleCarePreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();

  return (
    <div className="brand-peoplecare">
      <div className="bg-[var(--accent)] px-6 py-2 text-center text-[12px] font-medium text-white">
        Preview build — not the public PeopleCare site yet.
      </div>
      <Header
        brand="VijayHR PeopleCare"
        tagline="People First. Growth Always."
        homeHref="/peoplecare/preview"
        nav={nav}
        switchTo={{ label: "ComplyCare", href: "/complycare" }}
      />
      {children}
      <Footer
        brand="VijayHR PeopleCare"
        columns={[
          {
            title: "Company",
            links: [
              { label: "About", href: "/peoplecare/preview/about" },
              { label: "Solutions", href: "/peoplecare/preview/solutions" },
              { label: "Industries", href: "/peoplecare/preview/industries" },
            ],
          },
          {
            title: "Support",
            links: [
              { label: "FAQ", href: "/peoplecare/preview/faq" },
              { label: "Contact", href: "/peoplecare/preview/contact" },
            ],
          },
          {
            title: "Group",
            links: [
              { label: "Vijay Associates Group", href: "/" },
              { label: "VijayHR ComplyCare", href: "/complycare" },
            ],
          },
        ]}
        legalLine={`© ${year} VijayHR PeopleCare. A Division of Vijay Associates Group.`}
      />
    </div>
  );
}
