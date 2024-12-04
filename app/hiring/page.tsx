"use client";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Modal from "../components/Modal/Modal";
import { Player } from "@lottiefiles/react-lottie-player";

const Hiring = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    // workedWithCleaningBusiness: false,
    partTime: false,
    fullTime: false,
    workedWithCB: "",
    hasCar: "",
    hasInsurance: "",
  });

  const [showThankYou, setShowThankYou] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: {
    target: { name: any; value: any; type: any; checked: any };
  }) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    // const templateParams = {
    //   firstName: formData.firstName,
    //   lastName: formData.lastName,
    //   email: formData.email,
    //   phone: formData.phone,
    // workedWithCleaningBusiness: formData.workedWithCleaningBusiness
    //   ? "Yes"
    //   : "No",
    //   partTime: formData.partTime ? "Yes" : "No",
    //   fullTime: formData.fullTime ? "Yes" : "No",
    //   workedWithCB: formData.workedWithCB === "true" ? "Yes" : "No",
    //   hasCar: formData.hasCar === "true" ? "Yes" : "No",
    //   hasInsurance: formData.hasInsurance === "true" ? "Yes" : "No",
    // };

    // emailjs
    //   .send(
    //     "service_qay4sdq",
    //     "template_5ot0m66",
    //     templateParams,
    //     "prU2mq4C_eMpPOd3_"
    //   )
    //   .then(
    //     (response) => {
    //       console.log("SUCCESS!", response.status, response.text);
    //       setIsLoading(false);
    //       setShowThankYou(true);
    //     },
    //     (error) => {
    //       console.log("FAILED...", error);
    //     }
    //   );
  };

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.phone &&
    formData.workedWithCB &&
    formData.hasCar &&
    formData.hasInsurance;

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      // workedWithCleaningBusiness: false,
      partTime: false,
      fullTime: false,
      hasCar: "",
      workedWithCB: "",
      hasInsurance: "",
    });
  };

  const confirmClose = () => {
    setShowThankYou(false);
    resetForm();
  };

  return (
    <div>
      <h1 className="text-[#823ec9] mt-[10%] text-center text-[30px] font-bold lg:text-[45px] lg:mt-[3%]">
        Join Our Team and Make a Difference!
      </h1>
      <p className="mt-3 text-black text-center mx-4 lg:text-[20px] lg:w-[60%] lg:mx-auto">
        Looking for a fun place to work, with a flexible schedule and
        competitive pay? Then come live the Gaily Maids™ life!
      </p>{" "}
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="max-w-md mx-auto mt-5 p-6 bg-white rounded shadow-md"
      >
        <input
          type="hidden"
          name="access_key"
          value="0210082d-70a1-44ad-b600-b81aaef8ee97"
        />

        {/* First Name */}
        <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            required
            className="text-black w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            required
            className="text-black w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            required
            className="text-black w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Part Time / Full Time */}
        <div className="flex gap-[20px]">
          <div className="my-4 flex gap-[10px] items-center">
            <label className="text-gray-700">Part Time</label>
            <input type="checkbox" name="partTime" />
          </div>
          <div className="my-4 flex gap-[10px] items-center">
            <label className="text-gray-700">Full Time</label>
            <input type="checkbox" name="fullTime" />
          </div>
        </div>

        {/* Worked with a Cleaning Business */}
        <div className="mb-4">
          <label className="block text-gray-700">
            Worked with a cleaning business before?
          </label>
          <div className="flex items-center">
            <label className="mr-4 text-black">
              <input type="radio" name="workedWithCB" value="true" /> Yes
            </label>
            <label className="text-black">
              <input type="radio" name="workedWithCB" value="false" /> No
            </label>
          </div>
        </div>

        {/* Car Ownership */}
        <div className="mb-4">
          <label className="block text-gray-700">Do you have a car?</label>
          <div className="flex items-center">
            <label className="mr-4 text-black">
              <input type="radio" name="hasCar" value="true" /> Yes
            </label>
            <label className="text-black">
              <input type="radio" name="hasCar" value="false" /> No
            </label>
          </div>
        </div>

        {/* Insurance */}
        <div className="mb-4">
          <label className="block text-gray-700">Do you have insurance?</label>
          <div className="flex items-center">
            <label className="mr-4 text-black">
              <input type="radio" name="hasInsurance" value="true" /> Yes
            </label>
            <label className="text-black">
              <input type="radio" name="hasInsurance" value="false" /> No
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#823ec9] text-white w-[50%] mx-auto p-[2%] lg:w-[30%] lg:text-[20px] lg:p-[1%] hover:bg-white hover:text-[#823ec9] hover:border hover:border-[#823ec9]"
        >
          Submit
        </button>
      </form>
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
            <h2 className="text-3xl font-bold mb-4">Thank You for Applying!</h2>
            <p>
              We appreciate your interest in joining our team. Your application
              has been successfully submitted and is now under review.
            </p>
            <Player
              autoplay
              loop
              src="https://lottie.host/0e63735e-34b6-41e2-85e9-a2f71785627a/ApS5VmH7TG.json"
              style={{ height: "100px", width: "100px" }}
            ></Player>
            <p>
              Thank you for considering a career with us. We will be in touch
              soon!
            </p>
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

export default Hiring;
