import Image from 'next/image';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const VotingGuidePage = () => {
    return (
        <div className="bg-gray-900 min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex flex-col items-center justify-center text-center p-5">
                <div className="mt-20 mb-4 w-full flex flex-col items-center">
                    <h1 className="font-bold font-russo-one text-6xl text-mikadoYellow mt-10">Voting Guide</h1>
                    
                </div>
                <article className="font-sans text-lg text-white text-justify max-w-2xl mt-6 px-4">
                    <section className="mb-8">
                        <h2 className="font-bold text-3xl text-blue-400 mb-4">Step 1: Login/Register</h2>
                        <p>
                            To begin, you need to log in to your account. If you do not have an account, you will need to register first. Here is how:
                        </p>
                        <ul className="list-disc list-inside mt-4">
                            <li className="mb-2">
                                <strong>Visit the Login Page:</strong> Click on the login button at the top right corner of the homepage.
                            </li>
                            <li className="mb-2">
                                <strong>Enter Credentials:</strong> Provide your username and password if you are logging in. If you are registering, fill in the required information such as your email, username, and password.
                            </li>
                            <li>
                                <strong>Submit:</strong> Click on the login or register button to proceed.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-bold text-3xl text-blue-400 mb-4">Step 2: Select Event</h2>
                        <p>
                            Once logged in, you will be directed to the dashboard where you can see the list of available events. Follow these steps to select an event:
                        </p>
                        <ul className="list-disc list-inside mt-4">
                            <li className="mb-2">
                                <strong>Browse Events:</strong> Navigate through the events listed on your dashboard.
                            </li>
                            <li className="mb-2">
                                <strong>Choose Event:</strong> Click on the event you wish to participate in.
                            </li>
                            <li>
                                <strong>Event Details:</strong> Review the details of the event, including the objectives, timeline, and criteria for voting.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-bold text-3xl text-blue-400 mb-4">Step 3: Vote</h2>
                        <p>
                            After selecting an event, you can cast your vote. Here is how:
                        </p>
                        <ul className="list-disc list-inside mt-4">
                            <li className="mb-2">
                                <strong>Review Candidates/Options:</strong> Look through the candidates or options available for the event.
                            </li>
                            <li className="mb-2">
                                <strong>Make Your Choice:</strong> Click on the candidate or option you support.
                            </li>
                            <li>
                                <strong>Confirm Vote:</strong> Review your selection and click on the Vote button to cast your vote.
                            </li>
                        </ul>
                    </section>

                    <p className="mt-8 mb-10">
                        By following these simple steps, you can participate in the events and make your voice heard. Happy voting!
                    </p>
                </article>
            </div>
            <Footer />
        </div>
    );
};

export default VotingGuidePage;
