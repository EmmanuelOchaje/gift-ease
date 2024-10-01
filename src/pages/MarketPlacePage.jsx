import Footer from "../components/MarketPlace/Footer";
import Hero from "../components/MarketPlace/Hero";
import Navbar from "../components/MarketPlace/Navbar";
import Product from "../components/MarketPlace/Product";

const MarketPlacePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <div className="mt-40">
        <Footer />
      </div>
    </div>
  );
};

export default MarketPlacePage;
