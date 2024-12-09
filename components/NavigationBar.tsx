'use client';

import { ReactNode } from 'react';
import { NavDashboard } from '../icons/nav-dashboard';
import { NavMap } from '../icons/nav-map';
import { NavRevenue } from '../icons/nav-revenue';
import { NavProfile } from '../icons/nav-profile';
import { usePathname, useRouter } from 'next/navigation';

export const NavigationBar = ({ children }: { children: ReactNode }) => {
	const pathname = usePathname();
	const router = useRouter();

	const isDashboard = pathname?.startsWith('/dashboard');
	const isMap = pathname?.startsWith('/map');
	const isRevenue = pathname?.startsWith('/revenue');
	const isProfile = pathname?.startsWith('/profile');

	return (
		<div className='flex flex-col min-h-screen justify-between z-10 shadow'>
			<div className='flex-grow'>{children}</div>
			<div className=' min-w-screen h-[100px]'>
				<div
					className='h-full w-full bg-white z-100 relative rounded-t-[24px] grid grid-cols-4 grid-rows-1'
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
						<p
							className={`text-sm pt-1 font-normal text-neutral-700`}
						>
							Dashboard
						</p>
					</div>
					<div
						className='flex flex-col justify-center items-center'
						onClick={() => router.push('/map')}
					>
						<NavMap isActive={isMap} />
						<p
							className={`text-sm pt-1 font-normal text-neutral-700`}
						>
							Your List
						</p>
					</div>
					<div
						className='flex flex-col justify-center items-center'
						onClick={() => router.push('/revenue')}
					>
						<NavRevenue isActive={isRevenue} />
						<p
							className={`text-sm pt-1 font-normal text-neutral-700`}
						>
							Revenue
						</p>
					</div>
					<div
						className='flex flex-col justify-center items-center'
						onClick={() => router.push('/profile')}
					>
						<NavProfile isActive={isProfile} />
						<p
							className={`text-sm pt-1 font-semibold text-primary-black`}
						>
							Profile
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
