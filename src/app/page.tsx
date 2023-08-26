import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
  return (
    <main className="max-w-layout">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
