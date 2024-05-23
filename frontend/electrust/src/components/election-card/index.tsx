"use client"
import { Card } from "@nextui-org/card";
import { Modal } from "@nextui-org/modal";
import React, { useState } from "react";

export default function ElectionCard({ name, description, onSelect }: { name: string, description: string, onSelect: () => void }) {
    const [showModal, setShowModal] = useState(false);

    const handleCardClick = () => {
        onSelect();
        setShowModal(true);
        console.log("Selected election: " + name);
    };

    return (
        <div>
            <Card 
                className="m-4 transition-all ease-in hover:scale-105 cursor-pointer" 
                style={{ width: "900px" }} 
                onClick={handleCardClick}
            >
                <h2 className="flex flex-row text-center justify-center align-middle p-5 font-bold font-russo-one text-3xl">{name}</h2>
                <p className="p-5 text-center">{description}</p>
            </Card>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} className="w-1/2 h-3/4 bg-white rounded-xl">
                    <h1 className="text-3xl font-bold font-russo-one">{name}</h1>
                    <p className="p-5 text-center">{description}</p>
                </Modal>
            )}
        </div>
    );
}
