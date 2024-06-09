import React from "react";
import style from "./faq.module.css";

const Faq = () => {
  return (
    <div className="text-black px-[5%] flex flex-col gap-[15px]">
      <div
        className={`mx-auto text-[30px] font-semibold h-[50px] w-[40%] flex justify-center items-center text-[#823ec9]`}
      >
        FAQ
      </div>
      <div className="leading-8 flex flex-col gap-[10px]">
        <h2 className="font-semibold">Most Common Questions And Answers</h2>
        <p className="text-justify ">
          Molly Maid is committed to your complete satisfaction, which is why we
          strive to offer the most consistent, reliable, and affordable
          housecleaning services around. Our team of experienced professionals
          has taken the time to answer some of our most frequently asked
          questions for your convenience.
        </p>
      </div>
    </div>
  );
};

export default Faq;
