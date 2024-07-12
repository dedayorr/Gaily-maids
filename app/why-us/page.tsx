import React from "react";
import Image from "next/image";
import "./whyUS.css";

const WhyUs = () => {
  return (
    <div className="text-black mx-[5%] ">
      <div className="insured-banner mt-[15%] italic lg:mx-[25%]">
        Gaily Maids is Fully Insured and bonded for Your Peace of Mind
      </div>

      <h1 className="text-[30px] leading-8 text-[#823ec9] mt-[50px] lg:text-[45px] font-bold lg:mx-[25%] lg:mt-[60px]">
        Why Choose Gaily Maids?
      </h1>
      <p className="mt-[3%] text-justify leading-8 lg:text-[20px] lg:mx-[25%]">
        <span className="font-bold text-[20px]">Professionalism:</span> Our team
        of trained and experienced cleaners is dedicated to delivering the
        highest standards of service with a friendly and professional attitude.
      </p>
      <div className="mt-[3%] lg:mx-[25%]">
        <span className="font-bold text-[20px]">
          Customized Cleaning Plans:
        </span>
        <p className="text-justify leading-8  lg:text-[20px]">
          {" "}
          We understand that every home and office is unique. That&apos;s why we
          offer personalized cleaning plans tailored to your specific needs and
          preferences.
        </p>
      </div>
      <p className="mt-[3%] text-justify leading-8  lg:text-[20px] lg:mx-[25%]">
        <span className="font-bold text-[20px]">Eco-Friendly Products:</span> We
        care about your health and the environment. Our cleaning products are
        eco-friendly and safe, ensuring a clean and green space for you.
      </p>
      <p className="mt-[3%] text-justify leading-8  lg:text-[20px] lg:mx-[25%]">
        <span className="font-bold text-[20px]">Reliability:</span> We pride
        ourselves on our reliability and consistency. You can count on Gaily
        Maids to arrive on time and provide thorough, detailed cleaning every
        time.
      </p>
      <p className="mt-[3%] text-justify leading-8  lg:text-[20px] lg:mx-[25%]">
        <span className="font-bold text-[20px]">Satisfaction Guaranteed: </span>{" "}
        Your satisfaction is our top priority. If you&apos;re not completely
        happy with our service, we will make it right.
      </p>
      <Image
        className="why my-[7%] mx-auto lg:mx-[25%]"
        src="/why.png"
        alt="why-us"
        height={500}
        width={500}
      />

      <p className="text-justify leading-8  lg:text-[20px] lg:mx-[25%]">
        Experience the joy of a spotless space with Gaily Maids. Whether you
        need a one-time deep clean or regular maintenance, we are here to make
        your life easier and more enjoyable. Let us take care of the cleaning so
        you can focus on what matters most to you.
      </p>

      <div className="border p-2 font-bold text-center w-[98%] mx-auto border-[#26355D] text-[#26355D] mt-[10%] leading-8  lg:text-[30px] lg:p-8">
        Contact us today at <a href="tel:+1-872-235-7202"> +1-872-235-7202 </a>
        to schedule your first cleaning and discover why Gaily Maids is the
        trusted choice for countless homes and businesses.
      </div>
    </div>
  );
};

export default WhyUs;
