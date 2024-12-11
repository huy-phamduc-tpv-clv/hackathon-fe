'use client';

import WithAuth from '../../hoc/WithAuth';
import { Header } from '@/components/Header';
import { useRouter } from 'next/navigation';
import { Background } from '../../components/Background';
import Image from 'next/image';
import { Pen } from '../../icons/pen';
import { Input } from '@nextui-org/input';
import useToken from '../../store/useToken';
import { Button } from '@nextui-org/button';
import { AddPaymentCard } from '@/icons/add-payment-card';
import { NavigationBar } from '@/components/NavigationBar';

function Profile() {
	const router = useRouter();
	const { phone } = useToken();

	const handleGoBack = () => {
		router.push('select-role');
	};

	return (
		<div className=''>
			<Header back={handleGoBack}>
				<Button
					radius='sm'
					color='default'
					className='text-white bg-neutral-300'
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
							isRequired
						/>
						<Input
							value={phone}
							size='md'
							placeholder='Please input'
							label={
								<span className='text-secondary-green'>
									Phone
								</span>
							}
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
						/>
					</div>

					<div className='px-3 flex flex-col mt-2'>
						<h3 className='pt-3 font-medium text-xl'>
							Payment List
						</h3>
					</div>

					<div className='px-3'>
						<Button
							radius='sm'
							className='w-full mt-4 font-inter text-regular text-secondary-green font-normal text-opacity-80 bg-white h-[48px] text-[16px]'
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
}

export default WithAuth(Profile);
