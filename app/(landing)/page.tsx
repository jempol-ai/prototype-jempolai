import { LandingNavbar } from "@/components/custom/landing-navbar";
import { LandingHero } from "@/components/custom/landing-hero";
import { LandingContent } from "@/components/custom/landing-content";

const LandingPage = () => {
  return (
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
};

export default LandingPage;
