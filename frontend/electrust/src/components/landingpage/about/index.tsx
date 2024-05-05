"use client";
import "aos/dist/aos.css";

export default function About() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-justify mt-20 bg-gray-100">
      <div data-aos="fade-down" className="text-white">
        <h1 className="font-bold font-russo-one text-6xl">About</h1>
        <div className="font-sans text-2xl text-center max-w-md">
          <p>Welcome to Electrust! Electrust is a secure, transparent, and accessible application that aims to provide trustworthy voting services to its users.</p>
          <p>Our mission is to ensure the integrity and security of your data while providing a seamless user experience.</p>
          <p>Join us on our journey to revolutionize trust in the digital world!</p>
        </div>
      </div>
    </div>
  );
}
