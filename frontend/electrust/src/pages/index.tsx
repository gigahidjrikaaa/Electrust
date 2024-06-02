"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "@/components/landingpage/hero";
import ChatbotIframe from "@/components/chatbot";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <div className="bg-blackBlue w-full min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        <div data-aos="fade-down" className="text-white">
          <h1 className="text-4xl font-bold font-russo-one text-mikadoYellow">About</h1>
          <div className="text-white text-center justify-center items-center w-1/2 mt-8 m-auto">
            <p>Welcome to Electrust! This platform is a secure, transparent, and accessible application that aims to provide trustworthy voting services to its users.</p>
            <p>Our mission is to ensure the integrity and security of your data while providing a seamless user experience.</p>
            <p>Join us on our journey to revolutionize trust in the digital world!</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-20">
        <h2 className="text-3xl font-bold  font-russo-one text-center mb-10 text-oxfordBlue">Meet Our Developers</h2>
        <div className="flex justify-center items-center space-x-8">
          <div className="text-center transform rotate-[-5deg] hover:rotate-0 transition duration-300">
            <Image src="/cand1.jpg" alt="Developer 1" width={200} height={200} className="rounded-full" />
            <p className="mt-4 font-semibold text-oxfordBlue">Giga Hidjrika Aura Adkhy</p>
            <p className="font-semibold text-oxfordBlue">21/473893/TK/52247</p>
          </div>
          <div className="text-center transform rotate-[5deg] hover:rotate-0 transition duration-300">
            <Image src="/cand10.jpg" alt="Developer 2" width={200} height={200} className="rounded-full" />
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
      <ChatbotIframe />
      <Footer />
    </div>
  );
}
