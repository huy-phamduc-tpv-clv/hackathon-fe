'use client';

import Image from 'next/image';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { FacebookIcon } from '../../icons/facebook';
import { GoogleIcon } from '../../icons/google';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
	const [phone, setPhone] = useState('');
	const router = useRouter();

	const continueButtonColor = !phone.length
		? 'bg-neutral-300'
		: 'bg-primary-black';

	const handleSubmit = () => {
		router.push('/');
	};

	return (
		<section className='bg-gradient-to-b from-teritary-neon to-secondary-green h-screen'>
			<div className='flex flex-col justify-center items-center pt-8'>
				<h1 className='text-primary-black font-bold text-3xl font-bfo'>
					MatchMates
				</h1>
				<p className='text-primary-black my-5 text-[14px]'>
					Explore your football team, pitch and have fun.
				</p>
				<div className='mb-6'>
					<Image
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
						<div className='flex-grow border-t border-neutral-700'></div>
						<span className='mx-4 text-neutral-700'>OR</span>
						<div className='flex-grow border-t border-neutral-700'></div>
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
			</div>
		</section>
	);
}
