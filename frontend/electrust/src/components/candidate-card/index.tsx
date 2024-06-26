"use client"
import Image from "next/image";
import { Button } from '@nextui-org/button';
import { Card } from "@nextui-org/card";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import React, { useState } from "react";

export default function CandidateCard({ name, image, voteID }: { name: string, image: string, voteID: string}) {
    const [showModal, setShowModal] = useState(false);
    const {isOpen, onOpen, onOpenChange} = useDisclosure()

    const handleCardClick = () => {
        console.log("Clicked on " + name);
    };

    const handleVoteClick = () => {
        alert("Voted for " + name + " with ID: " + voteID);
        console.log("Voted for " + name + " with ID: " + voteID);

        // Close the modal
        onOpenChange()
    }

    return (
        <div className="my-8">
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" className="max-h-unit-9xl" scrollBehavior="inside">
                <ModalContent>
                    <ModalHeader className="justify-center text-center font-russo-one text-3xl">{name}</ModalHeader>
                    <ModalBody>
                        <div className="flex flex-row overflow-hidden max-h-unit-7xl">
                            <Image src={image} width={200} height={100} className="w-full h-auto aspect-auto rounded-xl" alt={""}/>
                            <div className="flex flex-col mx-6 overflow-auto">
                                {/* Fetch dari backend */}
                                <h2 className="text-2xl font-bold font-russo-one text-justify my-3">Candidate Information</h2>
                                <p>
                                    Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit
                                    magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit
                                    dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia
                                    eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit
                                    incididunt nisi consectetur esse laborum eiusmod pariatur proident
                                    Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                                </p>
                                <h2 className="text-2xl font-bold font-russo-one text-justify my-3">Political Party</h2>
                                <p>
                                    Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
                                    ullamco deserunt aute id consequat veniam incididunt duis in sint
                                    irure nisi.
                                </p>
                                <h2 className="text-2xl font-bold font-russo-one text-justify my-3">Vision</h2>
                                <p>
                                    <ul>
                                        <li>First Vision</li>
                                        <li>Second Vision</li>
                                        <li>Third Vision</li>
                                    </ul>
                                </p>
                                <h2 className="text-2xl font-bold font-russo-one text-justify my-3">Mission</h2>
                                <p>
                                    <ul>
                                        <li>First Mission</li>
                                        <li>Second Mission</li>
                                        <li>Third Mission</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter className="justify-center">
                        <Button onPress={handleVoteClick} size="lg" color="danger">Vote</Button>
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