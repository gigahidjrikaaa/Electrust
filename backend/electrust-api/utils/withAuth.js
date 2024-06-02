import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';

const withAuth = (WrappedComponent) => {
    return (props) => {
        const Router = useRouter();

        useEffect(() => {
            const token = getCookie('jwt');

            if (!token) {
                Router.replace('/auth/login');
            }
        }, []);

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
