import { useState } from 'react';
import {Input} from '@nextui-org/input'
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import Navbar from '@/components/navbar';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your login logic here
    };

    return (
        <div>
            <Navbar />
            <div className='flex flex-row justify-center items-center h-screen pt-20'>
                <div className='w-1/2'>
                    <Image src='/electrust-logo.svg' width={100} height={100} alt='Electrust Logo' className='w-1/2 mx-auto rounded-full' />
                </div>
                <div className='w-1/2'>
                    <h1 className='text-4xl my-10 uppercase font-bold'>Login</h1>
                    <form onSubmit={handleSubmit} className='w-1/2'>
                        <div className='flex flex-col my-2'>
                            <label htmlFor="email">Email:</label>
                            <Input id="email" value={email} onChange={handleEmailChange} />
                        </div>
                        <div className='flex flex-col my-2'>
                            <label htmlFor="password">Password:</label>
                            <Input id="password" type='password' value={password} onChange={handlePasswordChange} />
                        </div>
                        <Button type='submit' className='my-5 hover:bg-gold w-full'>Login</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;