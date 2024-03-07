import AboutSection from "@/sections/about-section";
import BenefitsSection from "@/sections/benefits-section";
import ContactSection from "@/sections/contact-section";
import FreeTraining from "@/sections/free-training";
import HeroSection from "@/sections/hero-section";
import MembershipSection from "@/sections/membership-section";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <BenefitsSection />

      <Divider className="my-10 w-full max-w-[90%] mx-auto"/>

      <AboutSection />

      <FreeTraining />

      <MembershipSection />

      <ContactSection />
    </main>
  );
}
