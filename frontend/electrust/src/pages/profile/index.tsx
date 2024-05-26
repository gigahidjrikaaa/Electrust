// frontend/electrust/src/pages/profile.tsx
import { NextPage } from 'next';
import { useUser } from '@/context/userContext';
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const Profile: NextPage = () => {
    const { user } = useUser();

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div>
        <Navbar />
            <div className='flex flex-col text-center justify-center items-center h-screen'>
                <h1 className='text-4xl font-bold'>{user.name}</h1>
                <p className='text-xl'>{user.email}</p>
                {user.bio && <p>{user.bio}</p>}
            </div>
        <Footer />
        </div>
    );
};

export default Profile;
