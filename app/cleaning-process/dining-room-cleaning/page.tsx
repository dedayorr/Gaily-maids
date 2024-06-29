import React from "react";
import "./dining.css";
import Image from "next/image";

const Dining = () => {
  return (
    <div className="text-black mt-[80px] mx-[5%]">
      <h2 className="mb-[10px] text-[30px] font-bold leading-8 text-[#823ec9] lg:text-[45px] lg:mb-[30px]">
        Dining Room Cleaning
      </h2>
      <div className="md:flex md:mx-[12%] md:gap-[60px]">
        <div className="flex flex-col gap-[20px] ">
          <p className="leading-8 lg:leading-[180%] text-justify lg:text-[20px]">
            Cleaning the dining area is an important part of maintaining a
            pleasant and inviting space for meals and gatherings. Whether it&apos;s a
            formal dining room or an informal dining area within your kitchen,
            regular cleaning helps ensure hygiene, tidiness, and comfort for you
            and your guests.
          </p>
          <p className="font-bold text-xl lg:text-[25px]">
            You can trust your dining room cleanings to Gaily Maids because we
            offer:
          </p>
          <ul className="list-disc custom-list-disc mx-[10%] flex flex-col gap-[15px]  lg:text-[20px]">
            <li>Trained, bonded, and insured cleaning professionals.</li>
            <li>Customized cleanings.</li>
            <li>Quality of Cleaning Products</li>
            <li>Visible Result</li>
          </ul>
          <p className="hidden md:block leading-8 lg:leading-[180%] text-justify lg:text-[20px]">
            Maintaining a clean dining area involves regular cleaning and
            organization to ensure hygiene, comfort, and a welcoming space for
            meals and social gatherings. By incorporating these steps into your
            cleaning routine, you can enjoy a well-kept dining area that adds to
            the overall appeal and functionality of your home.
          </p>
        </div>
        <Image
          className={`my-[30px] md:my-0`}
          src="/dining-room-one.png"
          alt="dining-room"
          width={500}
          height={500}
        />
        <p className="md:hidden leading-8 lg:leading-[180%] text-justify lg:text-[22px]">
          Maintaining a clean dining area involves regular cleaning and
          organization to ensure hygiene, comfort, and a welcoming space for
          meals and social gatherings. By incorporating these steps into your
          cleaning routine, you can enjoy a well-kept dining area that adds to
          the overall appeal and functionality of your home.
        </p>
      </div>

      <div className="md:flex md:mt-[10%] md:mx-[12%] md:gap-[60px]">
        <Image
          className={`my-[15%] md:my-0`}
          src="/dining-room-two.png"
          alt="dining-room"
          width={500}
          height={500}
        />
        <div>
          {" "}
          <p className="font-bold text-xl lg:text-[25px] mb-5">
            Benefits of a Clean Dining Area
          </p>
          <ul className="text-justify leading-8 list-disc custom-list-disc mx-[10%] flex flex-col gap-[15px]  lg:text-[20px]">
            <li>
              <span className="font-semibold">Comfort and Enjoyment:</span>A
              clean and organized dining area enhances the enjoyment of meals
              and gatherings.
            </li>
            <li>
              <span className="font-semibold">Hygiene: </span> Regular cleaning
              reduces the spread of germs and bacteria, ensuring a healthier
              dining environment.
            </li>
            <li>
              <span className="font-semibold">Aesthetics:</span> A tidy dining
              area creates a welcoming atmosphere for guests and enhances the
              overall aesthetics of your home.
            </li>
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

export default Dining;
