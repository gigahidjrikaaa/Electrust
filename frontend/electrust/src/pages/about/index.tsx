"use client"
import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { button } from '@nextui-org/react';
import React from "react";
import { BrowserWallet } from "@meshsdk/core";

export default function About() {
    return (
      <div>
        <Navbar />
        <div className="bg-oxfordBlue w-full h-screen flex flex-col justify-center items-center text-center">
          <div data-aos="fade-down" className="text-white">
            <h1 className="text-4xl font-bold font-russo-one text-mikadoYellow">About</h1>
            <div className="text-white text-center max-w-md mt-8">
              <p>Welcome to Electrust! This platform is a secure, transparent, and accessible application that aims to provide trustworthy voting services to its users.
              Our mission is to ensure the integrity and security of your data while providing a seamless user experience.
              Join us on our journey to revolutionize trust in the digital world!</p>
            </div>
          </div>
        </div>
  
        <div className="bg-gray-200 py-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-black">Meet Our Developers</h2>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center transform rotate-[-5deg] hover:rotate-0 transition duration-300">
              <Image src="/cand1.jpg" alt="Developer 1" width={200} height={200} className="rounded-full" />
              <p className="mt-4 font-semibold text-oxfordBlue">Giga Hidjrika Aura Adkhy</p>
              <p className="font-semibold text-oxfordBlue">21/473893/TK/52247</p>
            </div>
            <div className="text-center transform rotate-[5deg] hover:rotate-0 transition duration-300">
              <Image src="/cand1.jpg" alt="Developer 2" width={200} height={200} className="rounded-full" />
              <p className="mt-4 font-semibold text-oxfordBlue">Ahmad Fauzan</p>
              <p className="font-semibold text-oxfordBlue">21/473893/TK/52247</p>
            </div>
            <div className="text-center transform rotate-[-5deg] hover:rotate-0 transition duration-300">
              <Image src="/fotokrisna.jpg" alt="Developer 3" width={200} height={200} className="rounded-full" />
              <p className="mt-4 font-semibold text-oxfordBlue">Johanes de Britto Krisna Arianta</p>
              <p className="font-semibold text-oxfordBlue">21/473893/TK/52247</p>
            </div>
          </div>
        </div>
  
        <Footer />
      </div>
    );
  }