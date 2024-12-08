import React from 'react';
import { useRouter } from 'next/navigation';
import useToken from '../store/useToken';

const WithAuth = (WrappedComponent: React.ComponentType) => {
	const AuthenticatedComponent: React.FC = props => {
		const hasToken = useToken(state => state.hasToken);
		const router = useRouter();

		React.useEffect(() => {
			if (!hasToken()) {
				router.replace('/login');
			}
		}, [hasToken, router]);

		if (!hasToken()) {
			return null;
		}

		return <WrappedComponent {...props} />;
	};

	return AuthenticatedComponent;
};

export default WithAuth;
