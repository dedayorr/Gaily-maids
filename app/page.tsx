import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
// import Services from "./components/contents/services";
import Offers from "./components/contents/ServicesOffered/Offers";
import Process from "./components/contents/Process/Process";
import Hero from "./components/contents/HeroSection/Hero";
import EmbraceHealth from "./components/contents/EmbraceHealth/EmbraceHealth";
import Faq from "./components/contents/FAQ/Faq";

export default function Home() {
  return (
    <main className="text-black ">
      <div className="lg:text-[20px]">
       
        <Hero/>
        <Offers />
        <Process/>
        <EmbraceHealth/>
        <Faq/>
        {/* <Link href="/users">about us</Link> */}
        
      </div>
    </main>
  );
}
