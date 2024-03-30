import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import Navbar from '@/components/navbar';
import { useState } from 'react';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add your register logic here
    };

    return (
        <div>
            <Navbar />
            <div className='flex flex-col text-center justify-center items-center h-screen'>
                <h1 className='flex text-4xl uppercase my-10 font-bold'>Register</h1>
                <form onSubmit={handleSubmit} className='w-1/2'>
                    <div className='flex flex-col my-2'>
                        <label htmlFor="name">Name:</label>
                        <Input id="name" />
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
                        <Input id="confirm-password" type='password' />
                    </div>
                    <Button type='submit' className='my-5 hover:bg-gold w-full'>Register</Button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;