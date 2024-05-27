"use client"
import Image from "next/image";
import { Button } from '@nextui-org/button';
import { Card } from "@nextui-org/card";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import React, { useState } from "react";

export default function CandidateCard({ name, image, voteID }: { name: string, image: string, vote: () => void}) {
    const [showModal, setShowModal] = useState(false);
    const {isOpen, onOpen, onOpenChange} = useDisclosure()
    const [size, setSize] = React.useState('5xl')

    const handleCardClick = () => {
        
        console.log("Clicked on " + name);
    };

    const handleVoteClick = () => {
        alert("You picked " + voteID);
        console.log("Voted for " + name + " with ID: " + voteID);
    }

    return (
        <div className="my-8">
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    <ModalHeader>{name}</ModalHeader>
                    <ModalBody>
                        <div className="flex">
                            <Image src={image} width={300} height={200} className="w-1/2" alt={""}/>
                        </div>
                        <h2 className="text-2xl font-bold font-russo-one">Candidate Information</h2>
                        <p>
                            Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit
                            magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit
                            dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia
                            eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit
                            incididunt nisi consectetur esse laborum eiusmod pariatur proident
                            Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button onPress={handleVoteClick}>Vote</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Card className="m-4 transition-all ease-in hover:scale-105" style={{ width: "300px" }}>
                <h2 className="flex flex-row text-center justify-center align-middle p-5 font-bold font-russo-one text-3xl">{name}</h2>
                <Image src={image} width={300} height={200} alt={""} onClick={onOpen}/>
                <Button onPress={handleVoteClick} className="py-10 text-xl font-russo-one">Vote</Button>
            </Card>
        </div>
    );
}