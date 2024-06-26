import { useState } from 'react';
import {Input} from '@nextui-org/input'
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { input } from '@nextui-org/react';
import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    // Email validation
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const validateEmail = (email: string) => email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isEmailInvalid = React.useMemo(() => {
        if (email === "") return false;

        return validateEmail(email) ? false : true;
    }, [email]);

    const isPassInvalid = React.useMemo(() => {
        if (password === "") return false;

        return password.length > 5 ? false : true;
    }, [password]);

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    
    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        validateEmail(email);

        // if email and password are empty, return
        if (!email)
        {
            setError('Please fill in the email');
            return;
        }
        if (!password)
        {
            setError('Please fill in the password');        
            return;
        }

        try
        {
            const result = await signIn('credentials', {
                email,
                password,
                redirect: false,
            });

            if (result?.error)
            {
                setError('Failed to login. Please try again.');
                alert('Failed to login. Please try again.');
            }
            else
            {
                router.push('/');
            }
        }
        catch (err)
        {
            console.log(err);
            setError('Failed to login. Please try again.');
            alert('Failed to login. Please try again.');
        }
    };

    return (
        <div>
            <Navbar />
            <div className='flex flex-row justify-center items-center h-screen pt-20'>
                <div className='w-1/2'>
                    <Image src='/electrust-logo.svg' width={100} height={100} alt='Electrust Logo' className='w-1/2 mx-auto rounded-full' />
                </div>
                <div className='w-1/2'>
                    <h1 className='text-4xl my-10 uppercase font-bold font-russo-one'>Login</h1>
                    <form className='w-3/4'>
                        <div className='flex flex-col my-2'>
                            {/* <label htmlFor="email">Email:</label> */}
                            <Input 
                                name='emailInput'
                                id="email" 
                                value={email} 
                                onChange={handleEmailChange}
                                type='email'
                                label='Email'
                                placeholder='Enter your email'
                                required
                                color={isEmailInvalid ? "danger" : "default"}
                                errorMessage={isEmailInvalid && 'Please fill in the email'}
                                defaultValue='email@email.com' 
                            />
                        </div>
                        <div className='flex flex-col my-2'>
                            {/* <label htmlFor="password">Password:</label> */}
                            <Input 
                                id="password" 
                                type='password' 
                                value={password} 
                                onChange={handlePasswordChange}
                                label='Password'
                                required
                                color={isPassInvalid ? "danger" : "default"}
                                errorMessage={isPassInvalid && 'Password must be at least 6 characters'}
                                placeholder='Enter your password' 
                            /> 
                        </div>
                        <div className='flex flex-row justify-between my-2'>
                            <div>
                                <input type='checkbox' className='mr-2' />
                                <label>Remember me</label>
                            </div>
                            <div>
                                <a href='#' className='text-blue-500'>Forgot password?</a>
                            </div>
                        </div>
                        <Button className='my-5 hover:bg-gold w-full font-bold' onClick={handleSubmit}>Login</Button>
                        <div className='flex flex-row justify-center'>
                            <p>Dont have an account? <Link href="/auth/register"><Button className='mx-2'>Register</Button></Link></p>
                                <Link href={`http://${process.env.NEXT_PUBLIC_API_URL}/auth/google`}>
                                    <Button className='flex items-center'>
                                        <Image src="/google-logo.webp" alt="Google Logo" width={30} height={30} className='mr-2 rounded-full' />
                                        Register with Google
                                    </Button>
                                </Link>
                            
                        </div>
                        
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LoginPage;