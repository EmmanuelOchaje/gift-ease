import image from "../../assets/images/footer.png";

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center pt-28 ">
      <div>
        <img src={image} alt="/" className="m-auto w-[120px]" />
        <p className="text-[16px] text-gray-500 mt-48">
          Simplify your employee's reward program.
        </p>
      </div>
    </div>
  );
};

export default Loader;
