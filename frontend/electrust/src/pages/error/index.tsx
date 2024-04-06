import { Button, Spacer } from '@nextui-org/react';

const ErrorPage: React.FC = () => {
    return (
        <div>
            <Spacer y={2} />
            <h1>Error 404</h1>
            <Spacer y={1} />
            <p>Page not found</p>
        </div>
    );
};

export default ErrorPage;