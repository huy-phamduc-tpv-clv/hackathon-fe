'use client';

import { NavDashboard } from '../icons/nav-dashboard';
import { NavMap } from '../icons/nav-map';
import { NavRevenue } from '../icons/nav-revenue';
import { NavProfile } from '../icons/nav-profile';
import { usePathname, useRouter } from 'next/navigation';

export const NavigationBar = () => {
	const pathname = usePathname();
	const router = useRouter();

	const isDashboard = pathname?.startsWith('/dashboard');
	const isMap = pathname?.startsWith('/map');
	const isRevenue = pathname?.startsWith('/revenue');
	const isProfile = pathname?.startsWith('/profile');

	return (
		<footer className='bg-white shadow-lg fixed bottom-0 left-0 w-full z-10 rounded-t-[24px]'>
			<div
				className='h-[100px] w-full rounded-t-[24px] grid grid-cols-4 grid-rows-1'
				style={{
					gridTemplateColumns: '1fr 1fr 1fr 1fr',
					gridTemplateRows: '1fr',
				}}
			>
				<div
					className='flex flex-col justify-center items-center'
					onClick={() => router.push('/dashboard')}
				>
					<NavDashboard isActive={isDashboard} />
					<p className='text-sm pt-1 font-normal text-neutral-700'>
						Dashboard
					</p>
				</div>
				<div
					className='flex flex-col justify-center items-center'
					onClick={() => router.push('/map')}
				>
					<NavMap isActive={isMap} />
					<p className='text-sm pt-1 font-normal text-neutral-700'>
						Your List
					</p>
				</div>
				<div
					className='flex flex-col justify-center items-center'
					onClick={() => router.push('/revenue')}
				>
					<NavRevenue isActive={isRevenue} />
					<p className='text-sm pt-1 font-normal text-neutral-700'>
						Revenue
					</p>
				</div>
				<div
					className='flex flex-col justify-center items-center'
					onClick={() => router.push('/profile')}
				>
					<NavProfile isActive={isProfile} />
					<p className='text-sm pt-1 font-semibold text-primary-black'>
						Profile
					</p>
				</div>
			</div>
		</footer>
	);
};
