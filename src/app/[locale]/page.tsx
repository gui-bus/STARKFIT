"use client";
import AboutSection from "@/sections/about-section";
import BenefitsSection from "@/sections/benefits-section";
import FreeTraining from "@/sections/free-training";
import HeroSection from "@/sections/hero-section";
import LocationSection from "@/sections/location-section";
import MembershipSection from "@/sections/membership-section";
import SuplementsSection from "@/sections/suplements-section";

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

      <SuplementsSection />

      <LocationSection />
    </main>
  );
}
