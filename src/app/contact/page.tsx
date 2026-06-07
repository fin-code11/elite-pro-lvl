import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact — Elite Pro LVL Goalkeeper Gloves",
  description: "Get in touch with Elite Pro LVL. Hamilton, ON, Canada.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactSection />
      <Footer />
    </main>
  );
}
