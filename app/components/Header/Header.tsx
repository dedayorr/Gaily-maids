"use client";
import React, { useState } from "react";
import { Accordion } from "flowbite-react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import Marquee from "../marquee/Marquee";
import "./header.css";
import Estimate from "../EstimatePopUp/Estimate";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  const openModal = () => {
    setShowModal(true);
    setNavOpen(false)
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <header className="sticky top-0 z-40">
        <div className="text-[#2f1e42] bg-white flex items-center justify-between h-[30px] px-[3%] lg:h-[40px]">
          <div className="flex text-[11px] gap-[2px] md:text-[18px] md:gap-[10px] ">
            <FaFacebook />
            <AiFillInstagram />
            <IoMdMail />
          </div>
          <a className="text-[11px] md:text-[18px]" href="tel:+1-872-235-7202">
            {" "}
            +1-872-235-7202{" "}
          </a>
          <div className="text-[11px] md:text-[18px]">
            800 S. Mclean Blvd. Suite B 60123
          </div>
        </div>
        <Marquee text="The objective of cleaning is not just to clean, but to feel happiness living within that environment." />
        <div className="sticky top-0 flex justify-between items-center px-[5%] bg-[#813ec9f3] h-[80px] lg:h-[100px]">
          <Link href="/" className=" Logo ml-">
            {" "}
            <Image
              className="hover:w-[300px]"
              src="/gailyminds.png "
              alt=""
              width={200}
              height={200}
            />
          </Link>
          <div className="md:hidden" onClick={toggleMenu}>
            {!navOpen ? (
              <GiHamburgerMenu className="text-3xl text-white" />
            ) : (
              <FaTimes className="text-3xl text-white" />
            )}
          </div>
          <div className=" hidden md:flex gap-[10px] text-[14px] text-white lg:gap-[25px] lg:text-[20px] ">
            <Link href="/cleaningservices">
              <p className="lg:hover:text-2xl">Cleaning Services</p>
            </Link>

            <Link href="/cleaningprocess">
              <p className="lg:hover:text-2xl">Our Cleaning Process</p>
            </Link>
            <Link href="/why-us">
              <p className="lg:hover:text-2xl">Why Hire Us</p>
            </Link>
            <Link href="/aboutUs">
              <p className="lg:hover:text-2xl">About Us</p>
            </Link>
            <Link href="/hiring">
              <p className="lg:hover:text-2xl">We&apos;re Hiring</p>
            </Link>
          </div>
        </div>
        {navOpen && (
          <div className="fixed top-0 w-[87%] h-full bg-white z-50">
            <Link href="/">
              {" "}
              <Image
                className="Logo2 ml-[-13%] mt-[7%]"
                src="/the_gaily_logo.png "
                alt=""
                width={500}
                height={500}
                onClick={closeNav}
              />
            </Link>
            <Accordion className=" md:hidden border-none flex flex-col gap-[25px] mt-[10px] px-[5%]">
              <Accordion.Panel>
                <Accordion.Title className="text-[#823ec9] text-[18px] border-none">
                  Cleaning Services
                </Accordion.Title>

                <Accordion.Content>
                  <ul className="flex flex-col ml-[6%] gap-5 font-light text-[#823ec9]">
                    <li onClick={closeNav}>
                      <Link href="/cleaningservices">Apartment Cleaning</Link>
                    </li>
                    <li onClick={closeNav}>
                      {" "}
                      <Link href="/cleaningservices">House Cleaning</Link>
                    </li>
                    <li onClick={closeNav}>
                      <Link href="/cleaningservices">Detailed Cleaning </Link>
                    </li>
                    <li onClick={closeNav}>
                      {" "}
                      <Link href="/cleaningservices">Holiday Cleaning </Link>
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
                    <li onClick={closeNav}>
                      <Link href="/cleaningprocess">Bathroom Cleaning</Link>
                    </li>
                    <li onClick={closeNav}>
                      {" "}
                      <Link href="/cleaningprocess">Bedroom Cleaning</Link>
                    </li>
                    <li onClick={closeNav}>
                      <Link href="/cleaningprocess">Kitchen Cleaning </Link>
                    </li>
                    <li onClick={closeNav}>
                      {" "}
                      <Link href="/cleaningprocess">
                        Laundry Room Cleaning{" "}
                      </Link>
                    </li>
                    <li onClick={closeNav}>
                      {" "}
                      <Link href="/cleaningprocess">
                        Dinning Room Cleaning{" "}
                      </Link>
                    </li>
                    <li onClick={closeNav}>
                      {" "}
                      <Link href="/cleaningprocess">Living Room Cleaning </Link>
                    </li>
                  </ul>
                </Accordion.Content>
              </Accordion.Panel>
              <p onClick={closeNav} className="ml-[%] text-[18px] mt-[%] font-medium text-[#823ec9]">
              <Link href="/why-us">Why Hire Us </Link>
            </p>
              <p onClick={closeNav} className="ml-[%] text-[18px] mt-[%] font-medium text-[#823ec9]">
              <Link href="/aboutUs">About Us </Link>
            </p>
            </Accordion>
            <p onClick={closeNav} className="ml-[5%] text-[18px] mt-[8%] font-medium text-[#823ec9]">
              <Link href="/hiring">We&apos;re Hiring </Link>
            </p>
            <Link href="">
              <button
                onClick={openModal}
                className="ml-[5%] mt-[15%] text-[20px] italic text-[#5f2b96] underline"
              >
                Request an Estimate
              </button>
            </Link>
            <div className="flex text-[#5f2b96] gap-[5%] items-center ml-[5%] mt-[5%] underline text-[20px] italic ">
              {/* <FaPhoneVolume /> */}
              <a href="tel:+18722357202"><p>Contact Us</p></a>
            </div>
          </div>
        )}
      </header>

      <Estimate showModal={showModal} closeModal={closeModal} />
    </>
  );
};

export default Header;
