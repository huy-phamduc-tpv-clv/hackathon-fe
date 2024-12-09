'use client';

import { Background } from '../components/Background';
import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';

const NotFound = () => {
	const router = useRouter();

	const backToHome = () => {
		router.push('/login');
	};

	return (
		<Background>
			<div className='h-screen w-full flex items-center justify-center'>
				<Button
					onPress={backToHome}
					color='success'
				>
					Back To Login
				</Button>
			</div>
		</Background>
	);
};

export default NotFound;
