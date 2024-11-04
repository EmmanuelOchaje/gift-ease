import { Link } from "react-router-dom";
import image1 from "../../assets/images/Frame 1000004308.png";

const Hero = () => {
  return (
    <div className="mt-10">
      <h1 className="lg:text-5xl text-3xl text-white font-bold text-center">
        Elevate{" "}
        <span className="text-yellow-500  text-3xl lg:text-5xl font-bold">
          Employee Perks
        </span>{" "}
        with Giftease
      </h1>
      <p className="px-20 text-center text-white md:text-2xl py-4">
        Say goodbye to the hassle of manual voucher creation. With GiftEase, you
        can effortlessly generate and customize vouchers for your employees.
        Choose from a variety of options to create the perfect rewards tailored
        to your team's needs.
      </p>
      <div className="text-center">
        <button className="rounded-lg border-white bg-white text-blue-900 font-semibold p-2 m-2 cursor-pointer">
          Get Started
        </button>
        <button className="border rounded-lg bg-transparent text-white border-white font-semibold p-2 cursor-pointer m-2">
          <Link to="/marketplacepage">Explore Marketplace</Link>
        </button>
      </div>
      <div>
        <img src={image1} alt="/" className="p-20" />
      </div>
    </div>
  );
};

export default Hero;
