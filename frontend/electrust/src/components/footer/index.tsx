import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className='bg-oxfordBlue py-5 hover:bg-mikadoYellow hover:text-oxfordBlue transition-all'>
            <div className="row">
                <div className="flex flex-col">
                    {/* Linkedin, Twitter, and instagram logo */}
                    <div className="flex justify-center items-center text-justify">
                        <a href="https://www.linkedin.com/">
                            <Image src="/linkedin.svg" alt="Linkedin Logo" width={30} height={30} />
                        </a>
                        <a href="https://www.twitter.com/">
                            <Image src="/twitter.svg" alt="Twitter Logo" width={30} height={30} />
                        </a>
                        <a href="https://www.instagram.com/">
                            <Image src="/instagram.svg" alt="Instagram Logo" width={30} height={30} />
                        </a>
                    </div>  
                    <p className="text-center justify-center items-center">
                        &copy; 2024 threesixty - Senpro Team 5. All Rights Reserved.
                    </p>                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;