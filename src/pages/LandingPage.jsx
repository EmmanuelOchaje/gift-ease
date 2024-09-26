import Footer from "../components/landingpage/Footer";
import Hero from "../components/landingpage/Hero";
import Navbar from "../components/landingpage/Navbar";
import Section2 from "../components/landingpage/Section2";
import Slider from "../components/landingpage/Slider";
import Hiw from "../Hiw";
import Section3 from "../Section3";

const LandingPage = () => {
  return (
    <div>
      <div className="lay">
        <Navbar />
        <Hero />{" "}
      </div>
      <Section2 />
      <Hiw />
      <Section3 />
      <Slider />
      <Footer />
    </div>
  );
};

export default LandingPage;
