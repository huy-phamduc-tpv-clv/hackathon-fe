'use client';

import { CLTLogo } from '../icons/clt-logo';
import { Background } from './Background';
import { LoadingPlayer } from '@/images/loading-player';

export default function Loading() {
	return (
		<Background>
			<div className='min-h-screen max-h-screen flex flex-col items-center'>
				<div className='min-h-full flex flex-col justify-center mb-10 mt-52'>
					<p className='text-xl font-medium text-center h-6'>
						Welcome to
					</p>
					<h1 className='text-[55px] font-normal font-bfo h-12 text-center'>
						Match
					</h1>
					<h1 className='text-[55px] font-normal font-bfo text-center'>
						Mates
					</h1>
					<p className='text-[20px] font-normal text-center h-6 mt-3'>
						Explore your football
					</p>
					<p className='text-[20px] font-normal text-center h-6'>
						team, pitch and fun
					</p>
					<p className='text-[20px] font-normal text-center h-6'>
						time now.
					</p>
				</div>

				<div className='flex-grow overflow-hidden'>
					<div className=''>
						<LoadingPlayer />
					</div>
				</div>

				<div className='bg-primary-black pt-3 pb-4 pl-5 w-full'>
					<CLTLogo />

					<div className='text-[12px] text-white opacity-90 font-extralight pt-3 pl-3'>
						Copyright from CLT 2024 Hackathon <br />
						Product of{' '}
						<span className='text-[#1A73E8] opacity-100 font-normal'>
							B.L.U.C Team
						</span>
					</div>
				</div>
			</div>
		</Background>
	);
}
