import React from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
    return (
        <nav className="flex bg-white w-screen h-min sticky">
            <div className="logo flex bg-gray-500 h-full w-full justify-center items-center text-center">
                <img src="logo.png" alt="Electrust Logo Here" className='h-10 min-w-min bg-slate-800'/>
            </div>
            <div className="buttons text-black flex">
                <button className='hover:bg-blue-600 w-full'>About</button>
                <button className='hover:bg-blue-600 w-full'>How Does it Work</button>
                <button className='hover:bg-blue-600 w-full'>Button 3</button>
                <button className='hover:bg-blue-600 w-full'>Button 4</button>
            </div>
        </nav>
    );
};

export default Navbar;