import React from "react";
import Image from "next/image";
import styles from "./cleaningservices.module.css";

const CleaningServicesPage = () => {
  return (
    <>
    <div className="text-black px-[5%] mt-[40px] flex flex-col gap-[25px]">
      <h1 className="text-[25px] font-bold leading-8 text-[#823ec9]">
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
          with a comprehensive clean that will reenergize your home and enhance
          your life. From everyday housekeeping to routine cleanings and
          seasonal services, our professional house cleaners can provide you
          with an unrivaled experience.
        </p>
        <p>
          {" "}
          With our "Worry Free Guarantee", you can be sure your house will be
          cleaned the way you want everytime.
        </p>
      </div>
    </div>
    <div>
      </div>
    </>
  );
};

export default CleaningServicesPage;
