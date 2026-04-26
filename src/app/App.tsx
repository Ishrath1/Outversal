import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { HowItWorks } from './components/HowItWorks';
import { Services } from './components/Services';
import { Benefits } from './components/Benefits';
import { Comparison } from './components/Comparison';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Services />
        <Benefits />
        <Comparison />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}