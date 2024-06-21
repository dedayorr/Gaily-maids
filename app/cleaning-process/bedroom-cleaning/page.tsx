import React from "react";
import "./bedroom.css";
import Image from "next/image";

const Bedroom = () => {
  return (
    <div className="text-black mt-[80px] mx-[5%]">
      <h2 className="mb-[10px] text-[30px] font-bold leading-8 text-[#823ec9] lg:text-[45px] lg:mb-[30px]">
        Bedroom Cleaning
      </h2>
      <div className="md:flex md:mx-[12%] md:gap-[60px]">
        <div className="flex flex-col gap-[20px] ">
          <p className="leading-8 lg:leading-[180%] text-justify lg:text-[20px]">
            The bedroom is a sanctuary for rest and relaxation, so keeping it
            clean and organized is essential for a good night&apos;s sleep and
            overall well-being. Regular bedroom cleaning not only enhances the
            room&apos;s appearance but also promotes a healthy living environment by
            reducing allergens and dust.
          </p>
          <p className="font-bold text-xl lg:text-[25px]">
            Gaily Maids bedroom cleaning service includes the following tasks:
          </p>
          <ul className="list-disc custom-list-disc mx-[10%] flex flex-col gap-[15px]  lg:text-[20px]">
            <li>
              Dust end tables, television stands, bookshelves, and other pieces
              of furniture, as well as any decorative accessories displayed on
              these tables. Dust baseboards and ceiling fans as well.
            </li>
            <li>Wipe down corners to remove any cobwebs from corners.</li>
            <li>
              Vacuum carpets and wash all hardwood, laminate, or tile floors.
              Dry wood floors. Vacuum furniture and under cushions.
            </li>{" "}
            <li>Empty and clean wastebaskets.</li>
            <li>Bed-making and changing bed linens.</li>
          </ul>
          <p className="hidden md:block leading-8 lg:leading-[180%] text-justify lg:text-[20px]">
            Keeping your bedroom clean and organized is essential for creating a
            comfortable and healthy living environment. By following a regular
            cleaning routine and maintaining good habits, you can ensure your
            bedroom remains a serene and restful sanctuary.
          </p>
        </div>
        <Image
          className={`my-[30px] md:my-0`}
          src="/bathroom-one.png"
          alt=""
          width={500}
          height={500}
        />
        <p className="md:hidden leading-8 lg:leading-[180%] text-justify lg:text-[22px]">
          Keeping your bedroom clean and organized is essential for creating a
          comfortable and healthy living environment. By following a regular
          cleaning routine and maintaining good habits, you can ensure your
          bedroom remains a serene and restful sanctuary.
        </p>
      </div>

      <div className="md:flex md:mt-[10%] md:mx-[12%] md:gap-[60px]">
        <Image
          className={`my-[15%] md:my-0`}
          src="/bathroom-two.png"
          alt=""
          width={500}
          height={500}
        />
        <div>
          {" "}
          <p className="font-bold text-xl lg:text-[25px] mb-5">
            Benefits of a Clean Bedroom
          </p>
          <ul className="text-justify leading-8 list-disc custom-list-disc mx-[10%] flex flex-col gap-[15px]  lg:text-[20px]">
            <li>
              <span className="font-semibold">Better Sleep:</span> A clean and
              organized bedroom can contribute to better sleep quality by
              creating a calm and restful environment.
            </li>
            <li>
              <span className="font-semibold">Improved Health: </span>Regular
              cleaning reduces dust, allergens, and germs, promoting a healthier
              living space.
            </li>
            <li>
              <span className="font-semibold">Enhanced Aesthetics:</span>A tidy
              and well-maintained bedroom looks more inviting and comfortable.
            </li>
            <li>
              <span className="font-semibold">Stress Reduction: </span> An
              organized space can reduce stress and improve mental well-being,
              providing a peaceful retreat from daily life.
            </li>{" "}
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

export default Bedroom;
