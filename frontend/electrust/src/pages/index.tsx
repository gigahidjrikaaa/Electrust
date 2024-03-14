"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "@/components/landingpage/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div data-aos="fade-down" className="bg-oxfordBlue w-full">
        <div className="h-screen flex flex-col justify-center items-center text-justify mt-20">
        </div>
      </div>
      <Footer />
    </div>
  );
}
