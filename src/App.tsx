import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Strengths } from "./components/Strengths";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-void text-white">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[linear-gradient(to_right,#EA580C,#F7931A)] focus:px-6 focus:py-3 focus:font-mono focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Strengths />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
