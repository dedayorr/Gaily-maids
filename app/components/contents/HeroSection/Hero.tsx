"use client";
import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import Modal from "../../Modal/Modal";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { IoBedSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import emailjs from "emailjs-com";
import { Player } from "@lottiefiles/react-lottie-player";

const Hero = () => {
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
    dining: false,
    kitchen: false,
    familyRoom: false,
    laundry: false,
    livingRoom: false,
    den: false,
    utilityRoom: false,
    loft: false,
    basement: false,
    hallway: false,
    stairs: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkFormValidity = () => {
      const isValid = Object.values(formData).every(
        (value) => typeof value === "boolean" || value.trim() !== ""
      );
      setIsFormValid(isValid);
    };
    checkFormValidity();
  }, [formData]);

  const handleChange = (e: {
    target: { name: any; value: any; type: string; checked: boolean };
  }) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

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
      dining: formData.dining ? "Yes" : "No",
      kitchen: formData.kitchen ? "Yes" : "No",
      familyRoom: formData.familyRoom ? "Yes" : "No",
      laundry: formData.laundry ? "Yes" : "No",
      livingRoom: formData.livingRoom ? "Yes" : "No",
      hallway: formData.hallway ? "Yes" : "No",
      stairs: formData.stairs ? "Yes" : "No",
      den: formData.den ? "Yes" : "No",
      utilityRoom: formData.utilityRoom ? "Yes" : "No",
      loft: formData.loft ? "Yes" : "No",
      basement: formData.basement ? "Yes" : "No",
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
          setIsLoading(false);
          setShowThankYou(true);
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

  const confirmClose = () => {
    setShowThankYou(false);
    closeModal();
  };

  return (
    <div className={`${styles.Hero} `}>
      {" "}
      <div className=" mt-[%] py-[6%] text-white tracking-widest px-[5%] flex flex-col gap-[20px] md:py-0 lg:mt-0 lg:py-0 lg:gap-[25px]">
        <h1
          className={`pt-[25%] text-[37px] font-extrabold md:pt-[3%] md:text-[47px] lg:text-[70px] lg:w-[80%] lg:mx-auto lg:text-center lg:pt-[8%] `}
        >
          Refresh Your Space with{" "}
          <span className="text-[#823ec9]">Sparkling Clean</span> Solution
        </h1>
        <p className="md:text-[24px] text-justify lg:text-center text-[#773bb8] bg-[#ffffffa0] p-[1%] lg:w-[80%] lg:mx-auto ">
          Crafting a spotless legacy in your home or office is not just our
          mission, it&apos;s our passion.
        </p>
        <button
          onClick={openModal}
          className="bg-[#823ec9] w-[60%] py-[4%] hover:bg-white hover:text-[#823ec9] md:text-[25px] md:w-[45%] lg:mx-auto lg:w-[25%] lg:py-[1%]"
        >
          Request an Estimate
        </button>
      </div>
      {/* ======Estimate Modal====== */}
      {showModal && !showThankYou && (
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
                  <input
                    type="checkbox"
                    name="dining"
                    checked={formData.dining}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Laundry:</label>
                  <input
                    type="checkbox"
                    name="laundry"
                    checked={formData.laundry}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Family Room:</label>
                  <input
                    type="checkbox"
                    name="familyRoom"
                    checked={formData.familyRoom}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Kitchen:</label>
                  <input
                    type="checkbox"
                    name="kitchen"
                    checked={formData.kitchen}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Living Room:</label>
                  <input
                    type="checkbox"
                    name="livingRoom"
                    checked={formData.livingRoom}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Stairs:</label>
                  <input
                    type="checkbox"
                    name="stairs"
                    checked={formData.stairs}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Utility Room:</label>
                  <input
                    type="checkbox"
                    name="utilityRoom"
                    checked={formData.utilityRoom}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Loft:</label>
                  <input
                    type="checkbox"
                    name="loft"
                    checked={formData.loft}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Basement:</label>
                  <input
                    type="checkbox"
                    name="basement"
                    checked={formData.basement}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Den:</label>
                  <input
                    type="checkbox"
                    name="den"
                    checked={formData.den}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Hallways:</label>
                  <input
                    type="checkbox"
                    name="hallway"
                    checked={formData.hallway}
                    onChange={handleChange}
                  />
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
      {isLoading && (
        <Modal>
          <div className="flex justify-center items-center h-full">
            <div className="loader"></div>
          </div>
        </Modal>
      )}
      {showThankYou && (
        <Modal>
          <div className="thank-you-card animate-fadeIn mx-[5%] flex flex-col justify-center items-center text-center text-white bg-[#823ec9] p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
            <p>
              Thank you for reaching out to us! Your request for an estimate has
              been successfully submitted. Our team will review the details and
              get back to you shortly.
            </p>
            <Player
              autoplay
              loop
              src="https://lottie.host/0e63735e-34b6-41e2-85e9-a2f71785627a/ApS5VmH7TG.json"
              style={{ height: "100px", width: "100px" }}
            ></Player>
            <p>We look forward to helping you with your home cleaning needs!</p>
            <button
              className="mt-4 bg-white text-[#823ec9] px-4 py-2 rounded hover:bg-gray-100"
              onClick={confirmClose}
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Hero;
