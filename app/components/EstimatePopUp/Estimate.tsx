import React from "react";
import Modal from "../Modal/Modal";
import { useState } from "react";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdOutlinePets } from "react-icons/md";
import { IoBedSharp } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import "./estimate.css";

interface EstimateProps {
  showModal: boolean;
  closeModal: any;
}

const Estimate: React.FC<EstimateProps> = ({ showModal, closeModal }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    numberOfPets: "",
    bedrooms: "",
    fullBathrooms: "",
    halfBathrooms: "",
    rooms: {
      dining: false,
      kitchen: false,
      livingRoom: false,
      familyRoom: false,
      laundry: false,
      utilityRoom: false,
      den: false,
      loft: false,
      basement: false,
    },
  });

  const handleChange = (e: {
    target: { name: any; value: any; type: any; checked: any };
  }) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        rooms: {
          ...formData.rooms,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Form data submitted successfully:", result);
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <div>
      {showModal && (
        <Modal>
          <form
            className="estimate relative  text-black bg-white w-full h-[94%] mx-[5%] rounded-[5px] overflow-auto"
            onSubmit={handleSubmit}
          >
            <div className="estimate-bg flex flex-col gap-[15px] py-[10%] px-[5%]">
              <FaTimes
                onClick={closeModal}
                className="text-[#823ec9] absolute right-[3%] top-[2%] text-2xl"
              />
              <Image
                className="Logo2 mb-[7%] mx-auto"
                src="/the_gaily_logo.png "
                alt=""
                width={500}
                height={500}
                // onClick={closeNav}
              />
              <div className="flex items-center gap-[10px]">
                {/* <label>First Name:</label> */}
                <FaUser className="text-2xl text-[#823ec9]" />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="h-[35px] w-full focus:border-none focus:outline-none"
                />
              </div>
              <div className="flex items-center gap-[10px]">
                {/* <label>Last Name:</label> */}
                <FaUserAlt className="text-2xl text-[#823ec9]" />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="h-[35px] w-full focus:border-none focus:outline-none"
                />
              </div>
              <div className="flex items-center gap-[10px]">
                {/* <label>Email:</label> */}
                <MdEmail className="text-2xl text-[#823ec9]" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="h-[35px] w-full focus:border-none focus:outline-none"
                />
              </div>
              <div className="flex items-center gap-[10px]">
                {/* <label>Phone Number:</label> */}
                <BsFillTelephoneFill className="text-2xl text-[#823ec9]" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Telephone"
                  className="h-[35px] w-full focus:border-none focus:outline-none"
                />
              </div>
              <div className="flex items-center gap-[10px]">
                {/* <label>Number of Pets:</label> */}
                <MdOutlinePets className="text-2xl text-[#823ec9]" />
                <input
                  type="number"
                  name="numberOfPets"
                  value={formData.numberOfPets}
                  onChange={handleChange}
                  placeholder="Number of pets"
                  className="h-[35px] w-full focus:border-none focus:outline-none"
                />
              </div>
              <div className="flex items-center gap-[10px]">
                {/* <label>Bedrooms:</label> */}
                <IoBedSharp className="text-2xl text-[#823ec9]" />
                <input
                  type="number"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  placeholder="How many bedrooms"
                  className="h-[35px] w-full focus:border-none focus:outline-none"
                />
              </div>
              <div>
                <label>Full Bathrooms:</label>
                <input
                  type="number"
                  name="fullBathrooms"
                  value={formData.fullBathrooms}
                  onChange={handleChange}
                  placeholder="Number of full bathrooms"
                  className="focus:border-none focus:outline-none h-[35px] w-full"
                />
              </div>
              <div>
                <label>Half Bathrooms:</label>
                <input
                  type="number"
                  name="halfBathrooms"
                  value={formData.halfBathrooms}
                  onChange={handleChange}
                  placeholder="Number of half bathrooms"
                  className="focus:border-none focus:outline-none h-[35px] w-full"
                />
              </div>

              <p>Others:</p>

              <div className="grid grid-cols-2 gap-[10px]">
                <div>
                  <label>Dining Room:</label>
                  <input
                    type="checkbox"
                    name="dining"
                    checked={formData.rooms.dining}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Kitchen:</label>
                  <input
                    type="checkbox"
                    name="kitchen"
                    checked={formData.rooms.kitchen}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Living Room:</label>
                  <input
                    type="checkbox"
                    name="livingRoom"
                    checked={formData.rooms.livingRoom}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Family Room:</label>
                  <input
                    type="checkbox"
                    name="familyRoom"
                    checked={formData.rooms.familyRoom}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Laundry:</label>
                  <input
                    type="checkbox"
                    name="laundry"
                    checked={formData.rooms.laundry}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Utility Room:</label>
                  <input
                    type="checkbox"
                    name="utilityRoom"
                    checked={formData.rooms.utilityRoom}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Den:</label>
                  <input
                    type="checkbox"
                    name="den"
                    checked={formData.rooms.den}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Loft:</label>
                  <input
                    type="checkbox"
                    name="loft"
                    checked={formData.rooms.loft}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Basement:</label>
                  <input
                    type="checkbox"
                    name="basement"
                    checked={formData.rooms.basement}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#823ec9] text-white w-[50%] mx-auto p-[2%] hover:bg-white hover:text-[#823ec9] hover:border hover:border-[#823ec9]"
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

export default Estimate;
