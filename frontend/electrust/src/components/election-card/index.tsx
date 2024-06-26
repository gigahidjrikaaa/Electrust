"use client"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import React, { use, useEffect, useState } from "react";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { useDisclosure } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/router";
import { Button } from "@nextui-org/button";

export default function ElectionCard({ name, description, electionID, imageURL }: { name: string, description: string, electionID: string, imageURL: string}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure()
    const router = useRouter();

    const handleCardClick = () => {
        onOpen();
        // alert("You clicked the card!")
    };

    const redirectToVotePage = () => {
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/vote/${electionID}`)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.error(err);
        });

        router.push(`/election/${electionID}`);
    };

    return (
        <div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" className="max-h-unit-9xl" scrollBehavior="inside">
                <ModalContent>
                    <ModalHeader className="justify-center text-center font-russo-one text-3xl">{name}</ModalHeader>
                    <ModalBody>
                        <div>
                            <Image src={imageURL} alt="Election" width={200} height={200} />
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Card 
                className="m-4 transition-all ease-in hover:scale-105 cursor-pointer hover:fill-mikadoYellow hover:text-white" 
                style={{ width: "900px" }} 
                onPress={handleCardClick}
                isPressable={true}
            >
                <CardHeader className="flex flex-row justify-center align-middle">
                    <h1 className="flex flex-row text-center justify-center align-middle p-1 font-bold font-russo-one text-2xl">{name}</h1>
                </CardHeader>
                <Divider />
                <CardBody className="flex flex-row justify-center align-top py-5">
                    <div className="w-1/2 justify-center align-middle items-center flex">
                        <Image src={imageURL} alt="Election" width={200} height={200} />
                    </div>
                    <div className="w-1/2 text-lg pr-5">
                        <p className="">{description}</p>
                    </div>
                </CardBody>
                <CardFooter className="flex flex-row justify-center align-middle">
                    <Button onClick={redirectToVotePage} color="primary" className="w-full py-6 font-bold font-russo-one text-xl mx-4 mb-2" >View Election</Button>
                </CardFooter>
            </Card>
            
        </div>
    );
}
