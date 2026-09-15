import Hero from '@/components/home/Hero';
import AboutPreview from '@/components/home/AboutPreview';
import Services from '@/components/home/Services';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import WhyIbnuDanna from '@/components/home/WhyIbnuDanna';
import Process from '@/components/home/Process';
import CredibilityStrip from '@/components/home/CredibilityStrip';
import Leadership from '@/components/home/Leadership';
import FinalCTA from '@/components/home/FinalCTA';
import type { RoutePath } from '@/lib/router';

interface HomeProps {
  navigate: (path: RoutePath) => void;
}

export default function Home({ navigate }: HomeProps) {
  return (
    <>
      <Hero navigate={navigate} />
      <AboutPreview navigate={navigate} />
      <Services navigate={navigate} />
      <FeaturedProjects navigate={navigate} />
      <WhyIbnuDanna />
      <Process navigate={navigate} />
      <CredibilityStrip />
      <Leadership navigate={navigate} />
      <FinalCTA navigate={navigate} />
    </>
  );
}
