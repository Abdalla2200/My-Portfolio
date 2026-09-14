import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import ScrollToTopBtn from "./components/UI/ScrollToTopBtn";

const App = () => {
  return (
    <div className="min-h-[550vh] overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Services />
      <Projects />
      <Contact />
      <ScrollToTopBtn />
    </div>
  );
};

export default App;
