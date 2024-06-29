import React from "react";
import "./bathroom.css";
import Image from "next/image";

const Bathroom = () => {
  return (
    <div className="text-black mt-[80px] mx-[5%]">
      <h2 className="mb-[10px] text-[30px] font-bold leading-8 text-[#823ec9] lg:text-[45px] lg:mb-[30px]">
        Bathroom Cleaning
      </h2>
      <div className="md:flex md:mx-[12%] md:gap-[60px]">
        <div className="flex flex-col gap-[20px] ">
          <p className="leading-8 lg:leading-[180%] text-justify lg:text-[20px]">
            Bathroom cleaning is a crucial part of maintaining a hygienic and
            pleasant home environment. Given the bathroom&apos;s role as a place for
            personal hygiene, it&apos;s essential to keep it clean to prevent the
            buildup of germs, mold, and mildew. Regular and thorough cleaning
            ensures the bathroom remains a safe and inviting space.
          </p>
          <p className="font-bold text-xl lg:text-[25px]">
            Some of our bathroom cleaning services include:
          </p>
          <ul className="list-disc custom-list-disc mx-[10%] flex flex-col gap-[15px]  lg:text-[20px]">
            <li>Scrubbing and rinsing sinks and showers</li>
            <li>Removing built-up soap scum</li>
            <li>Disinfecting toilets inside and out</li>{" "}
            <li>Cleaning lights and fixtures</li>
          </ul>
          <p className="hidden md:block leading-8 lg:leading-[180%] text-justify lg:text-[20px]">
            Bathroom cleaning is a vital chore that should not be overlooked. By
            following a systematic approach and maintaining a regular cleaning
            schedule, you can ensure that your bathroom remains a clean,
            hygienic, and welcoming space.
          </p>
        </div>
        <Image
          className={`my-[30px] md:my-0`}
          src="/bathroom-one.png"
          alt="bathroom"
          width={500}
          height={500}
        />
        <p className="md:hidden leading-8 lg:leading-[180%] text-justify lg:text-[22px]">
          Bathroom cleaning is a vital chore that should not be overlooked. By
          following a systematic approach and maintaining a regular cleaning
          schedule, you can ensure that your bathroom remains a clean, hygienic,
          and welcoming space.
        </p>
      </div>

      <div className="md:flex md:mt-[10%] md:mx-[12%] md:gap-[60px]">
        <Image
          className={`my-[15%] md:my-0`}
          src="/bathroom-two.png"
          alt="bathroom"
          width={500}
          height={500}
        />
        <div>
          {" "}
          <p className="font-bold text-xl lg:text-[25px] mb-5">
            Benefits of a Clean Bathroom
          </p>
          <ul className="text-justify leading-8 list-disc custom-list-disc mx-[10%] flex flex-col gap-[15px]  lg:text-[20px]">
            <li>
              <span className="font-semibold">Hygiene:</span> Regular cleaning
              prevents the growth of mold, mildew, and bacteria, ensuring a
              healthy environment.
            </li>
            <li>
              <span className="font-semibold">Aesthetics:</span> A clean
              bathroom looks and smells fresh, making it a more pleasant space
              for you and your guests.
            </li>
            <li>
              <span className="font-semibold">Stress Reduction:</span>A tidy and
              organized bathroom can reduce stress and improve your overall
              sense of well-being.
            </li>
            <li>
              <span className="font-semibold">Functionality:</span> Keeping
              fixtures and surfaces clean helps maintain their condition and
              functionality over time.
            </li>{" "}
          </ul>
        </div>
      </div>

      <div className="border p-2 font-bold text-center w-[98%] mx-auto text-[#823ec9] mt-[10%] leading-8 lg:text-[25px]">
        Contact us today at{" "}
        <a href="tel:+1-847-393-9704">
            {" "}
            +1-847-393-9704{" "}
          </a>
        to schedule your first cleaning and discover why Gaily Maids is the
        trusted choice for countless homes and businesses.
      </div>
    </div>
  );
};

export default Bathroom;
