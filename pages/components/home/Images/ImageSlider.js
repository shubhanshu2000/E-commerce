import { useState } from "react";
import images from "./Images.json";
import Image from "next/image";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  let length = images.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <>
      <section className="relative h-full flex justify-center items-center mt-4">
        <BsArrowLeftCircleFill
          className="absolute top-1/2 cursor-pointer left-[32px] text-2xl text-black z-10 select-none"
          onClick={prevSlide}
        />
        <BsArrowRightCircleFill
          className="absolute cursor-pointer top-1/2 right-[32px] text-2xl text-black z-10 select-none"
          onClick={nextSlide}
        />
        {images.map((slide, index) => {
          return (
            <>
              <div>
                <div
                  className={
                    index === current
                      ? "slide active opacity-1 transition duration-1000 transform scale-105"
                      : "slide opacity-0 transition duration-1000 ease-in-out"
                  }
                  key={index}
                >
                  {index === current && (
                    <Image
                      src={slide.image}
                      alt="images"
                      height="420"
                      width="800"
                      className="rounded-sm"
                    />
                  )}
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default ImageSlider;
