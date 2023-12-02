import About from "./components/About";
import Tools from "./components/Lang-and-tools";
import Hero from "./components/Main-Hero";
import Projects from "./components/Projects";
import CustomCursor from "./hoc/Custom-cursor";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <CustomCursor />
      <Hero />
      <About />
      <Projects />
      <Tools />
    </main>
  );
}
