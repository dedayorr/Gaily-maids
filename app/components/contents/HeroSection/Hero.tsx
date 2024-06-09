import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={`${styles.Hero} `}>
      {" "}
      {/* <div className={`${styles.overlay} absolute w-[100%] top-[109px] right-0 left-0 bg-[#0000007b] md:top-[163px]`}> */}
        <div className=" mt-[%] py-[6%] text-white tracking-widest px-[5%] flex flex-col gap-[20px] md:py-0 md:mt-[8%] lg:mt-[13%]">
          <h1 className={`pt-[16%] text-[35px] font-bold md:text-[47px] lg:text-[60px] lg:text-center`}>
            Refresh Your Space with{" "}
            <span className="text-[#823ec9]">Sparkling Clean</span> Solutions
          </h1>
          <p className="md:text-[24px] lg:text-center">
            Crafting a spotless legacy in home and office care is not just our
            mission, it&quot;s our passion
          </p>
          <button className="bg-[#823ec9] w-[60%] py-[4%] hover:bg-white hover:text-[#823ec9] md:text-[25px] lg:mx-auto lg:w-[25%] lg:rounded-[10px] lg:py-[1%]">
            Request an Estimate
          </button>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Hero;
