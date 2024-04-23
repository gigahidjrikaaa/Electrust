import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="flex bg-oxfordBlue w-10 h-screen fixed top-0 z-50">
            <div className="flex h-full w-auto">
                <div className="w-16 h-16 border-white border-1 my-5 rounded-full overflow-hidden ml-8">
                    <Image src="/electrust-logo.svg" className="w-full h-full justify-center text-center" alt="Electrust Logo" width={100} height={100} />
                </div>
                <h1 className="text-4xl font-bold font-russo-one ml-5 my-8 text-mikadoYellow">Electrust</h1>
            </div>
            <div className="buttons text-white font-russo-one flex w-full mr-10">
                <button className='hover:bg-gold w-full transition-all'>About</button>
                <button className='hover:bg-gold w-full transition-all'>How Does it Work</button>
                <button className='hover:bg-gold w-full transition-all'>Check Integrity</button>
                <button className='hover:bg-gold w-full transition-all'>Contact Us</button>
                <div className="flex w-full text-wrap">
                    <Link className="hover:bg-yaleBlue w-full transition-all flex" href="/auth/login">
                        <button className='hover:bg-gold w-full transition-all'>Sign In</button>
                    </Link>
                    {/* <button className='hover:bg-yaleBlue w-full'>Sign In</button> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;