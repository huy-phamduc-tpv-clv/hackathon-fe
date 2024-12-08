'use client';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

function useAllowAccessRouter() {
	const router = useRouter();
	const pathname = usePathname();
	const [isMobile, setIsMobile] = useState<boolean>(false);

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

	useEffect(() => {
		if (pathname === '/') {
			if (isMobile) router.push('/maps');
			else {
				router.push('/qrcodeintro');
			}
		}
	}, [isMobile, pathname, router]);

	console.log(isMobile);
}

export default useAllowAccessRouter;
