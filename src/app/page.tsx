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
import { getSiteContent } from "@/lib/content";

export default async function Home() {
  const content = await getSiteContent();

  return (
    <>
      <Hero hero={content.hero} packages={content.packages} />
      <TrustBar />
      <Packages packages={content.packages} business={content.business} />
      <Destinations destinations={content.destinations} />
      <Gallery photos={content.gallery} />
      <Inclusions inclusions={content.inclusions} />
      <WhyChooseUs pickupPoints={content.pickupPoints} services={content.services} />
      <EnquirySection business={content.business} packages={content.packages} />
      <SeoContent business={content.business} />
      <TravellerTrust promises={content.promises} />
      <Testimonials testimonials={content.testimonials} />
    </>
  );
}
