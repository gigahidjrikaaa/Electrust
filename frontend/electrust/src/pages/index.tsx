"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div data-aos="fade-down">     
      <Navbar />
      <div className="h-screen flex flex-col justify-center items-center text-justify">
        <h1 className="font-bold font-sans text-6xl">Electrust</h1>
        <p className="font-sans text-2xl">A secure and transparent voting system</p>
        <Image src="/logo.svg" className="justify-center text-center mt-12" alt="Electrust Logo" width={100} height={100} />
        <Footer />
      </div>
    </div>
  );
}
