import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={`${styles.Hero} `}>
      {" "}
      <div className="absolute w-[100%] h-[650px] top-[90px] right-0 left-0 bg-[#0000007b] md:h-[600px] md:top-[105px]">
        <div className=" mt-[23%] py-[6%] text-white tracking-widest px-[5%] flex flex-col gap-[20px] ">
          <h1 className=" text-[35px] font-bold ">
            Refresh and Your Space with{" "}
            <span className="text-[#823ec9]">Sparkling Clean</span> Solutions
          </h1>
          <p>
            Crafting a spotless legacy in home and office care is not just our
            mission, it's our passion
          </p>
          <button className="bg-[#823ec9] w-[50%] py-[2%] hover:bg-white hover:text-[#823ec9]">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
