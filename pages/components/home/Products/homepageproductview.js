import Image from "next/image";
import extraDetailsViewPage from "./edvp";

const HomePageProductCard = (props) => {
  let daat = "daat";
  return (
    <>
      <span
        onClick={() => console.log(<extraDetailsViewPage />)}
        className="flex flex-col  border-2 cursor-pointer  p-2 m-2  border-black w-1/5"
      >
        <Image
          className="object-fill"
          src={props.img}
          alt={props.title}
          height="300"
          width="300"
        />
        <div className="mt-4">
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
      </span>
    </>
  );
};

export default HomePageProductCard;
