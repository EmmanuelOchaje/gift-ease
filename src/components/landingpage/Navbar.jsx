import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  function menu() {
    return setShowMenu(!showMenu);
  }
  return (
    <div className="flex justify-between static h-[95px]">
      <div>
        <img src={logo} alt="/" className="w-[80px] h-[80px] mt-2 ml-9" />
      </div>

      <div className="font-semibold md:flex hidden py-5">
        <ul className="flex pt-4 ml-20 ">
          <li className="mr-5 cursor-pointer">Product</li>
          <li className="mr-5 cursor-pointer">Our Partners</li>
          <li className="mr-5 cursor-pointer">Market Place</li>
        </ul>
      </div>

      <div className=" py-5 md:flex hidden pr-9 ">
        <button className="m-2 font-semibold cursor-pointer">Login</button>
        <Link to="/creaccount">
          <button className="m-2 bg-white cursor-pointer rounded text-blue-900 font-semibold p-2">
            Create Account
          </button>
        </Link>
      </div>

      <div
        className="md:hidden float-right mt-8 mr-9"
        onClick={() => setShowMenu(true)}
      >
        <i class="bx bx-menu"></i>
      </div>

      {/* overlay */}
      {showMenu ? (
        <div
          className="bg-black/50 fixed w-full h-screen z-10 top-[0px] left-0"
          onClick={() => menu()}
        ></div>
      ) : (
        ""
      )}

      <div
        className={
          showMenu
            ? "w-[400px] bg-purple-900 top-[0px] lg:w-[500px] right-0 h-screen z-10 fixed duration-300"
            : "w-[400px] bg-purple-900 top-[0px] lg:w-[500px] right-[-100%] h-screen z-10 fixed duration-300"
        }
      >
        <div className="float-right mr-10 mt-5 text-3xl" onClick={() => menu()}>
          <i class="bx bx-x"></i>
        </div>
        <ul className="ml-auto mt-20 mr-auto text-center">
          <li className="m-10">Product</li>
          <li className="m-10">Our Partners</li>
          <li className="m-10">Market Place</li>
          <li className="m-10">Login</li>
          <li className="m-10">Create Account</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;