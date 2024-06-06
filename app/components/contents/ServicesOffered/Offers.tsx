import React from "react";
import Image from "next/image";
import "./offers.css";
import Link from "next/link";

const Offers = () => {
  return (
    <div className="">
      <div className="mx-[5%] my-[20%]  flex flex-col gap-[15px]">
        <h2 className="text-[25px] font-semibold leading-8 text-[#823ec9]">
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
      <div className="flex flex-col gap-[20px] bg-[#813ec94e] px-[5%] py-[5%] mx-[5%]">
        <p className="text-[] font-semibold">
          Some of our custom cleaning services includes:
        </p>

        <ol className="list-disc ml-[10%] flex flex-col text-[#26355D] gap-[10px]">
          <li className="hover:underline">Apartment Cleaning</li>
          <li className="hover:underline">House Cleaning</li>
          <li className="hover:underline">Holiday Cleaning</li>
          <li className="hover:underline">Detailed Cleaning</li>
          <li className="hover:underline">Standard Cleaning</li>
        </ol>

        <Link href="/cleaningservices">
          <p className="italic text-[19px] text-[#6d3aa3] underline">
            Our full list of services
          </p>
        </Link>
      </div>

      <Image
        className="serviceImage my-[20%] px-[5%]"
        src="/livingroom.png"
        alt=""
        width={200}
        height={200}
      />
    </div>
  );
};

export default Offers;
