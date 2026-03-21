"use client";
import AboutSection from "@/sections/aboutSection";
import BenefitsSection from "@/sections/benefitsSection";
import FreeTraining from "@/sections/freeTraining";
import HeroSection from "@/sections/heroSection";
import LocationSection from "@/sections/locationSection";
import MembershipSection from "@/sections/membershipSection";
import SupplementsSection from "@/sections/supplementsSection";

export default function Page() {
  return (
    <main>
      <HeroSection />

      <BenefitsSection />

      <AboutSection />

      <FreeTraining />

      <MembershipSection />

      <SupplementsSection />

      <LocationSection />
    </main>
  );
}
