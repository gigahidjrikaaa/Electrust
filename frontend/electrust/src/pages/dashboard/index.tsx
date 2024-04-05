"use client"
import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { button } from '@nextui-org/react';
import React from "react";

export default function Dashboard() {
    return (
        <div>
            <Navbar />
            <div className="bg-oxfordBlue w-full">
                <div className="h-screen flex flex-col justify-center items-center text-justify mt-20">
                    <h1 className="text-4xl font-bold font-russo-one text-mikadoYellow">Welcome to the Dashboard</h1>
                    <p className="text-white text-center">This is the dashboard where you can view all your data</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}