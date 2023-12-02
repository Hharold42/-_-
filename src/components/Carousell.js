import React, { useEffect, useState } from "react";
import img1 from "../static/img/img1.jpg";
import img2 from "../static/img/img2.jpg";
import img3 from "../static/img/img3.jpg";
import img4 from "../static/img/img4.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const images = [img1, img2, img3, img4];

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  const [prevI, setPrevI] = useState(-1);

  const goToNextSlide = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
  };

  const goToPrevSlide = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex((prev) => prev - 1);
    }
  };

  const renderSlide = () => {
    return (
      <div className="rounded-xl w-full h-[380px] overflow-hidden ">
        <img
          className={`h-[380px] w-full  `}
          src={images[index]}
        />
      </div>
    );
  };


  return (
    <div className="w-full flex justify-between align-middle px-6">
      <img
        className=" opacity-20  w-[32%] rounded-xl my-5 h-[380px]"
        src={images[index - 1 < 0 ? images.length - 1 : index - 1]}
      />
      <div className="w-[32%] flxrow align-middle relative overflow-hidden rounded-xl shadow-xl my-5 ">
        <button className=" absolute top-[50%]" onClick={goToPrevSlide}>
          <FaAngleLeft
            size={45}
            className=" rounded-r-full bg-[#2c2c2c57] p-3"
            color="white"
          />
        </button>
        {renderSlide()}

        <button className=" absolute top-[50%] right-0" onClick={goToNextSlide}>
          <FaAngleRight
            size={45}
            className=" rounded-l-full bg-[#2c2c2c57] p-3"
            color="white"
          />
        </button>
      </div>
      <img
        className=" opacity-20  w-[32%] rounded-xl my-5 h-[380px]"
        src={images[index + 1 >= images.length ? 0 : index + 1]}
      />
    </div>
  );
};

export default ImageCarousel;
