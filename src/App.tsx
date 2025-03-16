import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import HeaderSection from "./components/HeaderSection";
import Navbar from "./components/Navbar";
import SectionRow from "./components/SectionRow";
import Working from "./components/Working";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto p-5">
        <HeaderSection />
        <SectionRow />
        <Features />
        <SectionRow />
        <Working />
        <SectionRow />
        <About />
        <SectionRow />
        <Contact />
        <div className="mb-8"></div>
      </div>
    </div>
  );
}

export default App;
