import React from "react";
import Modal from "../components/Modal/Modal";
import Image from "next/image";
import { Form, Input, Button, message } from "antd";
import {
  MailOutlined,
  UserOutlined,
  PhoneOutlined,
  // MessageOutlined,
} from "@ant-design/icons";
import { FaTimes } from "react-icons/fa";
import emailjs from "@emailjs/browser";

interface OfferPopupProps {
  closeModal: any;
}

const OfferPopup: React.FC<OfferPopupProps> = ({ closeModal }) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    // Configure with your EmailJS credentials
    emailjs
      .send(
        "service_qay4sdq",
        "template_5ot0m66",
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
          to_email: "gailymaids@gmail.com",
        },
        "prU2mq4C_eMpPOd3_"
      )
      .then(
        (response) => {
          message.success(
            "Form sent successfully. We'll get back to you soon!"
          );
          form.resetFields();
          closeModal();
        },
        (error) => {
          message.error("Failed to send email");
          console.error(error);
        }
      );
  };
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

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{ phone: "" }}
            className="mx-5 lg:mx-[10%]"
          >
            {/* Name Field */}
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
              style={{ marginBottom: "10px" }}
            >
              <Input prefix={<UserOutlined />} placeholder="Enter your name" />
            </Form.Item>

            {/* Email Field */}
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                {
                  type: "email",
                  message: "Please enter a valid email address",
                },
              ]}
              style={{ marginBottom: "10px" }}
            >
              <Input prefix={<MailOutlined />} placeholder="Enter your email" />
            </Form.Item>

            {/* Phone Number Field (Optional) */}
            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                {
                  pattern: /^[0-9]{10,15}$/,
                  message: "Please enter a valid phone number",
                  validateTrigger: "onBlur",
                },
              ]}
              style={{ marginBottom: "10px" }}
            >
              <Input
                prefix={<PhoneOutlined />}
                placeholder="Enter your phone number (optional)"
              />
            </Form.Item>

            {/* Message Field */}
            <Form.Item
              label="Message"
              name="message"
              // rules={[{ required: true, message: "Please enter your message" }]}
              style={{ marginBottom: "10px" }}
            >
              <Input.TextArea placeholder="Enter your message" rows={4} />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default OfferPopup;
