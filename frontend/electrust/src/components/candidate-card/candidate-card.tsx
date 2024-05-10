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
    };

    vote = () => {
        console.log("Voted");
    }

    return (
        <div>
            <Card className="m-4 transition-all ease-in hover:scale-105" style={{ width: "300px" }} onClick={handleCardClick}>
                <h2 className="flex flex-row text-center justify-center align-middle p-5 font-bold font-russo-one text-3xl">{name}</h2>
                <Image src={image} width={300} height={200} alt={""} />
                <Button onPress={vote} className="py-10 text-xl font-russo-one">Vote</Button>
            </Card>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <h1>{name}</h1>
                </Modal>
            )}
        </div>
    );
}