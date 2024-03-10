import AboutSection from "@/sections/about-section";
import BenefitsSection from "@/sections/benefits-section";
import FreeTraining from "@/sections/free-training";
import HeroSection from "@/sections/hero-section";
import LocationSection from "@/sections/location-section";
import MembershipSection from "@/sections/membership-section";
import SuplementsSection from "@/sections/suplements-section";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <BenefitsSection />

      <Divider className="my-10 w-full max-w-[90%] mx-auto" />

      <AboutSection />

      <FreeTraining />

      <MembershipSection />

      <Divider className="mb-10 w-full max-w-[90%] mx-auto" />

      <SuplementsSection />

      <LocationSection/>
    </main>
  );
}
