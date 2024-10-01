import Image from "../../assets/images/footer.png";
import voucher from "../../assets/images/voucher (2).png";
import slant from "../../assets/images/slant.png";
import Image2 from "../../assets/images/Frame 12.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
/* import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input"; */

const CreateAccount = () => {
  const [value, setValue] = useState({
    conpanyName: "",
    about: "",
    email: "",
    representative: "",
    size: "",
    country: "",
    phoneNumber: 0,
    password: "",
  });

  function fill(e) {
    // console.log(e.target.value);
    const name = e.target.name;
    const values = e.target.value;
    setValue((prev) => {
      return { ...prev, [name]: values };
    });
    console.log(value);
  }

  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);

  function handleChange(value) {
    // preventDefault(e);
    // const inpt = e.target.value;
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  }
  const validatePhoneNumber = (phoneNumber) => {
    const phonePattern = /^\d{11}$/;
    return phonePattern.test(phoneNumber);
  };

  return (
    <div>
      <div className="flex">
        {/* left-slide */}
        <div className="w-[625px]">
          <Link to="/">
            <img src={Image} alt="/" className="w-[120px] m-auto" />
          </Link>
          <h2 className="cl text-center font-bold text-3xl">Create Account</h2>
          <p className="text-black text-center text-[14px] w-[500px] m-auto font-medium">
            Ready to simplify your employee rewards program? Let's get started!
            Sign up and experience the benefits of GiftEase today.
          </p>

          <div className="m-auto w-fit">
            <form>
              <label className="text-black text-[12px]">
                Company's Name <br />
                <input
                  onChange={fill}
                  name="companyName"
                  type="text"
                  placeholder="First Name"
                  className="w-[500px] rounded-md p-2  bg-gray-200 h-[56px] text-[16px]"
                />
              </label>

              <br />
              <label className="text-black text-[12px]">
                About Us
                <br />
                <input
                  onChange={fill}
                  name="about"
                  type="text"
                  placeholder="Eg. @gmail.com"
                  className="w-[500px] rounded-md p-2 bg-gray-200 h-[56px] text-[16px]"
                />
              </label>
              <br />
              <label className="text-black text-[12px]">
                Organization Email
                <br />
                <input
                  onChange={fill}
                  type="text"
                  name="email"
                  placeholder="Enter Email"
                  id=""
                  className="w-[500px] rounded-md p-2 bg-gray-200 h-[56px] text-[16px]"
                />
              </label>
              <br />
              <label className="text-black text-[12px]">
                Business Representative
                <br />
                <input
                  onChange={fill}
                  name="representative"
                  type="text"
                  placeholder="John"
                  id=""
                  className="w-[500px] rounded-md p-2 bg-gray-200 h-[56px] text-[16px]"
                />
              </label>
              <br />
              <label className="text-black text-[12px]">
                Company's Size
                <br />
                <input
                  onChange={fill}
                  type="text"
                  placeholder="Select an option"
                  id=""
                  size="size"
                  className="w-[500px] rounded-md p-2 bg-gray-200 h-[56px] text-[16px]"
                />
              </label>
              <br />
              <label className="text-black text-[12px]">
                Country
                <br />
                <input
                  onChange={fill}
                  type=""
                  name="country"
                  id=""
                  className="w-[500px] rounded-md p-2 bg-gray-200 h-[56px] text-[16px]"
                />
              </label>
              <br />
              <label className="text-black text-[12px]">
                Phone Number
                <br />
                <PhoneInput
                  name="phoneNumber"
                  country={"ng"}
                  value={phoneNumber}
                  inputProps={{ required: true }}
                  inputClass="inpt"
                  containerClass="cont"
                  inputStyle={{
                    width: 500,
                    height: 56,
                    backgroundColor: "rgb(230, 230, 230)",
                    border: "none",
                    paddingLeft: 70,
                    fontFamily: "Raleway, sans-serif",
                  }}
                  buttonStyle={{
                    backgroundColor: "rgb(230,230,230)",
                    border: "none",
                    width: 55,
                  }}
                  // onFocus={{ border: "rgb(220,220,220)" }}
                  type="text"
                  placeholder="123"
                  onChange={handleChange}
                  id=""
                  // className="inpt w-[500px] rounded-md bg-gray-200 h-[56px] text-[16px]"
                  className="inpt"
                />
                {!valid && (
                  <p className="text-black font-medium ml-3 text-[12px]">
                    Please enter a valid number and should be at least 10
                    characters
                  </p>
                )}
              </label>
              <br />
              <label className="text-black text-[12px]">
                PassWord
                <br />
                <input
                  onChange={fill}
                  name="password"
                  type="text"
                  placeholder="......"
                  id=""
                  className="w-[500px] rounded-md p-2 bg-gray-200 h-[56px] text-[16px]"
                />
              </label>
              <p className="text-black font-medium ml-3 text-[12px]">
                Password should be at least 8 characters
              </p>
              <p className="text-black font-medium ml-3 my-3 text-[12px]">
                <input type="checkbox" name="" className="bgcl chck" /> I accept
                the{" "}
                <Link className="underline font-bold cl">
                  Terms and conditions
                </Link>
              </p>
              <button
                className={
                  value !== ""
                    ? "bgcl text-white font-semibold p-4 w-[500px] m-auto rounded-md"
                    : "bgcl opacity-50 text-white font-semibold p-4 w-[500px] m-auto rounded-md"
                }
              >
                Create Account
              </button>
              <p className="text-black font-medium ml-3 my-3 text-[12px]">
                Already have an account?{" "}
                <Link className="cl font-bold underline" to="/adminloginpage">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>

        {/* right-slide */}
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

export default CreateAccount;
