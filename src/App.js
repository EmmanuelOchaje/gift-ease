import { BrowserRouter, Route, Routes } from "react-router-dom";
/* import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section2 from "./components/Section2";
import Slider from "./components/Slider";
import Hiw from "./Hiw";
import Section3 from "./Section3"; */
import "./index.css";
import LandingPage from "./pages/LandingPage";
import CreAccount from "./pages/CreAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        {/* <Route path="creaccount" element={<CreAccount />} /> */}
        <Route path="/" element={<CreAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
