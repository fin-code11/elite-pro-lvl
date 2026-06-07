import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsTicker from "@/components/StatsTicker";
import MissionSection from "@/components/MissionSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsTicker />
      <MissionSection />
      <AboutSection />
      <ProductsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
