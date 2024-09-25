import addImg from "./assets/images/add.png";
import wallet from "./assets/images/wallet.png";
import voucher from "./assets/images/Voucher.png";

const Hiw = () => {
  return (
    <div>
      <h2 className="text-purple-900 m-8 font-semibold text-center">
        HOW IT WORKS
      </h2>
      <div className="flex-col md:flex-row lg:flex justify-between md:mx-14 my-14 ">
        <div className=" w-[264px] mb-10 m-auto lg:m-0">
          <div className="">
            <img src={addImg} className="m-auto w-[40px] md:w-[60px]" alt="/" />
          </div>
          <h2 className="text-purple-900 font-bold text-[15px] md:text-[20px] text-center">
            Create An Account
          </h2>
          <p className="text-purple-900 text-center ">
            Register your company on GiftEase to start creating vouchers
          </p>
        </div>

        <div className=" w-[264px] mb-10 m-auto lg:m-0">
          <div>
            <img className="m-auto w-[40px] md:w-[60px]" src={wallet} alt="/" />
          </div>
          <h2 className="text-purple-900 font-bold md:text-[20px] text-center">
            Fund Your Wallet
          </h2>
          <p className="text-purple-900 text-center ">
            Add money to your naira or dollar wallet{" "}
          </p>
        </div>

        <div className=" w-[264px] mb-10 m-auto lg:m-0">
          <div>
            <img
              className="m-auto w-[40px] md:w-[60px]"
              src={voucher}
              alt="/"
            />
          </div>
          <h2 className="text-purple-900 md:text-[20px] font-bold text-center">
            Generate Voucher
          </h2>
          <p className="text-purple-900 text-center ">
            Generate bulk vouchers to your employee.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hiw;
