import React from "react";
import Image from "next/image";
import { MdDoubleArrow } from "react-icons/md";
import Link from "next/link";

const Questions = () => {
  return (
    <div className="text-black mx-[5%]">
      <h1 className="mt-[15%] mb-5 text-[25px] font-bold text-[#823ec9] lg:text-[40px] lg:mt-[10%]">
        Answers to Your Questions About Our Home Cleaning Services
      </h1>
      <div className="lg:flex lg:mx-[15%] lg:gap-[10%] mb-[15%] lg:mb-[10%]">
        <p className="leading-8 text-justify mb-3 lg:text-[18px] lg:leading-[50px]">
          At Gaily Maids, we understand that maintaining a clean home can be
          challenging with a busy lifestyle. That&apos;s why we&apos;re here to
          help! To ensure you have all the information you need about our home
          cleaning services, we&apos;ve compiled answers to some of the most
          frequently asked questions from our clients.
        </p>
        <Image
          className="faqnature "
          src="/faq-nature.png"
          alt="faq-image"
          height={400}
          width={400}
        />
      </div>

      <div className="flex flex-col gap-[25px] lg:mx-[10%]">
        <div className="">
          <div className="flex gap-4 ">
            <MdDoubleArrow className="lg: text-[25px] text-[#823ec9] " />
            <p className="lg:mb-3 font-bold lg:text-[20px] lg:">
              Are your cleaning products safe for my family and pets?
            </p>
          </div>
          <p className="ml-8 lg:text-[16px] text-justify leading-8">
            Yes, at Gaily Maids, we prioritize the health and safety of our
            clients. We use eco-friendly and non-toxic cleaning products that
            are safe for your family, pets, and the environment.
          </p>
        </div>

        <div className="">
          <div className="flex gap-4 ">
            <MdDoubleArrow className="lg: text-[25px] text-[#823ec9] " />
            <p className="lg:mb-3 font-bold lg:text-[20px]">
              Do I need to be home during the cleaning?
            </p>
          </div>
          <p className="ml-8 lg:text-[16px] text-justify leading-8">
            You do not need to be home during the cleaning. Many of our clients
            provide us with access to their homes while they are away. However,
            if you prefer to be present, that&apos;s perfectly fine too.
          </p>
        </div>

        <div className="">
          <div className="flex gap-4 ">
            <MdDoubleArrow className="lg: text-[25px] text-[#823ec9] " />
            <p className="lg:mb-3 font-bold lg:text-[20px]">
              How do you ensure the quality and reliability of your cleaners?
            </p>
          </div>
          <p className="ml-8 lg:text-[16px] text-justify leading-8">
            Our cleaners are thoroughly vetted through background checks and
            extensive training. We take pride in our team&apos;s
            professionalism, reliability, and attention to detail. Additionally,
            we regularly conduct quality checks and encourage client feedback to
            maintain our high standards.
          </p>
        </div>

        <div className="">
          <div className="flex gap-4 ">
            <MdDoubleArrow className="lg: text-[25px] text-[#823ec9] " />
            <p className="lg:mb-3 font-bold lg:text-[20px]">
              What happens if I&apos;m not satisfied with the service?
            </p>
          </div>
          <p className="ml-8 lg:text-[16px] text-justify leading-8">
            Your satisfaction is our top priority. If you are not completely
            satisfied with our service, please contact us within 24 hours, and
            we will make it right by addressing the issue promptly.
          </p>
        </div>
        <div className="">
          <div className="flex gap-4 ">
            <MdDoubleArrow className="lg: text-[25px] text-[#823ec9] " />
            <p className="lg:mb-3 font-bold lg:text-[20px]">
              Do you offer customized cleaning plans?
            </p>
          </div>
          <p className="ml-8 lg:text-[16px] text-justify leading-8">
            Absolutely! We understand that every home is unique. We offer
            customized cleaning plans tailored to your specific needs and
            preferences. Just let us know your requirements, and we&apos;ll
            create a plan that works for you.
          </p>
        </div>
        <div className="">
          <div className="flex gap-4 ">
            <MdDoubleArrow className="lg: text-[25px] text-[#823ec9] " />
            <p className="lg:mb-3 font-bold lg:text-[20px]">
              Do you offer packages?
            </p>
          </div>
          <p className="ml-8 lg:text-[16px] text-justify leading-8">
            We completely individualize our cleanings, so no specific packages
            are offered. We use a proven system to clean thoroughly,
            consistently, and efficiently. Please contact our office{" "}
            <span></span> for more information.
          </p>
        </div>
        <div className="">
          <div className="flex gap-4 ">
            <MdDoubleArrow className="lg: text-[25px] text-[#823ec9] " />
            <p className="lg:mb-3 font-bold lg:text-[20px]">
              Do you bring your own cleaning supplies, chemicals, and equipment?
            </p>
          </div>
          <p className="ml-8 lg:text-[16px] text-justify leading-8">
            Yes, we bring everything we need to clean your home. You don&apos;t
            have to provide any cleaning supplies. However, if you would like us
            to use any of your products for a particular area, please let the
            office know upon booking.
          </p>
        </div>
        <div className="">
          <div className="flex gap-4 ">
            <MdDoubleArrow className="lg: text-[25px] text-[#823ec9] " />
            <p className="lg:mb-3 font-bold lg:text-[20px]">
              Do you clean homes just once, or do you have to clean long-term?
            </p>
          </div>
          <p className="ml-8 lg:text-[16px] text-justify leading-8">
            While most of our customers prefer a weekly cleaning on a regularly
            scheduled day, we also clean homes every other week or less
            frequently. Even special occasions.
          </p>
        </div>
        <div className="">
          <div className="flex gap-4 ">
            <MdDoubleArrow className="lg: text-[25px] text-[#823ec9] " />
            <p className="lg:mb-3 font-bold lg:text-[20px]">
              If I sign up for long-term service, will the same person be in my
              home each time?
            </p>
          </div>
          <p className="ml-8 lg:text-[16px] text-justify leading-8">
            We make every effort to ensure that we keep the same team who serves
            your home cleans during each visit. If a member of the team changes,
            our office staff contacts you beforehand.
          </p>
        </div>
        <div className="">
          <div className="flex gap-4 ">
            <MdDoubleArrow className="lg: text-[25px] text-[#823ec9] " />
            <p className="lg:mb-3 font-bold lg:text-[20px]">
              I&apos;m interested in working for you. How do I apply?
            </p>
          </div>
          <p className="ml-8 lg:text-[16px] text-justify leading-8">
            Apply{" "}
            <Link
              href="/hiring"
              className="italic underline font-extralight text-[#823ec9]"
            >
              HERE
            </Link>{" "}
          </p>
        </div>
      </div>

      <div className="cursor-pointer border-[2px] border-[#26355D] text-[#26355D] mx-[5%] my-[10%] h-[150px] flex flex-col justify-center items-center text-center font-semibold text-[17px] lg:text-[30px]">
        Still have some questions or concerns? Don&apos;t hesitate to give us a
        call at <a href="tel:+18472207472"> +1 (847) 220-7472 </a> and
        we&apos;ll be sure to help you!
      </div>
    </div>
  );
};

export default Questions;
