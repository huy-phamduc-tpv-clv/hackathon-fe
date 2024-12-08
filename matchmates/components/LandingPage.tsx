'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const LandingPage = ({ children }: { children: React.ReactNode }) => {
	const [isMobile, setIsMobile] = useState<boolean>(true);

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

export default LandingPage;
