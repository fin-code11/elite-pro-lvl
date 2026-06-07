import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Shop — Elite Pro LVL Goalkeeper Gloves",
  description: "Choose your weapon. Phantom Elite Series and Shadow Pro Series goalkeeper gloves.",
};

export default function ShopPage() {
  return (
    <main>
      <Navbar />
      <ProductsSection />
      <Footer />
    </main>
  );
}
