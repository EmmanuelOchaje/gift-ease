//
import { useState } from "react";

import avatar from "../../assets/images/Avatar Image.png";

const slide = [
  {
    word: "Giftease has revolutionized how we appreciate our employees. The platforms ease of use, customization options, and vast voucher selection have made it a game-changer for us. Our employees love the personal touch, and our HR team loves the efficiency it brings to our rewards program",
    name: "Abdulrrazaq A.",
    avatar: avatar,
    occupation: " Business Owner. XYZ Limited.",
  },
  {
    word: "Giftease has revolutionized how we appreciate our employees. The platforms ease of use, customization options, and vast voucher selection have made it a game-changer for us. Our employees love the personal touch, and our HR team loves the efficiency it brings to our rewards program",
    name: "Emmanuel A.",
    avatar: avatar,
    occupation: " Business Owner. XYZ Limited.",
  },
  {
    word: "Giftease has revolutionized how we appreciate our employees. The platforms ease of use, customization options, and vast voucher selection have made it a game-changer for us. Our employees love the personal touch, and our HR team loves the efficiency it brings to our rewards program",
    name: "Adoche A.",
    avatar: avatar,
    occupation: " Business Owner. XYZ Limited.",
  },
];

const Slider = () => {
  const [step, setStep] = useState(1);

  function next() {
    if (step < 3) setStep(step + 1);
  }
  function prev() {
    if (step > 1) setStep(step - 1);
  }
  return (
    <div className="mt-10 slider">
      <h2 className="text-purple-900 text-center font-bold text-2xl lg:text-3xl">
        DON'T TAKE OUR WORD FOR IT. TRUST OUR CUSTOMERS.
      </h2>

      <div className="h-auto flex justify-center items-center ">
        <button onClick={() => prev()}>
          <i class="bx bx-chevron-left"></i>
        </button>
        <div className="lg:w-[700px] mt-10 ">
          <p className="text-purple-950 text-center items-center">
            “ {slide[step - 1].word} ”
          </p>
          <div className="my-10">
            <img
              src={slide[step - 1].avatar}
              alt="/"
              className="m-auto w-[65px] "
            />
            <p className="text-black/80 text-center font-bold ">
              {slide[step - 1].name}
            </p>
            <p className="text-center text-black/50">
              {slide[step - 1].occupation}
            </p>
            <div className="flex justify-center mt-3">
              <button
                className={
                  step === 1
                    ? "bg-purple-900 cursor-pointer  rounded-full h-3 w-3 m-2"
                    : "bg-black/10 cursor-pointer rounded-full h-3 w-3 m-2"
                }
              ></button>
              <button
                className={
                  step === 2
                    ? "bg-purple-900 cursor-pointer  rounded-full h-3 w-3 m-2"
                    : "bg-black/10 cursor-pointer rounded-full h-3 w-3 m-2"
                }
              ></button>
              <button
                className={
                  step === 3
                    ? "bg-purple-900 cursor-pointer  rounded-full h-3 w-3 m-2"
                    : "bg-black/10 cursor-pointer rounded-full h-3 w-3 m-2"
                }
              ></button>
            </div>
          </div>
        </div>
        <button onClick={() => next()}>
          <i class="bx bx-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Slider;
