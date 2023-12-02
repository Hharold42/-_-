import React from "react";
import { FaX } from "react-icons/fa6";

const Placeholder = ({ open, setOpen = () => {} }) => {
  return (
    open && (
      <div
        className="absolute w-full h-full top-0 bg-[#00000065] items-center justify-center flex"
        onClick={setOpen}
      >
        <div
          className="bg-white flxcol rounded-xl px-4 py-2 mx-8 my-16 w-[50%] h-[50%]"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <label className=" font-bold text-lg">Незаконченный пункт</label>
          <div className="w-full h-full flxcol justify-center items-center relative">
            <FaX
              size={100}
              color="#1D4ED8"
              className=" bg-slate-500 bg-opacity-25 rounded-full p-4"
            />
            <span className=" absolute text-[3rem] font-extrabold top-5">
              Технические работы
            </span>
            <h3 className=" font-semibold mt-8">
              Приносим извенения за предоставленные неудобства
            </h3>
            <h4 className=" font-extralight">
              Разработчики в скором времени починят данное меню
            </h4>
          </div>
        </div>
      </div>
    )
  );
};

export default Placeholder;
