import About from './components/about/About';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/Projects/Portfolio';

export default function Home() {
  return (
    <main>
      <Navbar />
      <article className="max-w-layout">
        <Hero />
        <About />
        <Portfolio />
      </article>
      <Footer />
    </main>
  );
}
