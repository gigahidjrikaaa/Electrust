import React from 'react';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar: React.FC = () => {
    return (
        
        <nav className="flex bg-white w-screen h-min sticky">
            <div className="logo flex bg-gray-500 h-full w-full items-center text-center">
                <Image src="/logo.png" alt="Electrust Logo Here" width={10} height={0} className='h-20 w-20 ml-10 min-w-min bg-slate-800 items-center text-center justify-center flex'/>
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