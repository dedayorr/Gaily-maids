import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
// import Services from "./components/contents/services";
import Offers from "./components/contents/Offers";
import Process from "./components/contents/Process";
import Hero from "./components/contents/HeroSection/Hero";

export default function Home() {
  return (
    <main className="text-black ">
      <div>
       
        <Hero/>
        <Offers />
        <Process/>
        <Link href="/users">about us</Link>
        
      </div>
    </main>
  );
}
