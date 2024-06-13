"use client";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const Hiring = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    workedWithCleaningBusiness: false,
    hasCar: "",
    hasInsurance: "",
  });

  // const [isFormValid, setIsFormValid] = useState(false);

  // const handleChange = (e: { target: { name: any; value: any } }) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

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

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      workedWithCleaningBusiness: formData.workedWithCleaningBusiness
        ? "Yes"
        : "No",
      hasCar: formData.hasCar === "true" ? "Yes" : "No",
      hasInsurance: formData.hasInsurance === "true" ? "Yes" : "No",
    };

    emailjs
      .send(
        "service_qay4sdq",
        "template_5ot0m66",
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

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.phone &&
    formData.hasCar &&
    formData.hasInsurance;

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
        className="max-w-md mx-auto mt-5 p-6 bg-white rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="text-black w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="text-black w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="text-black w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Have you worked with a cleaning business before?
          </label>
          <input
            type="checkbox"
            name="workedWithCleaningBusiness"
            // checked={formData.workedWithCleaningBusiness}
            onChange={handleChange}
            className="mt-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Do you have a car?</label>
          <div className="flex items-center">
            <label className="mr-4">
              <input
                type="radio"
                name="hasCar"
                value="true"
                // checked={formData.hasCar === 'true'}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="hasCar"
                value="false"
                // checked={formData.hasCar === 'false'}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Do you have insurance?</label>
          <div className="flex items-center">
            <label className="mr-4">
              <input
                type="radio"
                name="hasInsurance"
                value="true"
                // checked={formData.hasInsurance === 'true'}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="hasInsurance"
                value="false"
                // checked={formData.hasInsurance === 'false'}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
        <button
          type="submit"
          disabled={!isFormValid}
          className={`bg-[#823ec9] text-white w-[50%] mx-auto p-[2%] lg:w-[30%] lg:text-[20px] lg:p-[1%] hover:bg-white hover:text-[#823ec9] hover:border hover:border-[#823ec9]  ${
            !isFormValid ? "bg-[#828080] opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Hiring;
