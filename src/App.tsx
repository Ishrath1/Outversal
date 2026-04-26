import { Header } from "./app/components/Header";
import { Hero } from "./app/components/Hero";
import { Stats } from "./app/components/Stats";
import { HowItWorks } from "./app/components/HowItWorks";
import { Services } from "./app/components/Services";
import { Benefits } from "./app/components/Benefits";
import { Comparison } from "./app/components/Comparison";
import { Pricing } from "./app/components/Pricing";
import { About } from "./app/components/About";
import { Contact } from "./app/components/Contact";
import { Footer } from "./app/components/Footer";

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
