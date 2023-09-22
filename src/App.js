import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";
import Experience from "./components/Experience/experience";
import Research from "./components/Research/research";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Experience/>
      <Research/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
