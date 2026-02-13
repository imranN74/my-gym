import HeroSection from "@/components/hero-section";
import StatCounter from "@/components/stats-counter";
import AmenitiesSection from "@/components/amenities-section";
import MembershipPlans from "@/components/membership-section";
import AboutSection from "@/components/about-section";
import ReviewSection from "@/components/review-section";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <StatCounter />
      <AmenitiesSection />
      <ReviewSection />
      <MembershipPlans />
      <AboutSection />
    </div>
  );
}
