"use client";
import React from 'react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Button } from '@nextui-org/button';


const ErrorPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-black h-screen w-full mt-0 flex flex-col justify-center items-center text-justify">
                <h1 className='text-5xl pt-10 text-mikadoYellow font-russo-one'>Error 404</h1>
                <p className='text-xl py-5'>Page not found.</p>
                <Button color='primary' className='hover:bg-mikadoYellow hover:text-oxfordBlue w-1/5 py-10 mb-8 mt-4 text-3xl font-bold' onClick={() => window.location.href = '/'}>Go Back</Button>
            </div>
            <Footer />
        </div>
    );
};

export default ErrorPage;