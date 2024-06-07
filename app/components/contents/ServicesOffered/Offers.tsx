import React from "react";
import Image from "next/image";
import "./offers.css";
import Link from "next/link";

const Offers = () => {
  return (
    <div className="">
      <div className="mx-[5%] my-[20%]  flex flex-col gap-[15px] md:my-[13%] lg:my-[8%]">
        <h2 className="text-[25px] font-semibold leading-8 text-[#823ec9] lg:text-[40px]">
          Gaily Maids Commitment to Excellence
        </h2>
        <p className="leading-8 text-justify">
          {" "}
          Your home is more than just a house—it's where memories are made and
          moments are cherished. Though life can be complicated, the simple
          things shouldn't be. Gaily Maids strives to take the stress out of
          your day so you can do life your way. With years of experience and an
          advanced, time-tested cleaning process, we can help you reclaim time
          with your loved ones.{" "}
        </p>
        <p className="leading-8 text-justify">
          {" "}
          Our cleaning services for houses are trusted by homeowners across the
          country. Whether you need a one time clean for a special occasion or
          regular housekeeping weekly, monthly, or on a custom schedule, our
          team has the solution you are looking for. Alongside basic home
          cleaning, we even help individuals who are moving, running property
          rentals, or who have recently finished a construction project. Our
          locally-owned offices are made up of community-minded professionals
          who love giving back free time and tranquility to the people they
          serve.{" "}
        </p>
      </div>
      <div className=" bg-[#813ec94e] px-[5%] py-[5%] mx-[5%] lg:flex justify-between">
        <div className="flex flex-col gap-[20px]">
          {" "}
          <p className="text-[] font-semibold lg:text-[22px]">
            Some of our custom cleaning services includes:
          </p>
          <ol className="list-disc ml-[10%] flex flex-col text-[#26355D] gap-[10px] lg:ml-[5%]">
            <li className="hover:underline cursor-pointer">
              Apartment Cleaning
            </li>
            <li className="hover:underline cursor-pointer">House Cleaning</li>
            <li className="hover:underline cursor-pointer">Holiday Cleaning</li>
            <li className="hover:underline cursor-pointer">
              Detailed Cleaning
            </li>
            <li className="hover:underline cursor-pointer">
              Standard Cleaning
            </li>
          </ol>
          <Link href="/cleaningservices">
            <p className="cursor-pointer italic text-[19px] text-[#6d3aa3] underline lg:text-[22px]">
              Our full list of services
            </p>
          </Link>
        </div>
        <div className="hidden lg:flex h-[300px] w-[60%] justify-between items-center px-[2%]">
          <Image
            className="living_room flex-1 min-w-0 mb-[12%] mr-[-5%] rounded-[10px] "
            src="/dirt.png"
            alt=""
            width={200}
            height={100}
            layout="responsive"
          />
          <Image
            className="living_room flex-1 min-w-0 mt-[12%] ml-[-5%] rounded-[10px]"
            src="/broom.png"
            alt=""
            width={200}
            height={100}
            layout="responsive"
          />
        </div>
      </div>

      <div className="lg:my-[10%] flex">
        {" "}
        <Image
          className="serviceImage my-[20%] px-[5%] lg:my-0"
          src="/livingroom.png"
          alt=""
          width={200}
          height={200}
        />
        <div className="NateBerkus italic hidden text-[50px] lg:flex flex-col justify-center items-center">"Your home should tell the story of who you are, and be a collection of what you love." <span className="text-[30px] not-italic"> - Nate Berkus</span></div>
      </div>
    </div>
  );
};

export default Offers;
