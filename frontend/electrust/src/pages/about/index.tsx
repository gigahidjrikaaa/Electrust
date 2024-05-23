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
              <p>Welcome to Electrust! This platform is a secure, transparent, and accessible application that aims to provide trustworthy voting services to its users.</p>
              <p>Our mission is to ensure the integrity and security of your data while providing a seamless user experience.</p>
              <p>Join us on our journey to revolutionize trust in the digital world!</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }