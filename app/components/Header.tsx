"use client";
import React, { useState } from "react";
import { Accordion } from "flowbite-react";
import Link from "next/link";
import styles from "./Header.module.css";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleMenu = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <header className={`${styles.Hero} `}>
        <div className="absolute w-[100%] h-[560px] top-[90px] right-0 left-0 bg-[#0000007b] md:h-[600px] md:top-[105px]">
          <div className=" mt-[23%] py-[6%] text-white tracking-widest px-[5%] flex flex-col gap-[20px] ">
            <h1 className=" text-[35px] font-bold ">
              Refresh and Your Space with <span className="text-[#823ec9]">Sparkling Clean</span> Solutions
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
        <div className="bg-[#2f1e42] text-white flex items-center justify-between h-[30px] px-[3%]">
          <div className="flex text-[11px] gap-[2px]">
            <FaFacebook />
            <AiFillInstagram />
            <IoMdMail />
          </div>
          <a className="text-[11px]" href="tel:+1-872-235-7202">
            {" "}
            +1-872-235-7202{" "}
          </a>
          <div className="text-[11px]">800 S. Mclean Blvd. Suite B 60123</div>
        </div>
        <div className="sticky top-0 flex justify-between items-center px-[5%] bg-white h-[60px]">
          <Image
            className="Logo"
            src="/gaily_logo.png"
            alt=""
            width={20}
            height={20}
          />
          <div className="md:hidden" onClick={toggleMenu}>
            {!navOpen ? (
              <GiHamburgerMenu className="text-2xl text-[#823ec9]" />
            ) : (
              <FaTimes className="text-2xl" />
            )}
          </div>

          {/* <div className='flex gap-[20px]'>
                    <Link href="">Cleaning Services</Link>
                    <Link href="">Our Cleaning Process</Link>
                    <Link href="">Why Hire Us</Link>
                    <Link href="">About Us</Link>
                    
                </div> */}
        </div>
        {navOpen && (
          <div className="fixed top-0 w-[87%] h-full bg-white">
            <Accordion className="md:hidden border-none flex flex-col gap-[25px] pt-[65px] px-[5%]">
              <Accordion.Panel>
                <Accordion.Title className="text-[#823ec9] text-[18px] border-none">
                  Cleaning Services
                </Accordion.Title>

                <Accordion.Content>
                  <ul className="flex flex-col ml-[6%] gap-5 font-light text-[#823ec9]">
                    <li>
                      <Link href="">Apartment Cleaning</Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="">House Cleaning</Link>
                    </li>
                    <li>
                      <Link href="">Detailed Cleaning </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="">Holiday Cleaning </Link>
                    </li>
                  </ul>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="text-[#823ec9] text-[18px]">
                  Our Cleaning Process
                </Accordion.Title>
                <Accordion.Content>
                  <ul className="flex flex-col ml-[6%] gap-5 font-light text-[#823ec9]">
                    <li>
                      <Link href="">Bathroom Cleaning</Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="">Bedroom Cleaning</Link>
                    </li>
                    <li>
                      <Link href="">Kitchen Cleaning </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="">Laundry Room Cleaning </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="">Dinning Room Cleaning </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="">Living Room Cleaning </Link>
                    </li>
                  </ul>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="text-[#823ec9] text-[18px]">
                  Why Hire Us
                </Accordion.Title>
                <Accordion.Content>
                  <ul className="flex flex-col ml-[6%] gap-5 font-light text-[#823ec9]">
                    <li>
                      <Link href="">Afforable Cleaning</Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="">Best Cleaning Service</Link>
                    </li>
                    <li>
                      <Link href="">Custom Cleaning </Link>
                    </li>
                  </ul>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="text-[#823ec9] text-[18px]">
                  About Us
                </Accordion.Title>
                <Accordion.Content>
                  <ul className="flex flex-col ml-[6%] gap-5 font-light text-[#823ec9]">
                    <li>
                      <Link href="">Our Values</Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="">Best Cleaning Service</Link>
                    </li>
                    <li>
                      <Link href="">Custom Cleaning </Link>
                    </li>
                  </ul>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>

            <Link href="">
              <button className="ml-[5%] mt-[15%] text-[20px] italic text-[#5f2b96] underline">
                Request & Estimate
              </button>
            </Link>
            <div className="flex gap-[5%] items-center ml-[5%] mt-[5%] underline text-[20px] italic text-[#361f4d]">
              <FaPhoneVolume />
              <span>+1-872-235-7202</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
