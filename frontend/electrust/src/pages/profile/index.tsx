import { NextPage } from 'next';

interface ProfileProps {
    username: string;
    bio: string;
}

const Profile: NextPage<ProfileProps> = ({ username, bio }) => {
    return (
        <div>
            <h1>{username}</h1>
            <p>{bio}</p>
        </div>
    );
};

export default Profile;