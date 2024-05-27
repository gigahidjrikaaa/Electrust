import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className='bg-oxfordBlue py-5 hover:bg-yaleBlue transition-all'>
            <div className="flex flex-col gap-1">
                {/* Linkedin, Twitter, and instagram logo */}
                <div className="flex justify-center items-center text-justify gap-10">
                    <a href="https://www.linkedin.com/in/gigahidjrikaaa">
                        <Image src="/linkedin-logo.webp" alt="Linkedin Logo" width={30} height={30} />
                    </a>
                    <a href="https://www.x.com/">
                        <Image src="/x-logo.png" alt="X Logo" width={30} height={30} />
                    </a>
                    <a href="https://www.instagram.com/gigahidjrikaaa">
                        <Image src="/insta-logo.png" alt="Instagram Logo" width={30} height={30} />
                    </a>
                </div>  
                <p className="text-center justify-center items-center">
                    &copy; 2024 threesixty - Senpro Team 5. All Rights Reserved.
                </p>                    
            </div>
        </footer>
    );
};

export default Footer;