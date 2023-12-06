import ScrollProgress from "./components/_small_components/Scroll-Progress";
import About from "./components/About";
import Tools from "./components/Lang-and-tools";
import Hero from "./components/Main-Hero";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import CustomCursor from "./hoc/Custom-cursor";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      <Hero />
      <About />
      <Projects />
      <Tools />
      <Socials />
    </main>
  );
}
