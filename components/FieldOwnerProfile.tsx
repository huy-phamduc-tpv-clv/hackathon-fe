'use client';

import WithAuth from '../hoc/WithAuth';
import { Header } from '@/components/Header';
import { useRouter } from 'next/navigation';
import { Background } from './Background';
import Image from 'next/image';
import { Pen } from '../icons/pen';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { AddPaymentCard } from '@/icons/add-payment-card';
import { NavigationBar } from '@/components/NavigationBar';
import useCardPayment from '../store/useCardPayment';
import { PaymentCard } from '@/components/PaymentCard';
import useCardProfileOwner, { ProfileOwner } from '@/store/useCardProfileOwner';
import { useState } from 'react';
import useToken from '@/store/useToken';

export const FieldOwnerProfile = () => {
	const { phone } = useToken();

	const router = useRouter();
	const { getCards } = useCardPayment();

	const handleGoBack = () => {
		router.push('select-role');
	};
	const [profileOwner, setProfileOwner] = useState<ProfileOwner>({
		owner_name: '',
		id: '',
		type: '',
		age: '',
		phone_number: phone,
		email: '',
	});
	const { updateProfileOwner } = useCardProfileOwner();
	const handleSaveCard = () => {
		if (!isInputted(profileOwner)) return;

		updateProfileOwner(profileOwner);

		router.push('/fields');
	};
	const isInputted = (profileOwner: ProfileOwner) => {
		return profileOwner.owner_name.length && profileOwner.phone_number.length && profileOwner.age.length;
	};
	return (
		<div className=''>
			<Header back={handleGoBack}>
				<Button
					radius='sm'
					color='default'
					className={`text-white ${isInputted(profileOwner)
						? ' bg-primary-black'
						: 'bg-neutral-300'
						}`}
					onPress={handleSaveCard}
				>
					Save
				</Button>
			</Header>
			<div
				className='mt-[60px] mb-[80px]'
				style={{ minHeight: 'calc(100vh - 140px)' }}
			>
				<Background>
					<div className='px-3 flex flex-col'>
						<h3 className='pt-3 font-medium text-xl'>Basic Info</h3>
					</div>
					<div className='flex-center mt-3'>
						<div className='w-[168px] h-[168px] bg-[#FFFFFFE5] z-100 rounded-xl shadow-custom-1 flex-center'>
							<div className='relative'>
								<Image
									src={'/images/avatar.png'}
									width={144}
									height={144}
									alt=''
									priority
								/>

								<div className='absolute w-[48px] h-[48px] bg-neutral-50 right-0 bottom-0 rounded-tl-xl flex-center'>
									<Pen />
								</div>
							</div>
						</div>
					</div>

					<div className='px-3 pt-4  flex flex-col gap-3'>
						<Input
							size='md'
							placeholder='Please input'
							label={
								<span className='text-secondary-green'>
									Name
								</span>
							}
							value={profileOwner.owner_name}
							onValueChange={value =>
								setProfileOwner(preState => ({
									...preState,
									owner_name: value,
								}))
							}
							isRequired
						/>
						<Input
							size='md'
							placeholder='Please input'
							label={
								<span className='text-secondary-green'>
									Age
								</span>
							}
							value={profileOwner.age}
							onValueChange={value =>
								setProfileOwner(preState => ({
									...preState,
									age: value,
								}))
							}
							isRequired
						/>
						<Input
							size='md'
							placeholder='Please input'
							label={
								<span className='text-secondary-green'>
									Phone
								</span>
							}
							value={phone}
							disabled
							isRequired
						/>
						<Input
							size='md'
							placeholder='Please input'
							label={
								<span className='text-secondary-green'>
									Email
								</span>
							}
							value={profileOwner.email}
							onValueChange={value =>
								setProfileOwner(preState => ({
									...preState,
									email: value,
								}))
							}
						/>
					</div>

					<div className='px-3 flex flex-col mt-2 mb-4'>
						<h3 className='pt-3 font-medium text-xl'>
							Payment List
						</h3>
					</div>

					<div className='px-3 flex flex-col gap-3 '>
						{getCards().map(item => (
							<PaymentCard
								key={item.id}
								card={item}
							/>
						))}

						<Button
							radius='sm'
							className='w-full font-inter text-regular text-secondary-green font-normal text-opacity-80 bg-[#FFFFFFE5] h-[48px] text-[16px]'
							onPress={() => router.push('/add-payment-card')}
						>
							<AddPaymentCard />
							Add Payment Card
						</Button>
					</div>
				</Background>
			</div>

			<NavigationBar />
		</div>
	);
};

export default WithAuth(FieldOwnerProfile);
