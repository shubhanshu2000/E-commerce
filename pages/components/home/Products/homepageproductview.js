import react, { useState } from "react";
import Image from "next/image";

const HomePageProductCard = (props) => {
  const [showExtraDetails, setShowExtraDetails] = useState(false);
  return (
    <>
      <span
        onClick={() => setShowExtraDetails(true)}
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
          <h1 className="font-bold    text-2xl">{props.title}</h1>
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
      {showExtraDetails ? (
        <div className=" absolute top-60 justify-center  items-center    flex w-full h-screen flex-col  z-50">
          <div className="shadow-xl  w-3/4 h-screen  bg-blue-200  flex flex-col  border-2 cursor-pointer  p-2 m-2 z-50  border-black rounded-2xl ">
            <Image
              src={props.img}
              alt={props.title}
              height="800"
              width="800"
              // objectFit="contain"
            />
            <div className="mt-4">
              <h1 className="font-bold text-2xl">{props.title}</h1>
              <p className="font-semibold my-2">{props.info}</p>
              <p>{props.more_info}</p>
              <p className="font-semibold my-1">
                <span className="font-bold">Price: </span>
                {props.price}
              </p>
              <p className="font-semibold">
                <span className="font-bold">Rating: </span>
                {props.rating}
              </p>
            </div>
          </div>
          <button className="" onClick={() => setShowExtraDetails(false)}>
            Close
          </button>
        </div>
      ) : null}
    </>
  );
};

export default HomePageProductCard;
