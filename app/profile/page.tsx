'use client';

import WithAuth from '../../hoc/WithAuth';
import useToken from '../../store/useToken';
import { ROLE } from '../../constants/role';
import FieldOwnerProfile from '../../components/FieldOwnerProfile';
import { PlayerProfile } from '@/components/PlayerProfile';

function Profile() {
	const { userType } = useToken();

	if (!userType) {
		// login page
	}

	if (userType === ROLE.FIELD_OWNER) {
		return <FieldOwnerProfile />;
	}

	return <PlayerProfile />;
}

export default WithAuth(Profile);
