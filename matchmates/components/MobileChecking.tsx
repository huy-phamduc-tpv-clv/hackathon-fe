'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import useToken from '@/store/useToken';
import { useRouter } from 'next/navigation';
import { Background } from './Background';

const MobileChecking = ({ children }: { children: React.ReactNode }) => {
	const [isMobile, setIsMobile] = useState<boolean | null>(null);
	const { hasToken } = useToken();
	const router = useRouter();

	const checkIfMobile = () => {
		const userAgent = navigator.userAgent.toLowerCase() || '';
		const isPhone = /mobile/i.test(userAgent);
		return isPhone && window.innerWidth <= 768;
	};

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(checkIfMobile());
		};

		checkMobile();

		window.addEventListener('resize', checkMobile);

		return () => {
			window.removeEventListener('resize', checkMobile);
		};
	}, []);

	useEffect(() => {
		if (isMobile === null) return;

		const timer = setTimeout(() => {
			if (isMobile && !hasToken()) {
				router.push('/login');
			}
		}, 0);

		return () => clearTimeout(timer);
	}, [isMobile, hasToken, router]);

	if (isMobile === null) {
		return <Background />;
	}

	if (!isMobile) {
		return (
			<Image
				src={'/images/landing-page-qr.png'}
				fill
				alt=''
			/>
		);
	}

	return <>{children}</>;
};

export default MobileChecking;
