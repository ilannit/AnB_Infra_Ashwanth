import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Team from '../components/Team';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Portfolio />
      <Team />
      <Contact />
    </main>
  );
}
