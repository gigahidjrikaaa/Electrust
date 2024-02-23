"use client"
import React from 'react';
import Head from 'next/head';

const AboutPage: React.FC = () => {
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>
            <main>
                <h1 className="text-4xl font-bold">About Page</h1>
                <p className="text-lg mt-4">
                    Welcome to the About page of our website!
                </p>
            </main>
        </div>
    );
};

export default AboutPage;