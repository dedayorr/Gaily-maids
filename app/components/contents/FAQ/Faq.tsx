"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import style from "./faq.module.css";

const Faq = () => {
  return (
    <div className="text-black px-[5%] flex flex-col gap-[15px]">
      <div
        className={`mx-auto text-[30px] font-semibold h-[50px] w-[40%] flex justify-center items-center text-[#823ec9] lg:text-[40px]`}
      >
        FAQ
      </div>
      <div className="leading-8 flex flex-col gap-[10px]">
        <h2 className="font-bold text-[20px] lg:text-[25px]">
          Most Common Questions And Answers
        </h2>
        <p className="text-justify ">
          Molly Maid is committed to your complete satisfaction, which is why we
          strive to offer the most consistent, reliable, and affordable
          housecleaning services around. Our team of experienced professionals
          has taken the time to answer some of our most frequently asked
          questions for your convenience.
        </p>
      </div>

      <Accordion className="border-none flex flex-col gap-[20px]">
        <AccordionPanel className="">
          <AccordionTitle className="border border-[#2225eb62] p-2 font-serif font-semibold">
            What are your rates ?
          </AccordionTitle>
          <AccordionContent className="p-2 ">
            Our pricing is completely individualized. xperience have helped us
            learn that every home is as unique as the people living there. We
            base our pricing on many factors, including the presence of pet
            hair, clutter, and even your lifestyle.
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel className="">
          <AccordionTitle className="border border-[#2226eb62] p-2 font-serif font-semibold">
            Do you offer packages?
          </AccordionTitle>
          <AccordionContent className="p-2 ">
            We completely individualize our cleanings, so no specific packages
            are offered. We use a proven system to clean thoroughly,
            consistently, and efficiently. For a list of items we generally
            clean during a visit, please visit our cleaning services page. We
            also tailor our visit to your individual needs and your home&quot;s
            cleaning requirements. Please contact your local office for more
            information.
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel className="">
          <AccordionTitle className="border border-[#2226eb62] p-2  text-left font-serif font-semibold">
            Do you bring your own cleaning supplies, chemicals, and equipment?
          </AccordionTitle>
          <AccordionContent className="p-2 ">
            Yes, we bring everything we need to clean your home. You don&quot;t have
            to provide a thing.
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel className="">
          <AccordionTitle className="border border-[#2226eb62] p-2 text-left font-serif font-semibold">
            Do you clean homes just once, or do you have to clean long-term?
          </AccordionTitle>
          <AccordionContent className="p-2 ">
            While most of our customers prefer a weekly cleaning on a regularly
            scheduled day, we also clean homes every other week or less
            frequently. Even special occasions.
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel className="">
          <AccordionTitle className="border border-[#2226eb62] p-2 font-serif font-semibold">
            How many people will be in my home during each cleaning?
          </AccordionTitle>
          <AccordionContent className="p-2 ">
            Gaily Maids offices may send one, two, or three team members to
            clean a home. Our goal is to customize the cleaning to meet our
            client&quot;s needs and also provide our team members with the
            greatest opportunities for career advancement. We will work with you
            so that you know how many people will be in your home. We respect
            that your home is private, and the trust you place in us by inviting
            us into your home.
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel className="">
          <AccordionTitle className="border border-[#2226eb62] p-2 font-serif font-semibold">
            If I sign up for long-term service, will the same person be in my
            home each time?
          </AccordionTitle>
          <AccordionContent className="p-2 ">
            We make every effort to ensure that we keep the same team who serves
            your home cleans during each visit. If a member of the team changes,
            our office staff contacts you beforehand to learn if you prefer
            someone other than your regular cleaning professional or would
            rather change your scheduled day so your favorite team member can
            clean.
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
      <Link
        href=""
        className="text-[18px] text-[#823ec9] flex items-center gap-[10px] lg:text-[30px]"
      >
        <p className="italic hover:underline">See More</p>
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default Faq;
