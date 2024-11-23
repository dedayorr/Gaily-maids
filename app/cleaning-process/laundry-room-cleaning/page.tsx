import React from "react";
import "./laundry.css";
import Image from "next/image";

const Laundry = () => {
  return (
    <div className="text-black mt-[80px] mx-[5%]">
      <h1 className="mb-[10px] text-[30px] font-bold leading-8 text-[#823ec9] lg:text-[45px] lg:mb-[30px]">
        Laundry Room Cleaning
      </h1>
      <div className="md:flex md:mx-[12%] md:gap-[60px]">
        <div className="flex flex-col gap-[20px] ">
          <p className="leading-8 lg:leading-[180%] text-justify lg:text-[20px]">
            The laundry room is an essential part of any household, dedicated to
            washing and drying clothes. Keeping this space clean and organized
            is crucial for maintaining the efficiency of laundry tasks and
            ensuring a hygienic environment. Regular cleaning of the laundry
            room helps prevent mold, mildew, and lint buildup, making the space
            more functional and pleasant to use.
          </p>
          <p className="font-bold text-xl lg:text-[25px]">
            Gaily Maids laundry room cleaning service focuses on those surfaces
            that can accumulate dirt, dust, and buildup. We will:
          </p>
          <ul className="list-disc custom-list-disc mx-[10%] flex flex-col gap-[15px]  lg:text-[20px]">
            <li>
              Wipe down countertops and cabinets to eliminate dust and dirt
            </li>
            <li>
              Clean the floors, whether they&apos;re vinyl, laminate, tile, or
              wood
            </li>
            <li>
              Empty and clean wastebaskets that may be full of dryer lint, dryer
              sheets, and other discarded laundry-related items
            </li>
          </ul>
          <p className="hidden md:block leading-8 lg:leading-[180%] text-justify lg:text-[20px]">
            Maintaining a clean and organized laundry room is essential for
            efficient and safe laundry operations. By incorporating regular
            cleaning routines and paying attention to detail, you can ensure
            this space remains functional, hygienic, and pleasant to use.
          </p>
        </div>
        <Image
          className={`my-[30px] md:my-0`}
          src="/laundry-one.png"
          alt="laundry-room"
          width={500}
          height={500}
        />
        <p className="md:hidden leading-8 lg:leading-[180%] text-justify lg:text-[22px]">
          Maintaining a clean and organized laundry room is essential for
          efficient and safe laundry operations. By incorporating regular
          cleaning routines and paying attention to detail, you can ensure this
          space remains functional, hygienic, and pleasant to use.
        </p>
      </div>

      <div className="md:flex md:mt-[10%] md:mx-[12%] md:gap-[60px]">
        <Image
          className={`my-[15%] md:my-0`}
          src="/laundry-two.png"
          alt="laundry-room"
          width={500}
          height={500}
        />
        <div>
          {" "}
          <p className="font-bold text-xl lg:text-[25px] mb-5">
            Benefits of a Clean Laundry Room
          </p>
          <ul className="text-justify leading-8 list-disc custom-list-disc mx-[10%] flex flex-col gap-[15px]  lg:text-[20px]">
            <li>
              <span className="font-semibold">Hygiene:</span> Regular cleaning
              prevents mold, mildew, and bacteria buildup, ensuring a hygienic
              space for handling clean clothes.
            </li>
            <li>
              <span className="font-semibold">Efficiency: </span> A clean and
              organized laundry room makes it easier to carry out laundry tasks,
              saving time and effort.
            </li>
            <li>
              <span className="font-semibold">Aesthetics:</span> A tidy and
              well-maintained laundry room is more pleasant to use and
              contributes to the overall appeal of your home.
            </li>
            <li>
              <span className="font-semibold">Safety:</span> Keeping the dryer
              lint-free and maintaining clean appliances reduce the risk of fire
              hazards and mechanical issues.
            </li>
          </ul>
        </div>
      </div>
      <div className="border p-2 font-bold text-center w-[98%] mx-auto text-[#823ec9] mt-[10%] leading-8 lg:text-[25px]">
        Contact us today at <a href="tel:+18474403683"> +1 (847) 440-3683 </a>
        to schedule your first cleaning and discover why Gaily Maids is the
        trusted choice for countless homes and businesses.
      </div>
    </div>
  );
};

export default Laundry;
