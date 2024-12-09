'use client';

import useToken from '../../../store/useToken';
import { Button } from '@nextui-org/button';

export default function Profile() {
	const { removeToken } = useToken();

	const handleLogout = () => {
		removeToken();
		window.location.href = '/login';
	};

	return (
		<>
			<div>Profile</div>
			<Button
				onPress={handleLogout}
				color='danger'
			>
				Logout
			</Button>
		</>
	);
}
