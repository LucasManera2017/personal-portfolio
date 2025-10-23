import Footer from "./components/Footer.js";
import HomePage from "./components/HomePage.js";
import Navbar from "./components/Navbar.js";
import Projects from "./components/Projects.js";
import Skills from "./components/Skills.js";

function App() {

  return (
    <>
    <div> 
      <div className="min-h-screen">
        <Navbar/>
        <HomePage/>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
    </div>
    </>
  );
}

export default App;
