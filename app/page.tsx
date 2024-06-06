import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
// import Services from "./components/contents/services";
import Offers from "./components/contents/Offers";
import Process from "./components/contents/Process";

export default function Home() {
  return (
    <main className="text-black ">
      <div>
        <Header />
        <Offers />
        <Process/>
        {/* <Link href="/users">about us</Link> */}
        {/* <Link href="/whyUs">Why us</Link> */}
      </div>
    </main>
  );
}
