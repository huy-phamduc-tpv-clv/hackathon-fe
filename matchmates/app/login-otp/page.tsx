'use client';

import { Background } from '@/components/Background';
import { Button, InputOtp } from '@nextui-org/react';
import React, { useState } from 'react';
import { SeparateText } from '@/components/Separate';
import { ArrowRightIcon } from '../../icons/arrow-right';
import { ArrowLeftIcon } from '../../icons/arrow-left';
import { useRouter } from 'next/navigation';
import useToken from '../../store/useToken';

const isFullFill = (otpInputted: string) => otpInputted.length === 4;

export default function LoginOtpPage() {
	const [otp, setOtp] = useState('');
	const router = useRouter();
	const { setToken } = useToken();

	const configUI = !isFullFill(otp)
		? { color: 'bg-neutral-300', buttonText: 'Continue' }
		: {
				color: 'bg-primary-black',
				buttonText: 'Verify me',
		  };

	const handleVerifyOtp = () => {
		setToken('token-key');
		router.push('/welcome-loading');
	};

	return (
		<Background>
			<div className='pb-16 pt-40 flex flex-col justify-between w-full min-h-screen items-center px-4'>
				<div>
					<h2 className='font-medium text-xl text-center'>
						Enter the 4-digit code sent to your {`******** `}56
					</h2>

					<InputOtp
						className='mx-auto my-1'
						size='lg'
						length={4}
						value={otp}
						onValueChange={setOtp}
						textAlign='left'
					/>

					<Button
						radius='sm'
						className={`w-full mb-4 mt-1 font-inter text-regular text-white text-opacity-80 h-[48px] text-[16px] ${configUI.color}`}
						isDisabled={!isFullFill(otp)}
						onPress={handleVerifyOtp}
					>
						{configUI.buttonText}
					</Button>

					<SeparateText text='Need help?' />

					<Button
						radius='sm'
						className='w-full mt-4 font-inter text-regular text-neutral-900 text-opacity-80 bg-white h-[48px] text-[16px]'
					>
						Resend code
					</Button>
				</div>

				<div className='w-full flex justify-between'>
					<Button
						size='sm'
						radius='sm'
						className='min-w-[48px] h-[48px] p-0'
						onPress={() => router.push('login')}
					>
						<ArrowLeftIcon />
					</Button>
					<Button
						onPress={handleVerifyOtp}
						size='lg'
						radius='sm'
						endContent={<ArrowRightIcon />}
						className='min-w-[112px] text-neutral-900 relative'
						disabled={!isFullFill(otp)}
					>
						Next
					</Button>
				</div>
			</div>
		</Background>
	);
}
