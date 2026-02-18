import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { IntelligenceBriefing } from "@/components/sections/IntelligenceBriefing";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <SolutionsGrid />
        <IntelligenceBriefing />
        {/* Audit form — Phase 3 */}
      </main>
      <Footer />
    </>
  );
}
