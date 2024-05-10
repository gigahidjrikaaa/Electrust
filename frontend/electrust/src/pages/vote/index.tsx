"use client"
import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from '@nextui-org/button';
import { Card } from "@nextui-org/react";
import React from "react";
import { BrowserWallet } from "@meshsdk/core";
import CandidateCard from "@/components/candidate-card";

export default function Dashboard() {
    return (
        <div>
            <Navbar />
            <div className="bg-oxfordBlue w-full">
                <div className="h-fit min-h-screen flex flex-col justify-center items-center text-justify mt-20 pt-10">
                    <h1 className="text-4xl font-bold font-russo-one text-mikadoYellow">Voting Page</h1>
                    <div className="election-name flex flex-col justify-center items-center mt-4">
                        <h2 className="text-white text-2xl font-bold font-russo-one">Election Name</h2>
                        <p className="text-white text-center">This is the election description</p>
                    </div>

                    <div className="flex flex-row justify-center items-center h-full">
                        <CandidateCard name="Choice 1" image="/cand1.jpg" vote={() => {}} />
                        <CandidateCard name="Choice 2" image="/cand2.jpg" vote={() => {}} />
                        <CandidateCard name="Choice 3" image="/cand3.jpg" vote={() => {}} />
                    </div>
                </div>
                
            </div>
            <Footer />
        </div>
    );
}