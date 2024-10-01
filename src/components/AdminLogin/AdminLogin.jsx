import React, { useState } from "react";
import Image from "../../assets/images/footer.png";
import voucher from "../../assets/images/voucher (2).png";
import slant from "../../assets/images/slant.png";
import Image2 from "../../assets/images/Frame 12.png";
import { Link } from "react-router-dom";
import chkemail from "../../assets/images/checkMail.png";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [show, setShow] = useState(false);

  function sumbit(e) {
    e.preventDefault();
    if (email && pwd !== "") {
      setEmail("");
      setPwd("");
      setShow(!show);
    }
  }

  return (
    <div>
      {show ? (
        <div
          className=" fixed w-screen h-screen z-10 bg-black/50 flex justify-center duration-1000 ease-in-out items-center"
          onClick={() => setShow(!show)}
        >
          <div
            className="fixed bg-white h-[400px] w-[600px] rounded-lg"
            onClick={() => setShow(!show)}
          >
            <img
              src={chkemail}
              className="w-[100px] h-[100px] m-auto mt-10"
              alt=""
            />
            <h3 className="text-center text-[20px] mt-10 font-medium">
              Verify Your Email
            </h3>
            <p className="w-[400px] mt-3 text-center m-auto">
              We have you sent a verification mail. Kindly check your mail to
              verify your mail.
            </p>
            <p className="text-center mt-16">
              Didn't get a Mail?
              <span className="font-semibold text-[#443972]">
                <Link>Resend</Link>
              </span>
            </p>
          </div>
        </div>
      ) : null}

      <div className="flex">
        <div className="w-[625px]">
          <img src={Image} alt="/" className="w-[120px] m-auto" />
          <h2 className="cl text-center font-bold text-3xl">
            Welcome Back, KingStore
          </h2>
          <p className="text-black text-center text-[14px] w-[500px] m-auto font-medium">
            Login to your dashboard to see some transactions/activities you
            might have missed.
          </p>

          <div className="m-auto w-fit">
            <form className="mt-8" onSubmit={sumbit}>
              <label className="text-black font-semibold text-[12px]">
                Email Address
                <br />
                <input
                  type="text"
                  value={email}
                  placeholder="@gmail.com"
                  className="w-[500px] rounded-md p-2 font-normal bg-gray-200 h-[56px] text-[16px]"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <br />

              <label className="text-black font-semibold text-[12px]">
                Password
                <br />
                <input
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  type="text"
                  placeholder="password"
                  className="w-[500px] rounded-md p-2 font-normal bg-gray-200 h-[56px] text-[16px]"
                />
              </label>
              <p className="text-[#433792] font-bold pt-2 ml-3 text-[12px]">
                <Link to="/forgotpwdpage">Forgot Password?</Link>
              </p>

              <button
                className={
                  email && pwd !== ""
                    ? "bgcl mt-8 text-white font-semibold p-4 w-[500px] m-auto rounded-md"
                    : "bgcl mt-8 opacity-50 text-white font-semibold p-4 w-[500px] m-auto rounded-md"
                }
              >
                Log in
              </button>
              <p className="text-black text-center mt-4  font-medium ml-3 my-3 text-[12px]">
                <span className="opacity-50">Don't have an account? </span>
                <Link
                  className="cl font-bold underline"
                  to="/createaccountpage"
                >
                  Create Account
                </Link>
              </p>
            </form>
          </div>
        </div>

        <div className="w-max">
          <div className="w-[692px] bgcl rounded-lg h-[850px] my-10">
            <h2 className="text-white text-3xl font-bold pl-6 pt-28 ">
              Genereate Vouchers With Ease
            </h2>
            <p className="text-white font-medium  pl-6 pt-2 w-[575px] ">
              Say goodbye to the hassle of manual voucher creation. With
              GiftEase, you can effortlessly generate and customize vouchers for
              your employees.{" "}
            </p>
            <div className="mt-40 ">
              <img
                src={slant}
                alt="/"
                className="absolute w-[203px] right-[35px] top-[300px]"
              />
              <img src={voucher} className="w-[612px] m-auto" alt="/" />
            </div>

            <img src={Image2} alt="/" className="pt-32 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
