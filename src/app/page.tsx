"use client"



import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { FloatingChatButton } from "@/components/FloatingChatButton"
import { AboutSection } from "@/components/AboutSection"
import { ExpertCarousel } from "@/components/ExpertCarousel"
import { ContactFooter } from "@/components/Footer"
import { Pricing } from "@/components/Pricing"
import { CourseGrid } from "@/components/Course"
import { Partners } from "@/components/Partners"
import TestimonialsCarousel from "@/components/testimonials-carousel"

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5, ease: "easeOut" }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {children}
    </motion.div>
  )
}

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />

      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>

      <AnimatedSection>
        <ExpertCarousel />
      </AnimatedSection>

      <AnimatedSection>
        <CourseGrid />
      </AnimatedSection>

      <AnimatedSection>
        <Partners />
      </AnimatedSection>

      <AnimatedSection>
        <TestimonialsCarousel />
      </AnimatedSection>

      <AnimatedSection>
        <Pricing />
      </AnimatedSection>

      <AnimatedSection>
        <ContactFooter />
      </AnimatedSection>

  
    </main>
  )
}

export default HomePage

