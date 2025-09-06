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
import { FaHouseUser } from "react-icons/fa";

// import Marquee from "../components/marquee/Marquee";
import "./header.css";
import Estimate from "../estimatePopUp/Estimate";
import Gailyminds from "../../public/static/images/Gailyminds.png";
import TheGailyLogo from "../../public/static/images/TheGailyLogo.png";

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
    setNavOpen(false);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <header className="sticky top-0 z-40">
        <div className="text-[#2f1e42] bg-white flex items-center justify-between h-[30px] px-[1%] lg:h-[40px]">
          <div className="flex text-[12px] gap-[2px] md:text-[18px] md:gap-[10px] ">
            <a
              href="https://www.facebook.com/profile.php?id=61570113383769"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />{" "}
            </a>
            <a
              href="https://www.instagram.com/gailymaids?igsh=eWh0a2ZwN216dDkz"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram />{" "}
            </a>

            <a
              href="mailto:gailymaids@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <IoMdMail />
            </a>
          </div>
          <a
            className="text-[12px] md:text-[18px] font-extrabold"
            href="tel:+18472207472"
          >
            {" "}
            +1 (847) 220-7472{" "}
          </a>
          <div className="text-[11px] font-extrabold md:text-[18px]">
            <FaHouseUser className="text-2xl" />
          </div>
        </div>
        <p className="bg-[#000] text-white text-[18px] text-center px-5 font-bold lg:text-[30px] lg:tracking-widest">
          GET $25 OFF YOUR FIRST CLEANING!{" "}
        </p>
        <div className="sticky top-0 flex justify-between items-center px-[5%] bg-[#813ec9f3] h-[80px] lg:h-[100px]">
          <Link href="/" className=" Logo ml- ">
            {" "}
            <Image
              className=""
              src={Gailyminds}
              alt="LOGO"
              width={500}
              height={500}
            />
          </Link>
          <div className="md:hidden" onClick={toggleMenu}>
            {!navOpen ? (
              <GiHamburgerMenu className="text-3xl text-white" />
            ) : (
              <FaTimes className="text-3xl text-white" />
            )}
          </div>
          <div className=" hidden md:flex gap-[10px] text-[14px] text-white lg:gap-[25px] lg:text-[18px] ">
            <Link href="/cleaning-services">
              <p className="lg:hover:text-xl">Cleaning Services</p>
            </Link>

            <Link href="/cleaning-process">
              <p className="lg:hover:text-xl">Our Cleaning Process</p>
            </Link>
            <Link href="/why-us">
              <p className="lg:hover:text-xl">Why Hire Us</p>
            </Link>
            <Link href="/aboutUs">
              <p className="lg:hover:text-xl">About Us</p>
            </Link>
            <Link href="/hiring">
              <p className="lg:hover:text-xl">We&apos;re Hiring</p>
            </Link>
            <Link href="/faq">
              <p className="lg:hover:text-xl">FAQ</p>
            </Link>
          </div>
        </div>
        {navOpen && (
          <div className="fixed top-0 w-[87%] h-full bg-white z-50">
            <Link href="/">
              {" "}
              <Image
                className="Logo2 ml-[-13%] mt-[7%]"
                src={TheGailyLogo}
                alt=""
                width={500}
                height={500}
                onClick={closeNav}
              />
            </Link>
            <Accordion className=" md:hidden border-none flex flex-col gap-[15px] mt-[10px] px-[5%]">
              <Accordion.Panel>
                <Accordion.Title className="text-[#823ec9] text-[18px] border-none">
                  Cleaning Services
                </Accordion.Title>

                <Accordion.Content>
                  <ul className="flex flex-col ml-[6%] gap-5 font-light text-[#823ec9]">
                    <li onClick={closeNav}>
                      <Link href="/cleaning-services">Apartment Cleaning</Link>
                    </li>
                    <li onClick={closeNav}>
                      {" "}
                      <Link href="/cleaning-services">House Cleaning</Link>
                    </li>
                    <li onClick={closeNav}>
                      <Link href="/cleaning-services">Detailed Cleaning </Link>
                    </li>
                    <li onClick={closeNav}>
                      {" "}
                      <Link href="/cleaning-services">Holiday Cleaning </Link>
                    </li>
                  </ul>
                </Accordion.Content>
              </Accordion.Panel>
              <p
                onClick={closeNav}
                className="ml-[%] text-[18px] mt-[%] font-medium text-[#823ec9]"
              >
                <Link href="/cleaning-process">Our Cleaning Process</Link>
              </p>
              {/* <Accordion.Panel>
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
              </Accordion.Panel> */}
              <p
                onClick={closeNav}
                className="ml-[%] text-[18px] mt-[%] font-medium text-[#823ec9]"
              >
                <Link href="/why-us">Why Hire Us </Link>
              </p>
              <p
                onClick={closeNav}
                className="ml-[%] text-[18px] mt-[%] font-medium text-[#823ec9]"
              >
                <Link href="/aboutUs">About Us </Link>
              </p>
            </Accordion>
            <p
              onClick={closeNav}
              className="ml-[5%] text-[18px] mt-[8%] font-medium text-[#823ec9]"
            >
              <Link href="/hiring">We&apos;re Hiring </Link>
            </p>

            <p
              onClick={closeNav}
              className="ml-[5%] text-[18px] mt-[8%] font-medium text-[#823ec9]"
            >
              <Link href="/faq">FAQ</Link>
            </p>

            <button
              onClick={openModal}
              className="ml-[5%] mt-[9%] text-[20px] italic text-[#5f2b96] underline"
            >
              Request an Estimate
            </button>

            <div className="flex text-[#5f2b96] gap-[5%] items-center ml-[5%] mt-[5%] underline text-[20px] italic ">
              {/* <FaPhoneVolume /> */}
              <a href="tel:+18472207472">
                <p>Contact Us</p>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* <Estimate showModal={showModal} closeModal={closeModal} />
       */}
      <Estimate showModal={showModal} closeModal={closeModal} />
    </>
  );
};

export default Header;
