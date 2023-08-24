import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}
