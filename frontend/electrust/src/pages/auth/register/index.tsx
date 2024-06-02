// frontend/electrust/src/pages/register.tsx
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { useState } from 'react';
import { useUser } from '@/context/userContext';
import { useRouter } from 'next/router';
import axios from 'axios';

const RegisterPage = () => {
    const { setUser } = useUser();
    const router = useRouter();

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, { name, username, email, password });
            // if successful, return to login page
            if (res.status === 200) {
                router.push('/login');
            } else {
                alert('Registration failed');
            }
          } catch (err) {
            console.error(err);
            alert('Registration failed');
          }
    };

    return (
        <div>
            <Navbar />
            <div className='flex flex-col text-center justify-center items-center h-screen'>
                <h1 className='flex text-4xl uppercase my-10 font-bold font-russo-one'>Register</h1>
                <form onSubmit={handleSubmit} className='w-1/2'>
                    <div className='flex flex-col my-2'>
                        <label htmlFor="name">Name:</label>
                        <Input id="name" value={name} onChange={handleNameChange} />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label htmlFor="email">Email:</label>
                        <Input id="email" value={email} onChange={handleEmailChange} />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label htmlFor="password">Password:</label>
                        <Input id="password" type='password' value={password} onChange={handlePasswordChange} />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <Input id="confirm-password" type='password' value={confirmPassword} onChange={handleConfirmPasswordChange} />
                    </div>
                    <Button type='submit' className='my-5 hover:bg-gold'>Register</Button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default RegisterPage;
