import React from "react";
import "./livingroom.css";
import Image from "next/image";

const LivingRoom = () => {
  return (
    <div className="text-black mt-[80px] mx-[5%]">
      <h2 className="mb-[10px] text-[30px] font-bold leading-8 text-[#823ec9] lg:text-[45px] lg:mb-[30px]">
        Living Room Cleaning
      </h2>
      <div className="md:flex md:mx-[12%] md:gap-[60px]">
        <div className="flex flex-col gap-[20px] ">
          <p className="leading-8 lg:leading-[180%] text-justify lg:text-[20px]">
            Living room cleaning is an essential part of maintaining a clean and
            comfortable home. As one of the most frequently used spaces, the
            living room can quickly accumulate dust, dirt, and clutter. Regular
            and thorough cleaning not only keeps this area looking good but also
            promotes a healthier living environment.
          </p>
          <p className="font-bold text-xl lg:text-[25px]">
            Our trained and professional team members will:
          </p>
          <ul className="list-disc custom-list-disc mx-[10%] flex flex-col gap-[15px]  lg:text-[20px]">
            <li>Clean under furniture and in hard-to-reach areas</li>
            <li>Dust fixtures, baseboards, and blinds</li>
            <li>Use environmentally-friendly products upon request.</li>{" "}
            <li>Implement advanced cleaning techniques</li>
          </ul>
          <p className="hidden md:block leading-8 lg:leading-[180%] text-justify lg:text-[20px]">
            Living room cleaning might seem like a daunting task, but with a
            structured approach and regular maintenance, it becomes much more
            manageable. Keeping this central space clean enhances the comfort
            and beauty of your home.
          </p>
        </div>
        <Image
          className={`my-[30px] md:my-0`}
          src="/living-room-one.png"
          alt="living-room"
          width={500}
          height={500}
        />
        <p className="md:hidden leading-8 lg:leading-[180%] text-justify lg:text-[22px]">
          Living room cleaning might seem like a daunting task, but with a
          structured approach and regular maintenance, it becomes much more
          manageable. Keeping this central space clean enhances the comfort and
          beauty of your home.
        </p>
      </div>

      <div className="md:flex md:mt-[10%] md:mx-[12%] md:gap-[60px]">
        <Image
          className={`my-[15%] md:my-0`}
          src="/living-room-two.png"
          alt="living-room"
          width={500}
          height={500}
        />
        <div>
          {" "}
          <p className="font-bold text-xl lg:text-[25px] mb-5">
            Benefits of a Clean Living Room
          </p>
          <ul className="text-justify leading-8 list-disc custom-list-disc mx-[10%] flex flex-col gap-[15px]  lg:text-[20px]">
            <li>
              <span className="font-semibold">Aesthetics:</span> A clean living
              room is visually appealing and creates a welcoming atmosphere for
              family and guests.
            </li>
            <li>
              <span className="font-semibold">Health:</span> Regular cleaning
              reduces dust, allergens, and germs, contributing to better indoor
              air quality and overall health.
            </li>
            <li>
              <span className="font-semibold">Stress Reduction:</span> A tidy
              and organized space can reduce stress and improve mental
              well-being, providing a peaceful environment to relax in.
            </li>{" "}
          </ul>
        </div>
      </div>

      <div className="cursor-pointer border p-2 font-bold text-center w-[98%] mx-auto text-[#823ec9] mt-[10%] leading-8 lg:text-[25px]">
        Contact us today at <a href="tel:+18474403683"> +1 (847) 440-3683 </a>
        to schedule your first cleaning and discover why Gaily Maids is the
        trusted choice for countless homes and businesses.
      </div>
    </div>
  );
};

export default LivingRoom;
