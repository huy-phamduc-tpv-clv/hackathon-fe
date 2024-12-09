'use client';

import { useRouter } from 'next/navigation';
import { Background } from '../components/Background';
import useToken from '../store/useToken';
import { useEffect } from 'react';

export default function Dashboard() {
	const { hasToken } = useToken();
	const router = useRouter();

	useEffect(() => {
		if (!hasToken()) {
			return router.push('/login');
		}

		router.push('/profile');
	}, [hasToken, router]);

	return <Background></Background>;
}
