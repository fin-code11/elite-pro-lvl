import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsTicker from "@/components/StatsTicker";
import MissionSection from "@/components/MissionSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsTicker />
      <MissionSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
