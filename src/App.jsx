import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";

import Navbar from "./Components/Navbar";
import Project from "./Components/Projects/Project";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Project/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
