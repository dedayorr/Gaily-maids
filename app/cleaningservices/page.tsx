"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./cleaningservices.module.css";
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
import { Player } from "@lottiefiles/react-lottie-player";

const CleaningServicesPage = () => {
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
    <>
      <div className="text-black px-[5%] mt-[60px] flex flex-col gap-[25px] lg:flex lg:mt-[80px]">
        {" "}
        <h1 className="text-[30px] font-bold leading-8 text-[#823ec9] lg:text-[45px]">
          Our Home Cleaning Services
        </h1>{" "}
        <h2 className="font-light text-[28px] lg:text-[35px] lg:tracking-widest">
          Cleaning You Can See & Feel
        </h2>
        <div className="lg:flex">
          {" "}
          <div className={`${styles.imageContainer} flex-1`}>
            {" "}
            <Image
              className={`${styles.image}`}
              src="/process-image.png"
              alt=""
              width={500}
              height={200}
            />
          </div>
          <div className="leading-8 lg:leading-[200%] text-justify flex-1 lg:text-[28px]">
            <p>
              {" "}
              Our cleaning services go beyond the basic services and provide you
              with a comprehensive clean that will reenergize your home and
              enhance your life. From everyday housekeeping to routine cleanings
              and seasonal services, our professional house cleaners can provide
              you with an unrivaled experience.
            </p>
            <p>
              {" "}
              With our &quot;Worry Free Guarantee&quot;, you can be sure your
              house will be cleaned the way you want everytime.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />

      <hr className="hidden lg:block h-[20px] text-black border-t-4 border-gray-400 my-9 mx-[5%]" />

      <div className="text-black px-[5%] grid grid-cols-  gap-[40px] lg:gap-[40px] lg:grid-cols-3">
        <div className="flex flex-col gap-[15px]">
          <p className="lg:text-[24px] font-semibold">Apartment Cleaning</p>
          <Image
            className={`${styles.image2}`}
            src="/apartment-service.png"
            alt=""
            width={500}
            height={100}
          />
          <p className="leading-8 tracking-wide text-justify">
            Apartment cleaning is an essential aspect of maintaining a healthy
            and comfortable living space. Whether you&apos;re a busy
            professional, a student, or a family, keeping your apartment clean
            ensures not only an aesthetically pleasing environment but also
            contributes to your overall well-being.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-[15px]">
          <p className="lg:text-[24px] font-semibold">House Cleaning</p>
          <Image
            className={`${styles.image2}`}
            src="/house-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
          <p className="leading-8 tracking-wide text-justify">
            House cleaning is a vital practice that goes beyond mere aesthetics.
            It encompasses a range of tasks and routines designed to maintain a
            home&apos;s cleanliness, orderliness, and functionality. Regular and
            thorough cleaning not only enhances the appearance of your living
            space but also contributes significantly to your health and
            well-being.
          </p>
        </div>
        {/* <div className="flex flex-col gap-[15px]">
          <p className="">Holiday Cleaning</p>
          <Image
            className={`${styles.image2}`}
            src="/holiday-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
        </div> */}

        {/* <div className="flex flex-col gap-[15px]">
          <p className="lg:text-[24px] font-semibold">Detailed Cleaning</p>
          <Image
            className={`${styles.image2}`}
            src="/detailed-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
          <p className="leading-8 tracking-wide text-justify">
            Detailed cleaning, often referred to as deep cleaning, is an
            intensive and thorough cleaning process that goes beyond regular
            housekeeping tasks. Unlike routine cleaning, which focuses on
            maintaining general cleanliness and order, detailed cleaning targets
            hard-to-reach areas, stubborn dirt, and hidden grime. This type of
            cleaning is essential for maintaining a truly clean and healthy
            living environment.
          </p>
        </div> */}

        <div className="flex flex-col gap-[15px] ">
          <p className="lg:text-[24px] font-semibold">
            Kitchen appliance Cleaning
          </p>
          <Image
            className={`${styles.image2}`}
            src="/kitchen-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
          <p className="leading-8 tracking-wide text-justify">
            Kitchen appliance cleaning is a crucial aspect of maintaining a
            hygienic and efficient kitchen. Regular cleaning of appliances such
            as refrigerators, ovens, microwaves, and dishwashers not only
            ensures they operate optimally but also extends their lifespan.
            Clean appliances also contribute to a healthier kitchen environment
            by preventing the buildup of grease, grime, and bacteria.
          </p>
        </div>
        <div className="flex flex-col gap-[15px] lg:">
          <p className="lg:text-[24px] font-semibold">Office Cleaning</p>
          <Image
            className={`${styles.image2}`}
            src="/office-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
          <p className="leading-8 tracking-wide text-justify">
            Office cleaning is a critical aspect of maintaining a productive,
            healthy, and welcoming work environment. A clean office not only
            leaves a positive impression on clients and visitors but also
            enhances employee morale and efficiency. Regular and thorough
            cleaning helps prevent the spread of illnesses, reduces absenteeism,
            and ensures that office equipment functions optimally.
          </p>
        </div>
        <div className="flex flex-col gap-[15px]">
          <p className="lg:text-[24px] font-semibold">Specialty Cleaning</p>
          <Image
            className={`${styles.image2}`}
            src="/specialty-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
          <p className="leading-8 tracking-wide text-justify">
            Specialty cleaning refers to specialized cleaning services that go
            beyond standard cleaning routines to address specific, often more
            challenging, cleaning requirements. These services are designed to
            cater to unique environments, surfaces, or situations that demand
            particular expertise and equipment. Specialty cleaning ensures
            thorough care and maintenance, often necessary for preserving the
            integrity, functionality, and appearance of certain areas or items.
          </p>
        </div>

        <div className="flex flex-col gap-[15px]">
          <p className="lg:text-[24px] font-semibold">Deep Cleaning</p>
          <Image
            className={`${styles.image2}`}
            src="/deep-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
          <p className="leading-8 tracking-wide text-justify">
            Deep cleaning, also known as intensive cleaning or thorough
            cleaning, is a comprehensive and meticulous cleaning process that
            goes beyond regular cleaning routines. It involves cleaning and
            sanitizing all areas of a space, including those that are often
            overlooked during routine cleaning. Deep cleaning is typically
            performed periodically, such as quarterly, biannually, or annually,
            to maintain a high standard of cleanliness and hygiene. This
            thorough cleaning process ensures that dirt, dust, grime, and
            allergens are effectively removed, leaving the space fresh,
            sanitized, and revitalized.
          </p>
        </div>

        <div className="flex flex-col gap-[15px]">
          <p className="lg:text-[24px] font-semibold">Move-in Cleaning</p>
          <Image
            className={`${styles.image2}`}
            src="/movingin-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
          <p className="leading-8 tracking-wide text-justify">
            Move-in cleaning, also known as pre-move-in cleaning, is a
            specialized cleaning service designed to prepare a residential or
            commercial property for new occupants. Whether it&apos;s a newly
            constructed home, a recently vacated apartment, or a commercial
            space, move-in cleaning ensures that the premises are thoroughly
            cleaned and sanitized before the new occupants settle in. This
            comprehensive cleaning process addresses all areas of the property,
            removing dirt, dust, and debris accumulated during construction,
            renovation, or previous occupancy.
          </p>
        </div>
        <div className="flex flex-col gap-[15px]">
          <p className="lg:text-[24px] font-semibold">Move-out Cleaning</p>
          <Image
            className={`${styles.image2}`}
            src="/movingout-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
          <p className="leading-8 tracking-wide text-justify">
            Move-out cleaning, also known as end-of-tenancy cleaning or move-out
            deep cleaning, is a thorough cleaning service performed when tenants
            are moving out of a rental property or homeowners are preparing to
            sell their home. This comprehensive cleaning process ensures that
            the property is left in pristine condition for the next occupants or
            for sale. Move-out cleaning typically involves deep cleaning all
            areas of the property, including living spaces, kitchens, bathrooms,
            and common areas, to remove dirt, grime, and accumulated debris.
          </p>
        </div>
      </div>
      <div className="border-[2px] border-[#26355D] text-[#26355D] mx-[5%] my-[10%] h-[150px] flex flex-col justify-center items-center text-center font-semibold text-[17px] lg:text-[30px]">
        Discover the benefits of a deeply cleaned apartment. Contact us today at
        <span>+1 (872) 235-7202</span>
      </div>
      <button
        onClick={openModal}
        className="bg-[#823ec9] mx-auto flex my-[10%] p-[3%] lg:p-[1%] rounded-[6px] hover:bg-[#fff] hover:text-[#823ec9] lg:text-[20px]"
      >
        Request an Estimate
      </button>

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
              get back to you.
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
    </>
  );
};

export default CleaningServicesPage;
