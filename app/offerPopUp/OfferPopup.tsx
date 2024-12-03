import React from "react";
import Modal from "../components/Modal/Modal";
import Image from "next/image";
import { Form, Input, Button, message } from "antd";
import {
  MailOutlined,
  UserOutlined,
  PhoneOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { FaTimes } from "react-icons/fa";
import emailjs from "@emailjs/browser";

interface OfferPopupProps {
  closeModal: any;
}

const OfferPopup: React.FC<OfferPopupProps> = ({ closeModal }) => {
  const [form] = Form.useForm();

  // const onFinish = (values: any) => {
  //   emailjs
  //     .send(
  //       "service_og1ae8q",
  //       "template_vothj2g",
  //       {
  //         name: values.name,
  //         email: values.email,
  //         phone: values.phone,
  //         message: values.message,
  //         to_email: "gailymaids@gmail.com",
  //       },
  //       "prU2mq4C_eMpPOd3_"
  //     )
  //     .then(
  //       (response) => {
  //         message.success("Email sent successfully!");
  //         form.resetFields();
  //         closeModal();
  //       },
  //       (error) => {
  //         message.error("Failed to send email");
  //         console.error(error);
  //       }
  //     );
  // };
  return (
    <>
      <Modal>
        <div className="relative bg-white text-white w-[90%] rounded-md py-[5%] lg:w-[45%] lg:py-[2%] lg:rounded-xl">
          <FaTimes
            onClick={closeModal}
            className="text-[#823ec9] absolute right-[4%] top-[2%] text-2xl "
          />
          <Image
            className="mx-auto w-[130px]  lg:w-[30%] lg:h-[150px]"
            src="/offerlogo.png"
            height={500}
            width={500}
            alt=""
          />
          <h1 className="text-black text-[17px] font-extrabold text-center mt-3 lg:text-2xl">
            $25 OFF YOUR FIRST CLEANING
          </h1>
          <p className="text-center">
            Enter your details and redeem your offer
          </p>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="mx-5 lg:mx-[10%]"
          >
            {/* Hidden Access Key Field */}
            <input
              type="hidden"
              name="access_key"
              value="0210082d-70a1-44ad-b600-b81aaef8ee97"
            />

            {/* Name Field */}
            <div style={{ marginBottom: "px" }}>
              <label className="text-[#823ec9] text-[16px] ">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full p-2 border rounded h-[35px]"
              />
            </div>

            {/* Email Field */}
            <div style={{ marginBottom: "px" }}>
              <label className="text-[#823ec9] text-[16px] ">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full p-2 border rounded h-[35px]"
              />
            </div>

            {/* Phone Number Field */}
            <div style={{ marginBottom: "" }}>
              <label className="text-[#823ec9] text-[16px] ">
                Phone Number <span className="text-black">(Optional)</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                pattern="[0-9]{10,15}"
                className="w-full p-2 border rounded h-[35px]"
              />
            </div>

            {/* Message Field */}
            <div style={{ marginBottom: "" }}>
              <label className="text-[#823ec9] text-[16px] ">Message</label>
              <textarea
                name="message"
                placeholder="Enter your message"
                rows={4}
                required
                className="w-full p-2 border rounded text-black "
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default OfferPopup;
