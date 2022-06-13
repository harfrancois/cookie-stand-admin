import Head from 'next/head'
import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource';
import Home from '../components/Home';
import LoginForm from '../components/LoginForm';

export default function Index() {

    const { user, login } = useAuth();

    return (
        <div className="p-4">
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            {user ?
                <Home />
                :
                <LoginForm onLogin={login} />
            }

        </div>
    );
}

