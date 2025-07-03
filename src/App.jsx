import { Routes, Route } from "react-router-dom"; // ✅ No BrowserRouter here!
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import HireMe from "./components/HireMe";
import AllProjects from "./components/AllProjects";
import AllSkills from "./components/AllSkills";

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Hero />
              </div>
              <About />
              <Experience />
              <Tech />
              <Works />
              <div className="relative z-0">
                <Contact />
              </div>
              <HireMe />
            </>
          }
        />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/skills" element={<AllSkills />} />
      </Routes>
    </div>
  );
};

export default App;
