"use client";
import React, { useState } from "react";
import { Accordion } from "flowbite-react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import Marquee from "../marquee/Marquee";
import "./header.css";

import Estimate from "../EstimatePopUp/Estimate";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const toggleMenu = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  const openModal = () => {
    setShowModal(true);
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
              className=""
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
          <div className="hidden md:flex gap-[10px] text-[14px] text-white lg:gap-[25px] lg:text-[20px] ">
            <Link href="/cleaningservices">
              <p className="lg:hover:underline">Cleaning Services</p>
            </Link>
            <Link href="">
              <p className="lg:hover:underline">Our Cleaning Process</p>
            </Link>
            <Link href="">
              <p className="lg:hover:underline">Why Hire Us</p>
            </Link>
            <Link href="">
              <p className="lg:hover:underline">About Us</p>
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
              <button
                onClick={openModal}
                className="ml-[5%] mt-[15%] text-[20px] italic text-[#5f2b96] underline"
              >
                Request an Estimate
              </button>
            </Link>
            <div className="flex gap-[5%] items-center ml-[5%] mt-[5%] underline text-[20px] italic text-[#361f4d]">
              {/* <FaPhoneVolume /> */}
              <span>Contact Us</span>
            </div>
          </div>
        )}
      </header>
      <Estimate showModal={showModal} closeModal={closeModal}/>
    </>
  );
};

export default Header;
