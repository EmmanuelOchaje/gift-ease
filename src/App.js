import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section2 from "./components/Section2";
import Slider from "./components/Slider";
import Hiw from "./Hiw";
import "./index.css";
import Section3 from "./Section3";

function App() {
  return (
    <div>
      <div className="lay">
        <Navbar />

        <Hero />
      </div>
      <Section2 />
      <Hiw />
      <Section3 />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
