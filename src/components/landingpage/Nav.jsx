import { useState } from "react";
import logo from "../assets/images/logo.png";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  function menu() {
    return setShowMenu(!showMenu);
  }

  return (
    <>
      <div className="md:flex flex-row leading-6 justify-between border border-transparent text-white px-">
        <div className="md:hidden float-right mt-8 mr-9">
          <i class="bx bx-menu" onClick={() => menu()}></i>
        </div>
        <img src={logo} alt="/" className="w-[80px] h-[80px] mt-2 ml-9" />

        <div
          className={
            showMenu
              ? "w-screen z-10 md:hidden flex duration-300  h-screen"
              : "w-screen z-10 md:hidden flex duration-300 top-[-100%] h-screen"
          }
        >
          <ul className="ml-auto mt-10 mr-auto text-center">
            <li className="m-5">Product</li>
            <li className="m-5">Our Partners</li>
            <li className="m-5">Market Place</li>
            <li className="m-5">Login</li>
            <li className="m-5">Create Account</li>
          </ul>
        </div>

        <div className="font-semibold md:flex hidden py-5">
          <ul className="flex pt-4 ml-20 ">
            <li className="mr-5 cursor-pointer">Product</li>
            <li className="mr-5 cursor-pointer">Our Partners</li>
            <li className="mr-5 cursor-pointer">Market Place</li>
          </ul>
        </div>

        <div className=" py-5 hidden md:flex pr-9 ">
          <button className="m-2 font-semibold cursor-pointer">Login</button>
          {/* <br className="sm:block" /> */}
          <button className="m-2 bg-white cursor-pointer rounded text-blue-900 font-semibold p-2">
            Create Account
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;

//src\assets\images\logo.png
