import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Packages from "@/components/Packages";
import Destinations from "@/components/Destinations";
import Gallery from "@/components/Gallery";
import Inclusions from "@/components/Inclusions";
import WhyChooseUs from "@/components/WhyChooseUs";
import EnquirySection from "@/components/EnquirySection";
import SeoContent from "@/components/SeoContent";
import TravellerTrust from "@/components/TravellerTrust";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Packages />
      <Destinations />
      <Gallery />
      <Inclusions />
      <WhyChooseUs />
      <EnquirySection />
      <SeoContent />
      <TravellerTrust />
      <Testimonials />
    </>
  );
}
