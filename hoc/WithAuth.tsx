'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useToken from '../store/useToken';

const WithAuth = (WrappedComponent: React.ComponentType) => {
	const AuthenticatedComponent: React.FC = props => {
		const [loading, setLoading] = useState(true);
		const hasToken = useToken(state => state.hasToken);
		const router = useRouter();

		useEffect(() => {
			if (!hasToken()) {
				router.push('/login');
			}
			setLoading(false);
		}, [hasToken, router]);

		if (loading) {
			return null;
		}

		if (!hasToken()) {
			return null;
		}

		return <WrappedComponent {...props} />;
	};

	return AuthenticatedComponent;
};

export default WithAuth;
