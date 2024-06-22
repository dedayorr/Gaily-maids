import React from "react";
import "./kitchen.css";
import Image from "next/image";

const Kitchen = () => {
  return (
    <div className="text-black mt-[80px] mx-[5%]">
      <h2 className="mb-[10px] text-[30px] font-bold leading-8 text-[#823ec9] lg:text-[45px] lg:mb-[30px]">
        Dining Room Cleaning
      </h2>
      <div className="md:flex md:mx-[12%] md:gap-[60px]">
        <div className="flex flex-col gap-[20px] ">
          <p className="leading-8 lg:leading-[180%] text-justify lg:text-[20px]">
            The kitchen is often considered the heart of the home, where meals
            are prepared, and families gather. Keeping the kitchen clean is
            vital for maintaining a hygienic environment and ensuring the safety
            of the food prepared there. Regular cleaning helps prevent the
            buildup of grease, grime, and bacteria, making the kitchen a more
            pleasant and efficient space to work in.
          </p>
          <p className="font-bold text-xl lg:text-[25px]">
            Our kitchen cleaning team will:
          </p>
          <ul className="list-disc custom-list-disc mx-[10%] flex flex-col gap-[15px]  lg:text-[20px]">
            <li>Dust and wipe your countertops and eliminate crumbs</li>
            <li>Clean cooktops</li>
            <li>Clean inside and outside your microwave</li>
            <li>Polish the exterior of your appliances</li>
            <li>Wipe away any fingerprints or smudges</li>
            <li>Shine faucets and cabinet hardware</li>
          </ul>
          <p className="hidden md:block leading-8 lg:leading-[180%] text-justify lg:text-[20px]">
            Keeping your kitchen clean is essential for maintaining a safe,
            efficient, and pleasant space for cooking and gathering. By
            following a regular cleaning routine and maintaining good habits,
            you can ensure your kitchen remains the heart of your home.
          </p>
        </div>
        <Image
          className={`my-[30px] md:my-0`}
          src="/kitchen-one.png"
          alt=""
          width={500}
          height={500}
        />
        <p className="md:hidden leading-8 lg:leading-[180%] text-justify lg:text-[22px]">
          Keeping your kitchen clean is essential for maintaining a safe,
          efficient, and pleasant space for cooking and gathering. By following
          a regular cleaning routine and maintaining good habits, you can ensure
          your kitchen remains the heart of your home.
        </p>
      </div>
      
      <div className="md:flex md:mt-[10%] md:mx-[12%] md:gap-[60px]">
        <Image
          className={`my-[15%] md:my-0`}
          src="/kitchen-two.png"
          alt=""
          width={500}
          height={500}
        />
        <div>
          {" "}
          <p className="font-bold text-xl lg:text-[25px] mb-5">
            Benefits of a Clean Kitchen
          </p>
          <ul className="text-justify leading-8 list-disc custom-list-disc mx-[10%] flex flex-col gap-[15px]  lg:text-[20px]">
            <li>
              <span className="font-semibold">Hygiene:</span>Regular cleaning
              prevents the growth of bacteria, mold, and pests, ensuring a safe
              environment for food preparation.
            </li>
            <li>
              <span className="font-semibold">Efficiency: </span> An organized
              kitchen makes cooking and meal prep more efficient, saving time
              and reducing stress.
            </li>
            <li>
              <span className="font-semibold">Aesthetics:</span> A clean kitchen
              looks inviting and can be a source of pride for homeowners.
            </li>
            <li>
              <span className="font-semibold">Health: </span> Reducing allergens
              and contaminants in the kitchen contributes to better overall
              health for the household.
            </li>
          </ul>
        </div>
      </div>
      <div className="border p-2 font-bold text-center w-[98%] mx-auto text-[#823ec9] mt-[10%] leading-8 lg:text-[25px]">
        Contact us today at{" "}
        <a href="tel:+18722357202">
          <p>+18722357202</p>
        </a>{" "}
        to schedule your first cleaning and discover why Gaily Maids is the
        trusted choice for countless homes and businesses.
      </div>
    </div>
  );
};

export default Kitchen;
