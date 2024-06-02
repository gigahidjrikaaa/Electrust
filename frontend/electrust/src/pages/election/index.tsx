"use client"
import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ElectionCard from "@/components/election-card";

export default function ElectionList() {
    const elections = [
        { name: "Presidential Election", description: "Choose your president of the Republic of Indonesia for the 2024 - 2029 period.", electionID: "1", imageURL: "/election.webp"},
        { name: "Parliament Election", description: "Choose your Indonesian parliament representatives. This election is for the DPR.", electionID: "2", imageURL: "/election.webp"},
        { name: "City Mayor Election", description: "Choose your city mayor.", electionID: "3", imageURL: "/election.webp"},
    ];

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
                                electionID={election.electionID}
                                imageURL={election.imageURL}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
