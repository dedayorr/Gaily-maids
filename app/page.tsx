"use client";
import Offers from "./components/contents/ServicesOffered/Offers";
import Process from "./components/contents/Process/Process";
import Hero from "./components/contents/HeroSection/Hero";
import EmbraceHealth from "./components/contents/EmbraceHealth/EmbraceHealth";
import Faq from "./components/contents/FAQ/Faq";
import Image from "next/image";
import { useState } from "react";
import OfferPopup from "./offerPopUp/OfferPopup";

export default function Home() {
  const [openOffer, setOpenOffer] = useState(false);
  const closeModal = () => {
    setOpenOffer(false);
  };
  return (
    <main className="text-black ">
      <div className="lg:text-[20px]">
        {/* <div className="bg-[#6b9ff9] h-[70px] w-[70px] fixed right-0 top-[50%] rounded-lg text-[20px] font-bold text-white">
Click For Offer
       </div> */}
        {/* <Image
          onClick={() => setOpenOffer(true)}
          className="fixed right-0 bottom-[5%]"
          src="/specialOffer.png"
          height={300}
          width={130}
          alt=""
        /> */}
        <Image
          onClick={() => setOpenOffer(true)}
          className="fixed right-0 bottom-[5%] shadow-lg lg:w-[180px] lg:bottom-[15%]"
          src="/specialOffer2.png"
          height={300}
          width={130}
          alt=""
        />
        {openOffer && <OfferPopup closeModal={closeModal} />}

        <Hero />
        <Offers />
        <Process />
        <EmbraceHealth />
        <Faq />
        {/* <Link href="/users">about us</Link> */}
      </div>
    </main>
  );
}
