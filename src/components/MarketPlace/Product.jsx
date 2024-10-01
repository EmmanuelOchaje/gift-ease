import ProductItem from "./ProductItem";
// import items from "../../Items.json";

const items = [
  {
    img: "https://cdn.dribbble.com/userupload/13371952/file/original-60d4b3535b7bb2507c8ed0beb127dbf2.png?crop=0x0-1600x1200",
    name: "Chicken Republic",
    text: "Enjoy the very best of dining experience with mouth watering yet affordable meal options from continental cuisines to the best of local dishes",
    cat: "Restaurant",
  },
  {
    img: "https://www.vmcdn.ca/f/files/alimoshotoday/images/sweet-sensation-logo.png;w=640",
    name: "Sweet Sensation",
    text: "Enjoy the very best of dining experience with mouth watering yet affordable meal options from continental cuisines to the best of local dishes",
    cat: "Restaurant",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSflcs6m55xlP8Snilp0zOqqdtlyLrkPvd-0A&s",
    name: "The Place",
    text: "Enjoy the very best of dining experience with mouth watering yet affordable meal options from continental cuisines to the best of local dishes",
    cat: "Restaurant",
  },
  {
    img: "https://cdn.dribbble.com/userupload/13371952/file/original-60d4b3535b7bb2507c8ed0beb127dbf2.png?crop=0x0-1600x1200",
    name: "Chicken Republic",
    text: "Enjoy the very best of dining experience with mouth watering yet affordable meal options from continental cuisines to the best of local dishes",
    cat: "Restaurant",
  },
  {
    img: "https://www.vmcdn.ca/f/files/alimoshotoday/images/sweet-sensation-logo.png;w=640",
    name: "Sweet Sensation",
    text: "Enjoy the very best of dining experience with mouth watering yet affordable meal options from continental cuisines to the best of local dishes",
    cat: "Restaurant",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSflcs6m55xlP8Snilp0zOqqdtlyLrkPvd-0A&s",
    name: "The Place",
    text: "Enjoy the very best of dining experience with mouth watering yet affordable meal options from continental cuisines to the best of local dishes",
    cat: "Restaurant",
  },
];
const Product = () => {
  //   console.log(items);

  return (
    <div className="flex flex-wrap my-10 px-32">
      {items.map((items, idx) => (
        <ProductItem items={items} key={idx} />
      ))}
    </div>
  );
};

export default Product;
