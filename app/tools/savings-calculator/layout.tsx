import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy Savings Calculator - Estimate Your Solar & Battery Savings",
  description: "Calculate your potential energy savings with solar panels, battery storage, and smart energy management in Sweden. Free tool with instant estimates.",
  keywords: ["energy savings calculator", "solar calculator", "battery savings", "Sweden energy", "electricity savings", "smart energy", "solar ROI"],
  openGraph: {
    title: "Energy Savings Calculator | Sourceful Energy",
    description: "Estimate your potential savings with solar, battery, and smart energy management in Sweden.",
    type: "website",
  },
};

export default function SavingsCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
