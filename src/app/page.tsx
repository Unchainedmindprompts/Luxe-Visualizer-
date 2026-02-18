import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { IntelligenceBriefing } from "@/components/sections/IntelligenceBriefing";
import { AuditSection } from "@/components/sections/AuditSection";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <SolutionsGrid />
        <IntelligenceBriefing />
        <AuditSection />
      </main>
      <Footer />
    </>
  );
}
