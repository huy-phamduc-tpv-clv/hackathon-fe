'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const LandingPage = ({ children }: { children: React.ReactNode }) => {
	const [isMobile, setIsMobile] = useState<boolean>(true);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
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
