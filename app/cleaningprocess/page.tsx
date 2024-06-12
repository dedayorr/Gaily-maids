import React from "react";
import Image from "next/image";

const CleaningProcess = () => {
  return (
    <div className="text-black mt-[60px] mx-[5%] flex flex-col gap-[20px]">
      {" "}
      <h1 className="text-[30px] font-bold leading-8 text-[#823ec9] lg:text-[45px]">
        Our Home Cleaning Process
      </h1>
      <h2 className="font-light text-[28px] lg:text-[35px] lg:tracking-widest">
        Full Service House Cleaning
      </h2>
      <div>
        <p className="leading-8 lg:leading-[200%] text-justify flex-1 lg:text-[28px]">
          When you&apos;re balancing a busy family life, long hours at the office,
          and other important aspects of your weekly routine, finding time to
          keep your house in order can be difficult. Even though life gets busy,
          coming home should never be a chore and with Gaily Maids, it won&quot;t
          be. We understand your home is your space to unwind and feel safe and
          secure. Our professional house cleaning services are designed to keep
          your home looking its best, based on your cleaning preferences and
          desired frequency. Learn about our room by room cleaning process and
          how our professional house cleaning services can help restore health
          and balance to your life.
        </p>
        <Image
            className=" "
            src="/dirt.png"
            alt=""
            width={200}
            height={100}
            layout="responsive"
          />
      </div>
    </div>
  );
};

export default CleaningProcess;
