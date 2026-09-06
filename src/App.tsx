import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import ScrollToTopBtn from "./components/UI/ScrollToTopBtn";

const App = () => {
  return (
    <div className="min-h-[550vh] overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ScrollToTopBtn />
    </div>
  );
};

export default App;
