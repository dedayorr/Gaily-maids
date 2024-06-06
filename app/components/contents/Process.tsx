import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Process = () => {
  return (
    <div className="mx-[5%]">
      <h2 className="text-[25px] font-semibold leading-8 text-[#823ec9]">Our Cleaning Process</h2>
      <p className=" text-[20px] font-medium">Full Service House Cleaning</p>
      <div className="leading-8 text-justify">
        When you're balancing a busy family life, long hours at the office, and
        other important aspects of your weekly routine, finding time to keep
        your house in order can be difficult. Even though life gets busy, coming
        home should never be a chore – and with Merry Maids, it won’t be.
      </div>
      <Link href="" className="text-[18px] text-[#823ec9] flex items-center gap-[10px]">
        <p className="italic underline">See More</p>
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default Process;
