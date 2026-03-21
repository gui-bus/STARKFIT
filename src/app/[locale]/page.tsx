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

      <div className="my-10 w-full max-w-[1440px] mx-auto h-px bg-white/10" />

      <AboutSection />

      <FreeTraining />

      <MembershipSection />

      <div className="mb-10 w-full max-w-[1440px] mx-auto h-px bg-white/10" />

      <SupplementsSection />

      <LocationSection />
    </main>
  );
}
