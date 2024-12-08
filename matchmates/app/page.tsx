'use client';

import { Background } from '../components/Background';
import WithAuth from '../components/WithAuth';
import { Button } from '@nextui-org/button';
import useToken from '../store/useToken';
import { useRouter } from 'next/navigation';

const Home = () => {
	const { removeToken } = useToken();
	const router = useRouter();

	const handleLogout = () => {
		removeToken();
		router.push('/logout');
	};

	return (
		<Background>
			<div className='h-screen w-full flex items-center justify-center'>
				<Button onPress={handleLogout}>Logout</Button>
			</div>
		</Background>
	);
};

export default WithAuth(Home);
