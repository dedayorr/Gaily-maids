import React from "react";
import "./embrace.css";
import Image from "next/image";

const EmbraceHealth = () => {
  return (
    <div className="my-[10%] h-[300px] flex justify-center items-center text-center  bg-[#813ec94e] lg:h-[600px] lg:justify-normal">
      {" "}
      <Image
        className={`peace-image hidden lg:flex lg:justify-start`}
        src="/peace.png"
        alt=""
        width={500}
        height={100}
      />
      <div className="bg-embrace relative flex flex-col gap-[30px] w-full">
        {" "}
        <p className="lg:hidden font-bold cursive italic text-[35px]">
          Embrace a healthy and happy home
        </p>
        <button className="lg:hidden border border-[#823ec9] p-[3%] text-[#823ec9] w-[60%] mx-auto">
          Book Gaily Maids Today
        </button>
        <div
          className={`pl-[15%] hidden text-white lg:flex absolute w-[100%] right-0 left-0 bg-[#000000d3] h-[600px] gap-[]`}
        >
          <div className="flex flex-col justify-center items-center gap-[25px]">
            {" "}
            <p className="hidden lg:flex font-bold cursive italic text-[55px]">
              Embrace a healthy and happy home
            </p>
            <button className="lg:flex hidden border border-[#823ec9] p-[3%] text-[#fff] hover:bg-white hover:text-[#823ec9] w-[50%] justify-center items-center mx-auto">
              Book Gaily Maids Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmbraceHealth;
