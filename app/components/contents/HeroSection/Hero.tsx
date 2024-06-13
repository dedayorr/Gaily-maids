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
        'service_og1ae8q', 
        'template_vothj2g', 
        templateParams,
        'prU2mq4C_eMpPOd3_'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
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
    <div className={`${styles.Hero} `}>
      {" "}
      <div className=" mt-[%] py-[6%] text-white tracking-widest px-[5%] flex flex-col gap-[20px] md:py-0 md:mt-[8%] lg:mt-0 lg:py-0 lg:gap-[25px]">
        <h1
          className={`pt-[25%] text-[37px] font-extrabold md:text-[47px] lg:text-[70px] lg:w-[80%] lg:mx-auto lg:text-center lg:pt-[8%] `}
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
          className="bg-[#823ec9] w-[60%] py-[4%] hover:bg-white hover:text-[#823ec9] md:text-[25px] lg:mx-auto lg:w-[25%] lg:rounded-[10px] lg:py-[1%]"
        >
          Request an Estimate
        </button>
      </div>
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
                <label>Kitchen:</label>
                <input type="checkbox" name="kitchen" />
              </div>
              <div>
                <label>Family Room:</label>
                <input type="checkbox" name="familyRoom" />
              </div>
              <div>
                <label>Laundry:</label>
                <input type="checkbox" name="laundry" />
              </div>
              <div>
                <label>Living Room:</label>
                <input type="checkbox" name="livingRoom" />
              </div>

              <div>
                <label>Den:</label>
                <input type="checkbox" name="den" />
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

export default Hero;
