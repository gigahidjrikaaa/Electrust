"use client"
import Image from "next/image";
import { Button } from '@nextui-org/button';
import { Card } from "@nextui-org/card";
import { Modal } from "@nextui-org/modal";
import React, { useState } from "react";

export default function CandidateCard({ name, image, vote }: { name: string, image: string, vote: () => void}) {
    const [showModal, setShowModal] = useState(false);

    const handleCardClick = () => {
        setShowModal(true);
        console.log("Clicked on " + name);
    };

    vote = () => {
        console.log("Voted for " + name);
    }

    return (
        <div>
            <Card className="m-4 transition-all ease-in hover:scale-105" style={{ width: "300px" }}>
                <h2 className="flex flex-row text-center justify-center align-middle p-5 font-bold font-russo-one text-3xl">{name}</h2>
                <Image src={image} width={300} height={200} alt={""} onClick={handleCardClick}/>
                <Button onPress={vote} className="py-10 text-xl font-russo-one">Vote</Button>
            </Card>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} className="w-1/2 h-3/4 bg-white rounded-xl">
                    <h1>{name}</h1>
                </Modal>
            )}
        </div>
    );
}