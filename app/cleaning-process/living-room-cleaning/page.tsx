import React from "react";
import "./livingroom.css";
import Image from "next/image";

const LivingRoom = () => {
  return (
    <div className="text-black mt-[80px] mx-[5%]">
      <h2 className="mb-[10px] text-[30px] font-bold leading-8 text-[#823ec9] lg:text-[45px]">
        Living Room Cleaning
      </h2>
      <div>
        <div className="flex flex-col gap-[20px]">
          <p className="leading-8 lg:leading-[180%] text-justify lg:text-[22px]">
            Living room cleaning is an essential part of maintaining a clean and
            comfortable home. As one of the most frequently used spaces, the
            living room can quickly accumulate dust, dirt, and clutter. Regular
            and thorough cleaning not only keeps this area looking good but also
            promotes a healthier living environment.
          </p>
          <p className="font-bold text-xl">
            Our trained and professional team members will:
          </p>
          <ul className="list-disc custom-list-disc mx-[10%] flex flex-col gap-[15px]">
            <li>Clean under furniture and in hard-to-reach areas</li>
            <li>Dust fixtures, baseboards, and blinds</li>
            <li>Use environmentally-friendly products upon request.</li>{" "}
            <li>Implement advanced cleaning techniques</li>
          </ul>
        </div>
        <Image
          className={`my-[30px] md:my-0`}
          src="/cleanprocess.png"
          alt=""
          width={500}
          height={500}
        />
        <p className="leading-8 lg:leading-[180%] text-justify lg:text-[22px]">
          Living room cleaning might seem like a daunting task, but with a
          structured approach and regular maintenance, it becomes much more
          manageable. Keeping this central space clean enhances the comfort and
          beauty of your home.
        </p>
      </div>
    </div>
  );
};

export default LivingRoom;
