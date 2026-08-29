import PageBackground from './components/layout/PageBackground';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';
import PromoBanner from './components/sections/PromoBanner';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';

export default function App() {
  return (
    <PageBackground>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <HowItWorks />
        <PromoBanner />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </PageBackground>
  );
}
