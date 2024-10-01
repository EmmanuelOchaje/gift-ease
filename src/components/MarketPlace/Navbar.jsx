import { Link } from "react-router-dom";
import image from "../../assets/images/footer.png";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex justify-between mx-16">
        <Link to="/">
          <img src={image} alt="" className="w-[65px] mt-3" />
        </Link>

        <div className="font-semibold md:flex hidden py-5">
          <ul className="flex pt-4 ml-20 ">
            <li className="mr-5 cursor-pointer text-[#443792]">Product</li>
            <li className="mr-5 cursor-pointer text-[#443792]">Our Partners</li>
            <li className="mr-5 cursor-pointer text-[#443792]">
              <Link to="/marketplacepage">Market Place</Link>
            </li>
          </ul>
        </div>

        <div className=" py-5 md:flex hidden pr-9 ">
          <button className="m-2 font-semibold cursor-pointer text-[#443792]">
            Log In
          </button>
          <Link to="/createaccountpage">
            <button className="m-2 bg-[#443792] cursor-pointer rounded-lg text-white font-semibold p-2">
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
