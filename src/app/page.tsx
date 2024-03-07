import { Separator } from "@/components/ui/separator";
import AboutSection from "@/sections/about-section";
import BenefitsSection from "@/sections/benefits-section";
import ContactSection from "@/sections/contact-section";
import FreeTraining from "@/sections/free-training";
import HeroSection from "@/sections/hero-section";
import MembershipSection from "@/sections/membership-section";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <BenefitsSection />

      <AboutSection />

      <FreeTraining />

      <MembershipSection />

      <ContactSection />
    </main>
  );
}
