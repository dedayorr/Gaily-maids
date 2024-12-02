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
          At Gaily Maids, we&apos;re more than just a cleaning
          service—we&apos;re a family-owned business committed to making your
          home a sanctuary. As a family, we understand the value of a clean,
          stress-free space where life&apos;s best moments happen. That&apos;s
          why we bring care, attention to detail, and a personal touch to every
          service we provide.
        </p>
        <p className="about leading-8 lg:leading-[180%] text-justify lg:text-[20px]">
          When you choose Gaily Maids, you&apos;re not just hiring a cleaning
          team—you&apos;re joining a community that values trust, reliability,
          and excellence. We treat your home as if it were our own, ensuring
          every corner shines and every client feels valued.
        </p>
        <p className="about leading-8 lg:leading-[180%] text-justify lg:text-[20px]">
          Whether you need a one-time deep clean, recurring maintenance, or help
          with those tricky tasks, we&apos;re here to make life easier—so you
          can focus on what matters most.
        </p>
      </div>
      {/* <Image className="about" src="/deep-cleaning.png" alt="/" height={100} width={100}/> */}
      <div
        className="text-black mx-[5%] mt-10
      "
      >
        {" "}
        <h2 className=" text-[25px] font-bold text-[#823ec9] mb-5"> Our Story</h2>
        <p className="leading-8 lg:leading-[180%] text-justify lg:text-[20px] mb-5">
          {" "}
          Gaily Maids began as a vision from our founder, Abigail Thompson, to
          bring peace and order into the homes of busy families and
          professionals. As a family-owned business, our story is rooted in a
          desire to serve others with excellence, care, and integrity.
        </p>
        <p className="leading-8 lg:leading-[180%] text-justify lg:text-[20px] mb-5">
          {" "}
          Abigail&apos;s passion for creating clean, welcoming spaces inspired
          her to build a company that doesn&apos;t just clean homes but
          transforms them into places of comfort and joy. With the support of
          her family and a heart for service, Gaily Maids was born to meet the
          needs of clients who value both quality and a personal touch.
        </p>
        <p className="leading-8 lg:leading-[180%] text-justify lg:text-[20px] mb-5">
          {" "}
          From humble beginnings to a trusted name in the community, we&apos;ve
          remained committed to our core values: honesty, reliability, and
          attention to detail.
        </p>
        <p className="leading-8 lg:leading-[180%] text-justify lg:text-[20px] mb-5">
          {" "}
          Every service we provide is a reflection of our family&apos;s
          dedication to making your life easier and your home a place
          you&apos;re proud of.
        </p>
        <p className="leading-8 lg:leading-[180%] text-justify lg:text-[20px]">
          {" "}
          Join the Gaily Maids family today—because a clean home is the
          foundation for a happy life.
        </p>
      </div>

      <div
        className="text-black mx-[5%] mt-10
      "
      >
        {" "}
        <h2 className=" text-[25px] font-bold text-[#823ec9] mb-5"> Our Mission</h2>
        <p className="leading-8 lg:leading-[180%] text-justify lg:text-[20px] mb-5">
          {" "}
          At Gaily Maids, our mission is to provide exceptional cleaning
          services that exceed your expectations and create a joyful and healthy
          environment for you and your loved ones. We believe in the power of a
          clean space to enhance productivity, improve well-being, and bring
          peace of mind.
        </p>
        <p className="leading-8 lg:leading-[180%] text-justify lg:text-[20px] mb-5">
          {" "}
          At Gaily Maids, our mission is to provide exceptional cleaning
          services that exceed your expectations and create a joyful and healthy
          environment for you and your loved ones. We believe in the power of a
          clean space to enhance productivity, improve well-being, and bring
          peace of mind.
        </p>
        <p className="leading-8 lg:leading-[180%] text-justify lg:text-[20px] mb-5">
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
