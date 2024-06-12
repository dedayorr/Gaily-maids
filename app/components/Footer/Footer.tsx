"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import "./footer.css";

const Footer = () => {
  return (
    <div className="flex flex-col gap-[20px] py-[10%] font-bold text-[40px] text-black mt-[10%] bg-[#813ec927] lg:py-[3%]">
      <Link href="/" className="">
        {" "}
        <Image
          className="footer-logo mx-auto lg:mx-0"
          src="/gaily-bg.png "
          alt=""
          width={200}
          height={200}
        />
      </Link>
      
      <div className="lg:ml-[5%] flex flex-col gap-[10px] text-[14px] text-white lg:gap-[25px] lg:text-[20px] font-thin">
        <Link href="/cleaningservices">
          <p className="flex justify-center text-[20px] text-[#823ec9]  lg:hover:text-2xl lg:justify-normal">
            Cleaning Services
          </p>
        </Link>

        <Link href="">
          <p className=" flex justify-center text-[20px] text-[#823ec9]  lg:hover:text-2xl lg:justify-normal ">
            Our Cleaning Process
          </p>
        </Link>
        <Link href="">
          <p className="flex justify-center text-[20px] text-[#823ec9]  lg:hover:text-2xl lg:justify-normal">
            Why Hire Us
          </p>
        </Link>
        <Link href="">
          <p className="flex justify-center text-[20px] text-[#823ec9]  lg:hover:text-2xl lg:justify-normal">
            About Us
          </p>
        </Link>
      </div>
      <div className="lg:flex lg:mx-[5%]">
      <Image
                className="hidden lg:block "
                src="/footer-image.png "
                alt=""
                width={500}
                height={500}
              />
              
        <a
          className=" flex justify-center mx-auto text-[18px] text-[#823ec9] md:text-[18px] lg:justify-normal lg:mb-[1%] font-thin"
          href="tel:+1-872-235-7202"
        >
          {" "}
          +1-872-235-7202{" "}
        </a>
        <div className="flex justify-center text-[28px] text-[#823ec9] gap-[20px] md:text-[18px] md:gap-[10px] lg:justify-normal">
          <FaFacebook />
          <AiFillInstagram />
          <IoMdMail />
        </div>
      </div>
    </div>
  );
};

export default Footer;
