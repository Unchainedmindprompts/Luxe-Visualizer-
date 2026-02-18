import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        {/* Solutions, Intelligence, and Audit sections — Phase 2 */}
      </main>
      <Footer />
    </>
  );
}
