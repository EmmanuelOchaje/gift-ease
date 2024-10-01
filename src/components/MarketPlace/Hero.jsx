import image1 from "../../assets/images/Rectangle 9.png";
import image2 from "../../assets/images/Rectangle 10.png";
import image3 from "../../assets/images/Rectangle 11.png";
import image4 from "../../assets/images/Rectangle 12.png";
import icon from "../../assets/images/Icon.png";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-[#443792] bg-blend-darken">
        <div className="absolute h-[385px] pt-16 w-full bg-[#443792]/80 text-white text-center">
          <h1 className="text-4xl font-bold">MARKETPLACE</h1>
          <p className="font-semibold w-[500px] m-auto pt-4">
            Generate vouchers for any of the listed stores/brands and share with
            your employees
          </p>
          <div className="flex justify-center items-center mt-10">
            <div className="flex m-auto cursor-pointer bg-[#ffffff] rounded-lg text-[#443792] w-[457px] justify-between h-[56px]">
              <option value="" className="my-auto font-semibold ml-5">
                All Store
              </option>
              <input
                type="text"
                className="srch w-[266px] h-[22px] my-auto font-medium text-[#b3b3b3]"
              />
              <img
                src={icon}
                alt=""
                className="w-[18px] h-[18px] my-auto mr-5"
              />
            </div>
          </div>
          <div>
            <button className="m-5 rounded-lg bg-[#ffffff]/50 h-10 w-28">
              Restaurant
            </button>
            <button className="m-5 rounded-lg bg-[#ffffff]/50 h-10 w-28">
              Reatail
            </button>
            <button className="m-5 rounded-lg bg-[#ffffff]/50 h-10 w-28">
              eCommerce
            </button>
            <button className="m-5 rounded-lg bg-[#ffffff]/50 h-10 w-28">
              Affiliate
            </button>
            <button className="m-5 rounded-lg bg-[#ffffff]/50 h-10 w-28">
              Affiliate
            </button>
          </div>
        </div>
        <img src={image1} alt="" className="w-[336px] h-[385px]" />
        <img src={image2} alt="" className="w-[336px] h-[385px]" />
        <img src={image4} alt="" className="w-[336px] h-[385px]" />
        <img src={image3} alt="" className="w-[336px] h-[385px]" />
      </div>
    </div>
  );
};

export default Hero;
