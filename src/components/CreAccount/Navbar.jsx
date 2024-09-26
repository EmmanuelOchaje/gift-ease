import Image from "../../assets/images/footer.png";

const Navbar = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[625px]">
          <img src={Image} alt="/" className="w-[120px] m-auto" />
          <h2 className="text-purple-900 text-center font-bold text-3xl">
            Create Account
          </h2>
          <p className="text-black text-center text-[14px] w-[500px] m-auto font-medium">
            Ready to simplify your employee rewards program? Let's get started!
            Sign up and experience the benefits of GiftEase today.
          </p>

          <div className="m-auto w-fit">
            <form>
              <label className="text-black text-[12px]">Company's Name</label>
              <br />
              <input
                type="text"
                placeholder="First Name"
                className="w-[500px] rounded-md p-2  bg-gray-200 text-[10px]"
              />
              <br />
              <label className="text-black text-[12px]">About Us</label>
              <br />
              <input
                type="text"
                placeholder="Eg. @gmail.com"
                className="w-[500px] rounded-md p-2 bg-gray-200 text-[11px]"
              />
              <br />
              <label className="text-black text-[12px]">
                Organization Email
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter Email"
                id=""
                className="w-[500px] rounded-md p-2 bg-gray-200 text-[11px]"
              />
              <br />
              <label className="text-black text-[12px]">
                Business Representative
              </label>
              <br />
              <input
                type="text"
                placeholder="John"
                id=""
                className="w-[500px] rounded-md p-2 bg-gray-200 text-[11px]"
              />
              <br />
              <label className="text-black text-[12px]">Company's Size</label>
              <br />
              <input
                type="number"
                placeholder="Select an option"
                id=""
                className="w-[500px] rounded-md p-2 bg-gray-200 text-[11px]"
              />
              <br />
              <label className="text-black text-[12px]">Contry</label>
              <br />
              <input
                type=""
                name=""
                id=""
                className="w-[500px] rounded-md p-2 bg-gray-200 text-[11px]"
              />
              <br />
              <label className="text-black text-[12px]">Phone Number</label>
              <br />
              <input
                type="text"
                placeholder=""
                id=""
                className="w-[500px] rounded-md p-2 bg-gray-200 text-[11px]"
              />
              <br />
              <label className="text-black text-[12px]">PassWord</label>
              <br />
              <input
                type="text"
                placeholder="......"
                id=""
                className="w-[500px] rounded-md p-2 bg-gray-200 text-[11px]"
              />
            </form>
          </div>
        </div>
        <div className="w-max">
          <div className="w-[692px] bgcl"> hey</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
