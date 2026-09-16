import { Hero } from '@/components/home/Hero';
import { Features } from '@/components/home/Features';
import { TechSpecs } from '@/components/home/TechSpecs';
import { Testimonials } from '@/components/home/Testimonials';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="section-divider" />
      <Features />
      <div className="section-divider" />
      <TechSpecs />
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <CTASection />
    </>
  );
}
