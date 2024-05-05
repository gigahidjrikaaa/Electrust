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

export default function Dashboard() {
    return (
        <div>
            <Navbar />
            <div className="bg-oxfordBlue w-full">
                <div className="h-screen flex flex-col justify-center items-center text-justify mt-20">
                    <h1 className="text-4xl font-bold font-russo-one text-mikadoYellow">Voting</h1>
                    <p className="text-white text-center">Vote your choices here!</p>
                    <div className="flex flex-row justify-center items-center h-2/3">
                        <Card className="m-4" style={{ width: "300px" }}>
                            <h2>Choice 1</h2>
                            <Button>Vote</Button>
                        </Card>
                        <Card className="m-4" style={{ width: "300px" }}>
                            <h2>Choice 2</h2>
                            <Button>Vote</Button>
                        </Card>
                        <Card className="m-4" style={{ width: "300px" }}>
                            <h2>Choice 3</h2>
                            <Button>Vote</Button>
                        </Card>
                    </div>
                </div>
                
            </div>
            <Footer />
        </div>
    );
}