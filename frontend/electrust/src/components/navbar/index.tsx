import React from 'react';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import { link } from 'fs';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="flex bg-oxfordBlue w-screen h-min fixed top-0 z-50">
            <div className="flex w-full">
                <div className="w-16 h-16 border-white border-1 my-5 rounded-full overflow-hidden ml-8">
                    <Image src="/electrust-logo.svg" className="w-full h-full justify-center text-center" alt="Electrust Logo" width={100} height={100} />
                </div>
                <h1 className="text-4xl font-bold font-russo-one ml-5 my-8 text-mikadoYellow">Electrust</h1>
            </div>
            <div className="buttons text-white font-russo-one flex w-full mr-10">
                <div className="flex w-full text-wrap">
                    <Link className="hover:bg-yaleBlue w-full transition-all flex" href="/">
                        <button className='hover:bg-yaleBlue w-full transition-all'>Home</button>
                    </Link>
                    {/* <button className='hover:bg-yaleBlue w-full'>Sign In</button> */}
                </div>
                <div className="flex w-full text-wrap">
                    <Link className="hover:bg-yaleBlue w-full transition-all flex" href="/steps">
                        <button className='hover:bg-yaleBlue w-full transition-all'>How Does it Work?</button>
                    </Link>
                    {/* <button className='hover:bg-yaleBlue w-full'>Sign In</button> */}
                </div>
                <div className="flex w-full text-wrap">
                    <Link className="hover:bg-yaleBlue w-full transition-all flex" href="/integrity">
                        <button className='hover:bg-yaleBlue w-full transition-all'>Check Integrity</button>
                    </Link>
                    {/* <button className='hover:bg-yaleBlue w-full'>Sign In</button> */}
                </div>
                <div className="flex w-full text-wrap">
                    <Link className="hover:bg-yaleBlue w-full transition-all flex" href="/vote">
                        <button className='hover:bg-yaleBlue w-full transition-all'>Vote</button>
                    </Link>
                    {/* <button className='hover:bg-yaleBlue w-full'>Sign In</button> */}
                </div>
                <div className="flex w-full text-wrap">
                    <Link className="hover:bg-yaleBlue w-full transition-all flex" href="/auth/login">
                        <button className='hover:bg-yaleBlue w-full transition-all'>Sign In</button>
                    </Link>
                    {/* <button className='hover:bg-yaleBlue w-full'>Sign In</button> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;