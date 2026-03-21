"use client";
import AboutSection from "@/sections/about-section";
import BenefitsSection from "@/sections/benefits-section";
import FreeTraining from "@/sections/free-training";
import HeroSection from "@/sections/hero-section";
import LocationSection from "@/sections/location-section";
import MembershipSection from "@/sections/membership-section";
import SuplementsSection from "@/sections/suplements-section";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <div id="Benefits">
        <BenefitsSection />
      </div>

      <div className="my-10 w-full max-w-[90%] mx-auto h-px bg-white/10" />

      <div id="About">
        <AboutSection />
      </div>

      <FreeTraining />

      <div id="Membership">
        <MembershipSection />
      </div>

      <div className="mb-10 w-full max-w-[90%] mx-auto h-px bg-white/10" />

      <div id="Supplements">
        <SuplementsSection />
      </div>

      <LocationSection />
    </main>
  );
}
