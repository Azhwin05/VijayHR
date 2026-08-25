import type { Metadata } from "next";
import PeopleCareComingSoon from "@/components/PeopleCareComingSoon";

export const metadata: Metadata = {
  title: "VijayHR PeopleCare — Coming Soon",
  description: "VijayHR PeopleCare is launching soon.",
};

export default function PeopleCareComingSoonCatchAll() {
  return <PeopleCareComingSoon />;
}
