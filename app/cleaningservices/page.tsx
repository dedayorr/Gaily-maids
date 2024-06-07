import React from "react";
import Image from "next/image";
import styles from "./cleaningservices.module.css";

const CleaningServicesPage = () => {
  return (
    <>
      <div className="text-black px-[5%] mt-[40px] flex flex-col gap-[25px]">
        <h1 className="text-[35px] font-bold leading-8 text-[#823ec9]">
          Our Home Cleaning Services
        </h1>
        <h2 className="font-light text-[28px]">Cleaning You Can See & Feel</h2>
        <div className={`${styles.imageContainer}`}>
          {" "}
          <Image
            className={`${styles.image}`}
            src="/cleaning-service-one.png"
            alt=""
            width={500}
            height={200}
          />
        </div>
        <div className="leading-8 text-justify">
          <p>
            {" "}
            Our cleaning services go beyond the basic services and provide you
            with a comprehensive clean that will reenergize your home and
            enhance your life. From everyday housekeeping to routine cleanings
            and seasonal services, our professional house cleaners can provide
            you with an unrivaled experience.
          </p>
          <p>
            {" "}
            With our &quot;Worry Free Guarantee&quot;, you can be sure your house will be
            cleaned the way you want everytime.
          </p>
        </div>
      </div>
      <br/>
      <br/>
      <div className="text-black px-[5%] grid grid-cols-2 font-bold gap-[20px]">
        <div className="flex flex-col gap-[15px]">
          <p className="">Apartment Cleaning</p>
          <Image
            className={`${styles.image}`}
            src="/apartment-service.png"
            alt=""
            width={500}
            height={100}
          />
        </div>
        <div className="flex flex-col gap-[15px]">
          <p className="">House Cleaning</p>
          <Image
            className={`${styles.image}`}
            src="/house-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
        </div>
        <div className="flex flex-col gap-[15px]">
          <p className="">Holiday Cleaning</p>
          <Image
            className={`${styles.image}`}
            src="/holiday-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
        </div>
        <div className="flex flex-col gap-[15px]">
          <p className="">Detailed Cleaning</p>
          <Image
            className={`${styles.image}`}
            src="/detailed-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
        </div>
        <div className="flex flex-col gap-[15px] ">
          <p className="">Kitchen appliance Cleaning</p>
          <Image
            className={`${styles.image}`}
            src="/kitchen-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
        </div>
        <div className="flex flex-col gap-[15px] justify-end">
          <p className="">Office Cleaning</p>
          <Image
            className={`${styles.image}`}
            src="/office-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
        </div>
        <div className="flex flex-col gap-[15px]">
          <p className="">Specialty Cleaning</p>
          <Image
            className={`${styles.image}`}
            src="/specialty-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
        </div>
        
        <div className="flex flex-col gap-[15px]">
          <p className="">Deep Cleaning</p>
          <Image
            className={`${styles.image}`}
            src="/deep-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
        </div>
        <div className="flex flex-col gap-[15px]">
          <p className="">Move-in Cleaning</p>
          <Image
            className={`${styles.image}`}
            src="/movingin-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
        </div>
        <div className="flex flex-col gap-[15px]">
          <p className="">Move-out Cleaning</p>
          <Image
            className={`${styles.image}`}
            src="/movingout-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
        </div>
      </div>
      <button className="bg-[#823ec9] mx-auto flex my-[10%] p-[3%] rounded-[10px] hover:bg-[#fff] hover:text-[#823ec9]">Request & Estimate</button>
    </>
  );
};

export default CleaningServicesPage;
