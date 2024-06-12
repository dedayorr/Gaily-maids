import React from "react";
import Image from "next/image";

const aboutus = () => {
  return (
    <>
      <div className="text-black mx-[5%] flex flex-col gap-[20px]">
        <h1 className=" text-[30px] mt-[80px] font-bold leading-8 text-[#823ec9] lg:text-[45px]">
          About Us
        </h1>
        <p className="leading-8 lg:leading-[180%] text-justify lg:text-[20px]">
          Welcome to Gaily Maids, where cleanliness meets joy! We are a
          dedicated team of professional cleaners passionate about transforming
          your space into a pristine and inviting haven. Founded on the
          principles of excellence, reliability, and attention to detail, Gaily
          Maids is your trusted partner for all your cleaning needs.
        </p>
        <p className="about leading-8 lg:leading-[180%] text-justify lg:text-[20px]">
          Our house cleaning services cover every inch of your space. We can
          freshen up your bathroom, invigorate your kitchen, and restore your
          bedroom to ensure you have the beautiful and clean home you deserve.
          We&apos;ll get deep into the corners and crevices to rid your space of
          any dust, germs, and bacteria to deliver a home that is both spotless
          and healthy.
        </p>
      </div>
      {/* <Image className="about" src="/deep-cleaning.png" alt="/" height={100} width={100}/> */}
      <div
        className="text-black mx-[5%] mt-10
      "
      >
        {" "}
        <h2 className=" text-[25px] font-bold text-[#823ec9]"> Our Story</h2>
        <p className="leading-8 lg:leading-[180%] text-justify lg:text-[20px]">
          {" "}
          Gaily Maids was born out of a simple belief: a clean environment
          contributes to a happy and healthy life. Our founder, Abigail
          Thompson, envisioned a service that not only met the highest standards
          of cleanliness but also brought a touch of happiness to every home and
          office we serve. With years of experience in the cleaning industry,
          gathered a team of like-minded professionals who share a commitment to
          quality and customer satisfaction.
        </p>
      </div>

      <div
        className="text-black mx-[5%] mt-10
      "
      >
        {" "}
        <h2 className=" text-[25px] font-bold text-[#823ec9]"> Our Mission</h2>
        <p className="leading-8 lg:leading-[180%] text-justify lg:text-[20px]">
          {" "}
          At Gaily Maids, our mission is to provide exceptional cleaning
          services that exceed your expectations and create a joyful and healthy
          environment for you and your loved ones. We believe in the power of a
          clean space to enhance productivity, improve well-being, and bring
          peace of mind.
        </p>
      </div>
    </>
  );
};

export default aboutus;
