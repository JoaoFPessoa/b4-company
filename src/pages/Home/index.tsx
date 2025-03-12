import AboutSection from "./components/AboutSection";
import CallToAction from "./components/CallToAction";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";

function Home() {
  return (
    <div className="flex min-h-screen  flex-col ">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <GallerySection />
      <CallToAction />
    </div>
  );
}

export default Home;
