'use client';

import WithAuth from '../../../hoc/WithAuth';
import useToken from '../../../store/useToken';
import { Button } from '@nextui-org/button';

function Profile() {
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

export default WithAuth(Profile);
