import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { FloatingChatButton } from '@/components/FloatingChatButton'





const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FloatingChatButton /> 
    </div>
  );
};

export default HomePage;