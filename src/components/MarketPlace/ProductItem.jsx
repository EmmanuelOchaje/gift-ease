const ProductItem = ({ items }) => {
  console.log(items);
  return (
    <div className="m-auto">
      <div className="shadow-md mb-10 pb-5">
        <img src={items.img} alt="/" className="w-[330px] h-[200px]" />
        <h2 className="mt-5 ml-5 font-bold">{items.name} </h2>
        <p className="w-[300px] ml-5 font-medium">{items.text}</p>
        <button className="bg-[#d7ffd7] mt-3 ml-5 text-[#008000] font-semibold p-1 text-[12px] rounded-lg">
          {items.cat}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
