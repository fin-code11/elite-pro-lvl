import Navbar from "@/components/Navbar";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Gallery — Elite Pro LVL Goalkeeper Gloves",
  description: "Capture the moment. Goalkeeper action shots and Elite Pro LVL in the field.",
};

export default function GalleryPage() {
  return (
    <main>
      <Navbar />
      <GallerySection />
      <Footer />
    </main>
  );
}
