"use client"
import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ElectionCard from "@/components/election-card";

export default function ElectionList() {
    const elections = [
        { name: "Presidential Election", description: "Choose your president" },
        { name: "Parliament Election", description: "Choose your parliament representatives" },
        { name: "City Mayor Election", description: "Choose your city mayor" },
    ];

    // Dummy onSelect function
    const handleElectionSelect = () => {
        
    };

    return (
        <div>
            <Navbar />
            <div className="bg-oxfordBlue w-full">
                <div className="h-fit min-h-screen flex flex-col justify-center items-center text-justify mt-20 pt-10">
                    <h1 className="text-4xl font-bold font-russo-one text-mikadoYellow">Select Your Election Event</h1>
                    <div className="flex flex-wrap justify-center mt-6">
                        {elections.map((election, index) => (
                            <ElectionCard 
                                key={index} 
                                name={election.name} 
                                description={election.description} 
                                onSelect={handleElectionSelect} // Pass onSelect prop
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
