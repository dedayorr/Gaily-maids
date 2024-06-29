"use client";
import React from "react";
import Image from "next/image";
import "./offers.css";
import Link from "next/link";
import Map from "../../Map/Map";

const Offers = () => {
  return (
    <div className="">
      <div className="mx-[5%] my-[20%]  flex flex-col gap-[15px] md:my-[13%] lg:my-[8%]">
        <h2 className="text-[25px] font-semibold leading-8 text-[#823ec9] lg:text-[40px] lg:mb-4">
          Gaily Maids Commitment to Excellence
        </h2>
        <p className="leading-8 text-justify">
          {" "}
          Your home is more than just a house it&apos;s where memories are made
          and moments are cherished. Though life can be complicated, the simple
          things shouldn&apos;t be. Gaily Maids strives to take the stress out
          of your day so you can do life your way. With years of experience and
          an advanced, time-tested cleaning process, we can help you reclaim
          time with your loved ones.{" "}
        </p>
        <p className="leading-8 text-justify">
          {" "}
          Our cleaning services for houses are trusted by homeowners across the
          country. Whether you need a one time clean for a special occasion or
          regular housekeeping weekly, monthly, or on a custom schedule, our
          team has the solution you are looking for. Alongside basic home
          cleaning, we even help individuals who are moving, running property
          rentals, or who have recently finished a construction project. Our
          locally-owned office is made up of community-minded professionals who
          love giving back free time and tranquility to the people they serve.{" "}
        </p>
      </div>
      <div className=" bg-[#813ec94e] px-[5%] py-[5%] mx-[5%] lg:flex justify-between">
        <div className="flex flex-col gap-[20px]">
          {" "}
          <p className="text-[] font-semibold lg:text-[22px]">
            Our custom cleaning services include:
          </p>
          <ol className="list-disc custom-list-disc ml-[10%] flex flex-col text-[#26355D] gap-[10px] lg:ml-[5%]">
            <Link href="/cleaning-services">
              {" "}
              <li className="hover:underline cursor-pointer">
                Apartment Cleaning
              </li>
            </Link>
            <Link href="/cleaning-services">
              <li className="hover:underline cursor-pointer">House Cleaning</li>
            </Link>
            <Link href="/cleaning-services">
              {" "}
              <li className="hover:underline cursor-pointer">
                Kitchen Appliances Cleaning
              </li>
            </Link>
            <Link href="/cleaning-services">
              {" "}
              <li className="hover:underline cursor-pointer">
                Office Cleaning
              </li>
            </Link>
            <Link href="/cleaning-services">
              {" "}
              <li className="hover:underline cursor-pointer">
                Specialty Cleaning
              </li>
            </Link>
            <Link href="/cleaning-services">
              {" "}
              <li className="hover:underline cursor-pointer">Deep Cleaning</li>
            </Link>
            {/* <li className="hover:underline cursor-pointer">Holiday Cleaning</li> */}

            <Link href="/cleaning-services">
              {" "}
              <li className="hover:underline cursor-pointer">
                Move-in Cleaning
              </li>
            </Link>
            <Link href="/cleaning-services">
              {" "}
              <li className="hover:underline cursor-pointer">
                Move-out Cleaning
              </li>
            </Link>
          </ol>
          {/* <Link href="/cleaningservices">
            <p className="cursor-pointer italic text-[19px] text-[#6d3aa3] underline lg:text-[22px]">
              Our full list of services
            </p>
          </Link> */}
        </div>
        <div className="hidden lg:flex h-[300px] w-[60%] justify-between items-center px-[2%]">
          <Image
            className="living_room flex-1 min-w-0 mb-[12%] mr-[-5%] rounded-[10px] "
            src="/dirt.png"
            alt="dirt"
            width={200}
            height={100}
            layout="responsive"
          />
          <Image
            className="living_room flex-1 min-w-0 mt-[12%] ml-[-5%] rounded-[10px]"
            src="/broom.png"
            alt="broom"
            width={200}
            height={100}
            layout="responsive"
          />
        </div>
      </div>

      <div className="flex my-[10%] justify-between lg:mx-[5%]">
        <div className="text-black ">
          <div className="mb-7">
            {" "}
            <p className="italic cursive text-[25px] text-center lg:text-[35px]">
              Our Service Area
            </p>
            <hr className="w-[15%] border-[1.5px] border-[#823ec9] mx-auto" />
          </div>

          <div className="w-[65%] ml-[5%] mb-7 lg:ml-0">
            <div className="flex justify-between lg:text-[25px]">
              <div className="font-bold">Mon</div>
              <div className="text-[#26355d7b]">8:00 am - 5:00 pm</div>
            </div>
            <div className="flex justify-between lg:text-[25px]">
              <div className="font-bold">Tue</div>
              <div className="text-[#26355d7b]">8:00 am - 5:00 pm</div>
            </div>
            <div className="flex justify-between lg:text-[25px]">
              <div className="font-bold">Wed</div>
              <div className="text-[#26355d7b]">8:00 am - 5:00 pm</div>
            </div>
            <div className="flex justify-between lg:text-[25px]">
              <div className="font-bold">Thu</div>
              <div className="text-[#26355d7b]">8:00 am - 5:00 pm</div>
            </div>
            <div className="flex justify-between lg:text-[25px]">
              <div className="font-bold">Fri</div>
              <div className="text-[#26355d7b]">8:00 am - 5:00 pm</div>
            </div>
            <div className="flex gap-[32%] lg:text-[25px] lg:gap-[36%]">
              <div className="font-bold">Sat</div>
              <div className="text-[#26355d7b]">Closed</div>
            </div>
            <div className="flex gap-[30%] lg:text-[25px] lg:gap-[34%]">
              <div className="font-bold">Sun</div>
              <div className="text-[#26355d7b]">Closed</div>
            </div>
          </div>

          <div className="mx-5 mb-3 lg:mx-0 ">
            <div className="font-extrabold lg:text-[25px]">SERVICE AREAS: </div>
            <div className="text-[#26355d7b]">
              Elgin, Bartlett, Wayne, Hoffman Estates, Huntley, Crystal lake
            </div>
          </div>

          <a href="tel:+18473939704">
            <p className="hover:underline ml-5 text-[#823ec9] italic  text-[16px] lg:text-[20px] lg:ml-0">
              +1-847-393-9704
            </p>
          </a>
        </div>

        {/* <Map/> */}
        <Image
          className="map hidden lg:block"
          src="/map.png"
          alt="living-room"
          width={500}
          height={500}
        />
      </div>

      <div className="lg:my-[10%] flex">
        {" "}
        <Image
          className="serviceImage my-[20%] px-[5%] lg:my-0"
          src="/livingroom.png"
          alt="living-room"
          width={200}
          height={200}
        />
        <div className="NateBerkus italic hidden text-[50px] lg:flex flex-col justify-center items-center">
          &quot;Your home should tell the story of who you are, and be a
          collection of what you love.&quot;{" "}
          <span className="text-[30px] not-italic"> - Nate Berkus</span>
        </div>
      </div>
    </div>
  );
};

export default Offers;
