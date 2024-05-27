"use client"
import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from '@nextui-org/button';
import { Card } from "@nextui-org/react";
import { BrowserWallet } from "@meshsdk/core";
import CandidateCard from "@/components/candidate-card";
import React, { useState } from "react";
import Modal from "@/components/modal";

export default function Dashboard() {
    const [open, setOpen] = useState(false);
    
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
                        <CandidateCard name="Choice 1" image="/cand1.jpg" vote={() => {}}/>
                        <CandidateCard name="Choice 2" image="/cand2.jpg" vote={() => {}} />
                        <CandidateCard name="Choice 3" image="/cand3.jpg" vote={() => {}} />

                    </div>
                    
                   
                </div>
                <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl">Modal Title</h1>
          <p>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi.
          </p>
          <p>
            Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit
            magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit
            dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia
            eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit
            incididunt nisi consectetur esse laborum eiusmod pariatur proident
            Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
          </p>
          <hr className="border-t-solid border-1 border-grey" />
          <div className="flex flex-row justify-center">
            <button
              className="border border-neutral-300 rounded-lg py-1.5 px-10
               bg-blue-500 hover:bg-blue-600 text-white"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
                
            </div>
            <Footer />

        </div>
    );
}