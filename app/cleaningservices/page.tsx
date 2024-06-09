import React from "react";
import Image from "next/image";
import styles from "./cleaningservices.module.css";

const CleaningServicesPage = () => {
  return (
    <>
      <div className="text-black px-[5%] mt-[60px] flex flex-col gap-[25px] lg:flex lg:mt-[80px]">
        {" "}
        <h1 className="text-[30px] font-bold leading-8 text-[#823ec9] lg:text-[45px]">
          Our Home Cleaning Services
        </h1>{" "}
        <h2 className="font-light text-[28px] lg:text-[35px] lg:tracking-widest">
          Cleaning You Can See & Feel
        </h2>
        <div className="lg:flex">
          {" "}
          <div className={`${styles.imageContainer} flex-1`}>
            {" "}
            <Image
              className={`${styles.image}`}
              src="/cleaning-service-one.png"
              alt=""
              width={500}
              height={200}
            />
          </div>
          <div className="leading-8 lg:leading-[200%] text-justify flex-1 lg:text-[28px]">
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
              With our &quot;Worry Free Guarantee&quot;, you can be sure your
              house will be cleaned the way you want everytime.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />

      <hr className="hidden lg:block h-[20px] text-black border-t-4 border-gray-400 my-9 mx-[5%]" />

      <div className="text-black px-[5%] grid grid-cols-  gap-[40px] lg:gap-[40px] lg:grid-cols-3">
        <div className="flex flex-col gap-[15px]">
          <p className="lg:text-[24px] font-semibold">Apartment Cleaning</p>
          <Image
            className={`${styles.image2}`}
            src="/apartment-service.png"
            alt=""
            width={500}
            height={100}
          />
          <p className="leading-8 tracking-wide text-justify">
            Apartment cleaning is an essential aspect of maintaining a healthy
            and comfortable living space. Whether you&apos;re a busy professional, a
            student, or a family, keeping your apartment clean ensures not only
            an aesthetically pleasing environment but also contributes to your
            overall well-being.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-[15px]">
          <p className="lg:text-[24px] font-semibold">House Cleaning</p>
          <Image
            className={`${styles.image2}`}
            src="/house-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
          <p className="leading-8 tracking-wide text-justify">
            House cleaning is a vital practice that goes beyond mere aesthetics.
            It encompasses a range of tasks and routines designed to maintain a
            home&quot;s cleanliness, orderliness, and functionality. Regular and
            thorough cleaning not only enhances the appearance of your living
            space but also contributes significantly to your health and
            well-being.
          </p>
        </div>
        {/* <div className="flex flex-col gap-[15px]">
          <p className="">Holiday Cleaning</p>
          <Image
            className={`${styles.image2}`}
            src="/holiday-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
        </div> */}

        {/* <div className="flex flex-col gap-[15px]">
          <p className="lg:text-[24px] font-semibold">Detailed Cleaning</p>
          <Image
            className={`${styles.image2}`}
            src="/detailed-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
          <p className="leading-8 tracking-wide text-justify">
            Detailed cleaning, often referred to as deep cleaning, is an
            intensive and thorough cleaning process that goes beyond regular
            housekeeping tasks. Unlike routine cleaning, which focuses on
            maintaining general cleanliness and order, detailed cleaning targets
            hard-to-reach areas, stubborn dirt, and hidden grime. This type of
            cleaning is essential for maintaining a truly clean and healthy
            living environment.
          </p>
        </div> */}

        <div className="flex flex-col gap-[15px] ">
          <p className="lg:text-[24px] font-semibold">
            Kitchen appliance Cleaning
          </p>
          <Image
            className={`${styles.image2}`}
            src="/kitchen-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
          <p className="leading-8 tracking-wide text-justify">
            Kitchen appliance cleaning is a crucial aspect of maintaining a
            hygienic and efficient kitchen. Regular cleaning of appliances such
            as refrigerators, ovens, microwaves, and dishwashers not only
            ensures they operate optimally but also extends their lifespan.
            Clean appliances also contribute to a healthier kitchen environment
            by preventing the buildup of grease, grime, and bacteria.
          </p>
        </div>
        <div className="flex flex-col gap-[15px] lg:">
          <p className="lg:text-[24px] font-semibold">Office Cleaning</p>
          <Image
            className={`${styles.image2}`}
            src="/office-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
          <p className="leading-8 tracking-wide text-justify">
            Office cleaning is a critical aspect of maintaining a productive,
            healthy, and welcoming work environment. A clean office not only
            leaves a positive impression on clients and visitors but also
            enhances employee morale and efficiency. Regular and thorough
            cleaning helps prevent the spread of illnesses, reduces absenteeism,
            and ensures that office equipment functions optimally.
          </p>
        </div>
        <div className="flex flex-col gap-[15px]">
          <p className="lg:text-[24px] font-semibold">Specialty Cleaning</p>
          <Image
            className={`${styles.image2}`}
            src="/specialty-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
          <p className="leading-8 tracking-wide text-justify">
            Specialty cleaning refers to specialized cleaning services that go
            beyond standard cleaning routines to address specific, often more
            challenging, cleaning requirements. These services are designed to
            cater to unique environments, surfaces, or situations that demand
            particular expertise and equipment. Specialty cleaning ensures
            thorough care and maintenance, often necessary for preserving the
            integrity, functionality, and appearance of certain areas or items.
          </p>
        </div>

        <div className="flex flex-col gap-[15px]">
          <p className="lg:text-[24px] font-semibold">Deep Cleaning</p>
          <Image
            className={`${styles.image2}`}
            src="/deep-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
          <p className="leading-8 tracking-wide text-justify">
            Deep cleaning, also known as intensive cleaning or thorough
            cleaning, is a comprehensive and meticulous cleaning process that
            goes beyond regular cleaning routines. It involves cleaning and
            sanitizing all areas of a space, including those that are often
            overlooked during routine cleaning. Deep cleaning is typically
            performed periodically, such as quarterly, biannually, or annually,
            to maintain a high standard of cleanliness and hygiene. This
            thorough cleaning process ensures that dirt, dust, grime, and
            allergens are effectively removed, leaving the space fresh,
            sanitized, and revitalized.
          </p>
        </div>

        <div className="flex flex-col gap-[15px]">
          <p className="lg:text-[24px] font-semibold">Move-in Cleaning</p>
          <Image
            className={`${styles.image2}`}
            src="/movingin-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
          <p className="leading-8 tracking-wide text-justify">
            Move-in cleaning, also known as pre-move-in cleaning, is a
            specialized cleaning service designed to prepare a residential or
            commercial property for new occupants. Whether it&quot;s a newly
            constructed home, a recently vacated apartment, or a commercial
            space, move-in cleaning ensures that the premises are thoroughly
            cleaned and sanitized before the new occupants settle in. This
            comprehensive cleaning process addresses all areas of the property,
            removing dirt, dust, and debris accumulated during construction,
            renovation, or previous occupancy.
          </p>
        </div>
        <div className="flex flex-col gap-[15px]">
          <p className="lg:text-[24px] font-semibold">Move-out Cleaning</p>
          <Image
            className={`${styles.image2}`}
            src="/movingout-cleaning.png"
            alt=""
            width={500}
            height={100}
          />
          <p className="leading-8 tracking-wide text-justify">
            Move-out cleaning, also known as end-of-tenancy cleaning or move-out
            deep cleaning, is a thorough cleaning service performed when tenants
            are moving out of a rental property or homeowners are preparing to
            sell their home. This comprehensive cleaning process ensures that
            the property is left in pristine condition for the next occupants or
            for sale. Move-out cleaning typically involves deep cleaning all
            areas of the property, including living spaces, kitchens, bathrooms,
            and common areas, to remove dirt, grime, and accumulated debris.
          </p>
        </div>
      </div>
      <div className="border-[2px] border-[#26355D] text-[#26355D] mx-[5%] my-[10%] h-[150px] flex flex-col justify-center items-center text-center font-semibold text-[17px] lg:text-[30px]">
        Discover the benefits of a deeply cleaned apartment. Contact us today at
        <span>+1 (872) 235-7202</span>
      </div>
      <button className="bg-[#823ec9] mx-auto flex my-[10%] p-[3%] lg:p-[1%] rounded-[6px] hover:bg-[#fff] hover:text-[#823ec9] lg:text-[20px]">
        Request an Estimate
      </button>
    </>
  );
};

export default CleaningServicesPage;
