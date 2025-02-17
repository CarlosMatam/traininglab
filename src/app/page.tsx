import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { FloatingChatButton } from '@/components/FloatingChatButton'
import { AboutSection } from '@/components/AboutSection'
import { ExpertCarousel } from "@/components/ExpertCarousel"
import { ContactFooter } from "@/components/Footer"
import { Pricing } from "@/components/Pricing"
import { CourseGrid}  from "@/components/Course"
import { Partners } from "@/components/Partners"
import TestimonialsCarousel from "@/components/testimonials-carousel"




const HomePage = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FloatingChatButton /> 
      <AboutSection/> 
      <ExpertCarousel/> 
      <CourseGrid />
      <Partners />
      <TestimonialsCarousel />
      < Pricing/> 
      <ContactFooter/> 
      
      </main>
  );
};

export default HomePage;