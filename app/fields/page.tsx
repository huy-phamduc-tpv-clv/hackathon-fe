'use client';

import WithAuth from '../../hoc/WithAuth';
import useToken from '../../store/useToken';
import { ROLE } from '../../constants/role';
import { PlayerProfile } from '@/components/PlayerProfile';
import ListFields from '@/components/ListFields';

function Fields() {
    const { userType } = useToken();

    if (!userType) {
        // login page
    }

    if (userType === ROLE.FIELD_OWNER) {
        return <ListFields />;
    }

    return <PlayerProfile />;
}

export default WithAuth(Fields);
