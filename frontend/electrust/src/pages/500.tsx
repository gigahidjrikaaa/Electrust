import { NextPage } from 'next';

const ErrorPage: NextPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mt-4">500 - Internal Server Error</h1>
            <p className="text-lg text-gray-600 mt-2">
                Oops! Something went wrong on our end. Please try again later.
            </p>
        </div>
    );
};

export default ErrorPage;