'use client';

import Image from 'next/image';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { FacebookIcon } from '../../icons/facebook';
import { GoogleIcon } from '../../icons/google';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Background } from '@/components/hoc/Background';
import { CLTLogo } from '@/icons/clt-logo';

export default function LoginOtpPage() {
	const [phone, setPhone] = useState('');
	const router = useRouter();

	const continueButtonColor = !phone.length
		? 'bg-neutral-300'
		: 'bg-primary-black';
	const phoneInputColor = !phone.length
		? {
				fontSize: '16px',
				color: '#979797',
				fontWeight: '300',
				opacity: 80,
		  }
		: {
				fontSize: '16px',
				color: '#1C1C1C',
		  };

	const handleSubmit = () => {
		router.push('/login-opt');
	};

	return (
		<Background>
			<div className='flex flex-col justify-start items-center h-full'>
				<h1 className='text-primary-black font-regular text-[32px] font-bfo mt-10'>
					MatchMates
				</h1>
				<p className='text-primary-black my-4 text-[14px]'>
					Explore your football team, pitch and have fun.
				</p>
				<div className='mb-8 mt-3'>
					<Image
						className='z-10'
						alt=''
						src={'/images/login-content.png'}
						width={285}
						height={237}
					/>
				</div>
				<div className='w-full flex flex-col px-4 gap-3'>
					<Input
						value={phone}
						onValueChange={newValue => setPhone(newValue)}
						label={
							<span className='text-secondary-green'>
								Mobile number
							</span>
						}
						size='md'
						type='phone'
						placeholder='Please enter your mobile number'
						style={phoneInputColor}
					/>
					<Button
						radius='sm'
						className={`font-inter text-regular text-white text-opacity-80 h-[48px] text-[16px] ${continueButtonColor}`}
						disabled={!phone.length}
						onClick={handleSubmit}
					>
						Continue
					</Button>

					<div className='flex items-center'>
						<div className='flex-grow border-t border-[#111111] opacity-15'></div>
						<span className='mx-4 text-neutral-700 text-[14px]'>
							OR
						</span>
						<div className='flex-grow border-t border-[#111111] opacity-15'></div>
					</div>

					<Button
						radius='sm'
						className='font-inter text-regular text-neutral-900 text-opacity-80 bg-white h-[48px] text-[16px]'
					>
						<FacebookIcon /> Continue with Facebook
					</Button>
					<Button
						radius='sm'
						className='font-inter text-regular text-neutral-900 text-opacity-80 bg-white h-[48px] text-[16px]'
					>
						<GoogleIcon /> Continue with Google
					</Button>
				</div>
				<div className='flex justify-center items-center px-4 gap-4 pt-16 pb-8'>
					<div className='w-[69px] h-[20.5px] relative'>
						<CLTLogo />
					</div>
					<div className='text-[12px] text-white opacity-90 font-extralight'>
						Copyright from CLT 2024 Hackathon Product of{' '}
						<span className='text-primary-black opacity-100 font-medium'>
							B.L.U.C Team
						</span>
					</div>
				</div>
			</div>
		</Background>
	);
}
