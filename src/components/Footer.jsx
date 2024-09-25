import footimg from "../assets/images/footer.png";

const Footer = () => {
  return (
    <div className="md:flex text-purple-950 justify-between mx-10 my-10 pb-10">
      <div className="">
        <img src={footimg} className="w-[100px] md:m-auto" alt="/" />
        <p className="font-semibold text-1.5xl md:text-center text-gray-500">
          A Product Of WallX
        </p>
        <p className="text-gray-500 mt-3">2023 WallX, All Rights Reserved.</p>
      </div>
      <div className="md:flex">
        <ul className="m-5">
          <li className="text-1xl font-medium text-gray-600">Product</li>
          <li className="text-1xl font-medium text-gray-600">Privacy Policy</li>
          <li className="text-1xl font-medium text-gray-600">Help</li>
        </ul>

        <ul className="m-5">
          <li className="text-1xl font-medium text-gray-600">Our Partners</li>
          <li className="text-1xl font-medium text-gray-600">MarketPlace</li>
          <li className="text-1xl font-medium text-gray-600">Add Personnel</li>
        </ul>

        <ul className="m-5">
          <li className="text-1xl font-medium text-gray-600">Create Account</li>
          <li className="text-1xl font-medium text-gray-600">Log in</li>
          <li className="text-1xl font-medium text-gray-600">
            Forgetten Password
          </li>
        </ul>
      </div>

      <div>
        <i class="bx bxl-instagram"></i>
        <i class="bx bxl-facebook-circle"></i>
        <i class="bx bxl-twitter"></i>
        <i class="bx bxl-linkedin-square"></i>
      </div>
    </div>
  );
};

export default Footer;
