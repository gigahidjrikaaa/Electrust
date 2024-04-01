import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="container py-5 bg-yaleBlue w-screen">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="text-center">
                            &copy; 2024 threesixty - Senpro Team 5. All Rights Reserved.
                        </p>
                        {/* Linkedin, Twitter, and instagram logo */}
                        <div className="d-flex justify-content-center">
                            <a href="https://www.linkedin.com/">
                                <i className="fab fa-linkedin fa-2x text-white"></i>
                            </a>
                            <a href="https://www.twitter.com/">
                                <i className="fab fa-twitter fa-2x text-white"></i>
                            </a>
                            <a href="https://www.instagram.com/">
                                <i className="fab fa-instagram fa-2x text-white"></i>
                            </a>
                        </div>                        
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;