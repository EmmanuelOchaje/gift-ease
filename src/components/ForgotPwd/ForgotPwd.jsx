import image from "../../assets/images/footer.png";
import vector from "../../assets/images/Vector.png";
import vector2 from "../../assets/images/Vector (2).png";
import vector3 from "../../assets/images/Vector (3).png";
import vector4 from "../../assets/images/Vector (4).png";
import vector5 from "../../assets/images/Vector (5).png";
import vector6 from "../../assets/images/Vector (6).png";
import vector7 from "../../assets/images/Vector (7).png";
import vector8 from "../../assets/images/Vector (8).png";
import { Link } from "react-router-dom";

const ForgotPwd = () => {
  return (
    <div>
      <div className="mt-8">
        <Link to="/">
          <img src={image} className="m-auto w-[120px]" alt="" />
        </Link>
        <div className="ml-[618px] mt-10">
          <div className="relative m-auto">
            <img src={vector} alt="/" className="w-[117px] absolute" />
            <img
              src={vector2}
              alt=""
              className="w-[107px] absolute top-[10px] left-[3px]"
            />
            <img
              src={vector3}
              alt=""
              className="absolute top-[20px] left-[40px] w-[33px]"
            />
            <img
              src={vector4}
              alt=""
              className="w-[48px] h-[33px] absolute top-[46px] left-[32px]"
            />
            <img
              src={vector5}
              className="w-[9px] h-[13px] left-[52px] absolute top-[57px]"
              alt=""
            />
            <img
              src={vector6}
              className="w-[25px] h-[25px] left-[58px] absolute top-[65px]"
              alt=""
            />
            <img
              src={vector7}
              className="w-[9px] h-[14px] top-[71px] absolute left-[66px] "
              alt=""
            />
            <img
              src={vector8}
              className="absolute w-[17px] h-[19px] left-[59px] top-[66px] "
              alt=""
            />
          </div>
        </div>

        <h2 className="cl text-center font-bold text-3xl mt-[180px]">
          Forgot Password?
        </h2>
        <p className="text-black text-center text-[14px] w-[500px] m-auto font-medium">
          You don’t need to worry, We will send a reset instructions
        </p>
        <div className="ml-[420px] mt-[20px]">
          <label className="text-black text-[14px] font-semibold">
            Email Address <br />
            <input
              type="text"
              placeholder="@gmail.com"
              className="w-[500px] rounded-md p-2 my-4 font-normal bg-gray-200 h-[56px] text-[16px]"
            />
          </label>

          <button className="bgcl text-white font-semibold p-4 my-2 w-[500px] m-auto rounded-md">
            Log In
          </button>
        </div>
        <p className="text-black text-center pb-10 font-medium ml-3 my-3 text-[12px]">
          <Link className="cl font-bold underline" to="/adminloginpage">
            <i class="bx bx-left-arrow-alt"></i>
            Back to Login Page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPwd;
