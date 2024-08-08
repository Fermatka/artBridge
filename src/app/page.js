import Contact from "@/components/Contact";
import HomeSection from "@/components/HomeSection";
import HowItWorks from "@/components/HowItWorks";
import OurTeam from "@/components/OurTeam";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <HowItWorks />
      <WhyUs />
      <OurTeam />
      <Contact />
    </main>
  );
}
