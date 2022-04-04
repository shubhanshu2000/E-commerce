import Image from "next/image";

const ProductCard = (props) => {
  return (
    <>
      <div className="">
        <div className="flex border-2  p-2 m-2 border-black w-1/2  items-center">
          <Image src={props.img} alt={props.title} height="430" width="400" />

          <div className="ml-4 ">
            <h1 className="font-bold   mb- text-2xl">{props.title}</h1>
            <p className="font-semibold my-2">{props.info}</p>
            <p className="font-semibold">
              <span className="font-bold">Price: </span>
              {props.price}
            </p>
            <p className="font-semibold">
              <span className="font-bold">Rating: </span>
              {props.rating}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
