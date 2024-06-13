"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./cleaningprocess.module.css";
import Modal from "../components/Modal/Modal";
import { FaTimes } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { IoBedSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import emailjs from "emailjs-com";

const CleaningProcess = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    houseAddress: "",
    email: "",
    phone: "",
    numberOfPets: "",
    bedrooms: "",
    fullBathrooms: "",
    halfBathrooms: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const checkFormValidity = () => {
      const isValid = Object.values(formData).every(
        (value) => value.trim() !== ""
      );
      setIsFormValid(isValid);
    };
    checkFormValidity();
  }, [formData]);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      houseAddress: formData.houseAddress,
      email: formData.email,
      phone: formData.phone,
      numberOfPets: formData.numberOfPets,
      bedrooms: formData.bedrooms,
      fullBathrooms: formData.fullBathrooms,
      halfBathrooms: formData.halfBathrooms,
    };

    emailjs
      .send(
        "service_og1ae8q",
        "template_vothj2g",
        templateParams,
        "prU2mq4C_eMpPOd3_"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="text-black mt-[80px] flex flex-col gap-[20px]">
      {" "}
      <h1 className="mx-[5%] text-[30px] font-bold leading-8 text-[#823ec9] lg:text-[45px]">
        Our Home Cleaning Process
      </h1>
      <h2 className=" mx-[5%] font-light text-[28px] lg:text-[35px] lg:tracking-widest">
        Full Service House Cleaning
      </h2>
      <div
        className={`mx-[5%] lg:flex-row-reverse lg:gap-[10%] lg:mx-[10%] lg:flex lg:justify-between`}
      >
        <p className="mb-[5%] leading-8 lg:leading-[180%] text-justify lg:text-[22px] lg:w-[8]">
          When you&apos;re balancing a busy family life, long hours at the
          office, and other important aspects of your weekly routine, finding
          time to keep your house in order can be difficult. Even though life
          gets busy, coming home should never be a chore and with Gaily Maids,
          it won&apos;t be. We understand your home is your space to unwind and
          feel safe and secure. Our professional house cleaning services are
          designed to keep your home looking its best, based on your cleaning
          preferences and desired frequency. Learn about our room by room
          cleaning process and how our professional house cleaning services can
          help restore health and balance to your life.
        </p>
        <Image
          className={`${styles.process}`}
          src="/cleanprocess.png"
          alt=""
          width={500}
          height={500}
        />
      </div>
      {/* ====For large screen ==== */}
      <div className=" mt-[10%] lg:flex justify-between hidden">
        <Image
          className={`${styles.processes}`}
          src="/process-one.png"
          alt=""
          width={100}
          height={100}
        />

        <ul className="list-disc text-[50px] font-thin">
          <li className="">Living Room Cleaning</li>
          <li className="">Bathroom Cleaning</li>
          <li className="">Bedroom Cleaning</li>
          <li className="">Kitchen Cleaning</li>
          <li className="">Laundry Room Cleaning</li>
          <li className="">Dining Room Cleaning</li>
        </ul>

        <Image
          className={`${styles.processes}`}
          src="/process-two.png"
          alt=""
          width={100}
          height={100}
        />
      </div>
      {/* =====For mobile screen==== */}
      <div className="lg:hidden">
        <ul className="mx-[5%] list-disc lg:block flex flex-col gap-[20px] italic text-white bg-[#823ec9] p-[10%]">
          <li className="">Living Room Cleaning</li>
          <li className="">Bathroom Cleaning</li>
          <li className="">Bedroom Cleaning</li>
          <li className="">Kitchen Cleaning</li>
          <li className="">Laundry Room Cleaning</li>
          <li className="">Dining Room Cleaning</li>
        </ul>

        <div className={`${styles.processBG} relative  `}>
          <div
            className={` text-[24px] font-bold flex flex-col gap-[4%] p-2 pt-[10%] text-white  absolute w-[100%] right-0 left-0 bg-[#00000094] h-[550px] `}
          >
            <p>Dust baseboards, light fixture, furniture, sills.</p>
            Vacuum/mop all floors, carpets, and stairs.
            <p>Clean showers, tubs, toilets and sinks.</p>
            <p>Clean mirrors, glass, counters, and tile.</p>
            <p>Dust all furniture and furnishings and much more!.</p>
          </div>
        </div>
      </div>
      <button
        onClick={openModal}
        className="bg-[#823ec9] text-white mx-auto flex my-[10%] p-[3%] lg:p-[1%] lg:my-0 rounded-[6px] hover:bg-[#fff] hover:text-[#823ec9] lg:text-[20px]"
      >
        Request an Estimate
      </button>
      {/* ======Estimate Modal====== */}
      {showModal && (
      <Modal>
      <form
        className="estimate relative  text-black bg-white w-full h-[94%] mx-[5%] rounded-[5px] overflow-auto lg:w-[60%] lg:rounded-[15px]"
        onSubmit={handleSubmit}
      >
        <div className="estimate-bg flex flex-col gap-[15px] py-[10%] px-[5%] lg:py-[6%]">
          <FaTimes
            onClick={closeModal}
            className="text-[#823ec9] absolute right-[3%] top-[2%] text-2xl lg:text-3xl"
          />
          <Image
            className="logo-estimate mb-[7%] mx-auto lg:mb-[5%]"
            src="/the_gaily_logo.png "
            alt=""
            width={500}
            height={500}
          />
          <div className="lg:grid grid-cols-2 flex flex-col gap-[25px]">
            <div className="flex items-center gap-[10px]">
              <FaUser className="text-2xl lg:text-3xl text-[#823ec9]" />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="h-[35px] lg:h-[45px] w-full focus:border-none focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-[10px]">
              <FaUserAlt className="text-2xl lg:text-3xl text-[#823ec9]" />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="h-[35px] lg:h-[45px] w-full focus:border-none focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-[10px]">
              <HiHome className="text-2xl lg:text-3xl text-[#823ec9]" />
              <input
                type="text"
                name="houseAddress"
                placeholder="House Address"
                value={formData.houseAddress}
                onChange={handleChange}
                className="h-[35px] lg:h-[45px] w-full focus:border-none focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-[10px]">
              <MdEmail className="text-2xl lg:text-3xl text-[#823ec9]" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="h-[35px] lg:h-[45px] w-full focus:border-none focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-[10px]">
              <BsFillTelephoneFill className="text-2xl lg:text-3xl text-[#823ec9]" />
              <input
                type="tel"
                name="phone"
                placeholder="Telephone"
                value={formData.phone}
                onChange={handleChange}
                className="h-[35px] lg:h-[45px] w-full focus:border-none focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-[10px]">
              <MdOutlinePets className="text-2xl lg:text-3xl text-[#823ec9]" />
              <input
                type="number"
                name="numberOfPets"
                placeholder="Number of pets"
                value={formData.numberOfPets}
                onChange={handleChange}
                className="h-[35px] lg:h-[45px] w-full focus:border-none focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-[10px]">
              <IoBedSharp className="text-2xl lg:text-3xl text-[#823ec9]" />
              <input
                type="number"
                name="bedrooms"
                placeholder="How many bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                className="h-[35px] lg:h-[45px] w-full focus:border-none focus:outline-none"
              />
            </div>
          </div>
          <div className="lg:my-[3%] flex flex-col gap-[15px] md:flex md:flex-row md:gap-[25px] ">
            {" "}
            <div className="lg:flex lg:w-full">
              <label>Full Bathrooms:</label>
              <input
                type="number"
                name="fullBathrooms"
                placeholder="Number of full bathrooms"
                value={formData.fullBathrooms}
                onChange={handleChange}
                className="focus:border-none focus:outline-none h-[35px] lg:h-[45px] w-full "
              />
            </div>
            <div className="lg:flex lg:w-full">
              <label>Half Bathrooms:</label>
              <input
                type="number"
                name="halfBathrooms"
                placeholder="Number of half bathrooms"
                value={formData.halfBathrooms}
                onChange={handleChange}
                className="focus:border-none focus:outline-none h-[35px] lg:h-[45px] w-full"
              />
            </div>
          </div>

          <p>Others:</p>

          <div className="grid grid-cols-2 gap-[10px]">
            <div>
              <label>Dining Room:</label>
              <input type="checkbox" name="dining" />
            </div>
            <div>
              <label>Laundry:</label>
              <input type="checkbox" name="kitchen" />
            </div>
            <div>
              <label>Family Room:</label>
              <input type="checkbox" name="familyRoom" />
            </div>
            <div>
              <label>Kitchen:</label>
              <input type="checkbox" name="laundry" />
            </div>
            <div>
              <label>Living Room:</label>
              <input type="checkbox" name="livingRoom" />
            </div>
            <div>
              <label>Stairs:</label>
              <input type="checkbox" name="loft" />
            </div>
            <div>
              <label>Utility Room:</label>
              <input type="checkbox" name="utilityRoom" />
            </div>
            <div>
              <label>Loft:</label>
              <input type="checkbox" name="loft" />
            </div>
            <div>
              <label>Basement:</label>
              <input type="checkbox" name="basement" />
            </div>
            <div>
              <label>Den:</label>
              <input type="checkbox" name="den" />
            </div>
            <div>
              <label>Hallways:</label>
              <input type="checkbox" name="loft" />
            </div>
          </div>
          <button
            type="submit"
            disabled={!isFormValid}
            className={`bg-[#823ec9] text-white w-[50%] mx-auto p-[2%] lg:w-[30%] lg:text-[20px] lg:p-[1%] hover:bg-white hover:text-[#823ec9] hover:border hover:border-[#823ec9]  ${
              !isFormValid
                ? "bg-[#828080] opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            Submit
          </button>
        </div>
      </form>
    </Modal>
      )}
    </div>
  );
};

export default CleaningProcess;

//Dust baseboards, light fixture, furniture, sills
