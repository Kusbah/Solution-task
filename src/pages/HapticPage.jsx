import './HapticPage.css';

import CardsSection from '../components/Cards/CardsSection';
import WhyHapticSection from '../components/WhyHaptic/WhyHapticSection';
import PatternStrip from '../components/Pattern/PatternStrip';
import VideoTestimonials from '../components/Testimonials/VideoTestimonials';
import PricingSection from '../components/Pricing/PricingSection';
import ProjectShowcase from '../components/Projects/ProjectShowcase';
import ScrollingLogos from '../components/Logos/ScrollingLogos';
import HeroSection from '../components/Hero/HeroSection';
import CareersSection from '../components/CareersSection/CareersSection';
import Footer from '../components/Footer/Footer';

const HapticPage = () => {
  return (
    <>
      <HeroSection />
      <CardsSection />
      <PatternStrip />
      <WhyHapticSection />
      <VideoTestimonials />
      <ScrollingLogos />
      <ProjectShowcase />
      <PricingSection />
      <PatternStrip />
      <CareersSection />
      <Footer />
    </>
  );
};

export default HapticPage;
