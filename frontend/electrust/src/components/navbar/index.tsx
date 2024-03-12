import React from 'react';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar: React.FC = () => {
    return (
        <nav className="flex bg-white w-screen h-min sticky">
            <div className="flex w-full">
                <div className="w-16 h-16 border-white border-1 my-5 rounded-full overflow-hidden ml-8">
                    <Image src="/electrust-logo.svg" className="w-full h-full justify-center text-center" alt="Electrust Logo" width={100} height={100} />
                </div>
                <h1 className="text-4xl font-bold font-sans ml-5 my-8 text-mikadoYellow">Electrust</h1>
            </div>
            <div className="buttons text-black font-mono flex w-full mr-10">
                <button className='hover:bg-blue-600 w-full transition-all'>About</button>
                <button className='hover:bg-red-500 w-full transition-all'>How Does it Work</button>
                <button className='hover:bg-green-600 w-full transition-all'>Check Integrity</button>
                <button className='hover:bg-yellow-400 w-full transition-all'>Contact Us</button>
                <div className="flex min-w-fit w-full">
                    <button className='hover:bg-orange-600 w-full' onClick={() => signIn('google')}>Sign In with Google</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;