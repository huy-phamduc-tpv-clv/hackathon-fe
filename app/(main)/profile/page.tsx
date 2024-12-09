'use client';

import { Background } from '../../../components/Background';
import { NavigationBar } from '@/components/NavigationBar';
import useToken from '../../../store/useToken';
import { Button } from '@nextui-org/button';

export default function Profile() {
	const { removeToken } = useToken();

	const handleLogout = () => {
		removeToken();
		window.location.href = '/login';
	};

	return (
		<Background>
			<NavigationBar>
				<div>Profile</div>
				<Button
					onPress={handleLogout}
					color='danger'
				>
					Logout
				</Button>
			</NavigationBar>
		</Background>
	);
}
