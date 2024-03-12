"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@nextui-org/button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <div data-aos="fade-down">     
        <div className="h-screen flex flex-col justify-center items-center text-justify mt-20">
          <div className="w-56 h-56 border-white border-2 mb-4 rounded-full overflow-hidden">
            <Image src="/electrust-logo.svg" className="w-full h-full justify-center text-center" alt="Electrust Logo" width={100} height={100} />
          </div>
          <h1 className="font-bold font-russo-one text-6xl">Electrust</h1>
          <p className="font-sans text-2xl">Secure, Transparent, Accessible.</p>      
          <Button color="primary" className="my-10 w-fit text-xl px-20 py-8 font-russo-one">Get Started</Button>
        </div>
      </div>
      <div data-aos="fade-down" className="bg-oxfordBlue w-full">
        <div className="h-screen flex flex-col justify-center items-center text-justify mt-20">
        </div>
      </div>
      <Footer />
    </div>
  );
}
