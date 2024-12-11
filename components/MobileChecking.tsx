'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Background } from './Background';

const MobileChecking = ({ children }: { children: React.ReactNode }) => {
	const [isMobile, setIsMobile] = useState<boolean | null>(null);

	const checkIfMobile = () => {
		if (typeof window !== 'undefined') {
			const userAgent = navigator.userAgent.toLowerCase() || '';
			const isPhone = /mobile/i.test(userAgent);
			return isPhone && window.innerWidth <= 768;
		}
		return false;
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
