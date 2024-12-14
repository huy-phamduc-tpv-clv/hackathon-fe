'use client';

import { Background } from '@/components/Background';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { AddPaymentCard } from '@/icons/add-payment-card';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/Header';
import useLocations from '../../store/useLocation';
import { LocationPrefer } from '@/components/LocationPrefer';

export default function Location() {
	const router = useRouter();
	const { getLocations } = useLocations();

	const handleGoBack = () => {
		router.push('/profile');
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
				className='mt-[60px]'
				style={{ minHeight: 'calc(100vh - 140px)' }}
			>
				<Background>
					<div className='px-3 flex flex-col'>
						<h3 className='pt-3 font-medium text-xl'>
							Prefer location set up
						</h3>
					</div>
					<div>
						<h3 className='px-3 font-normal text-[14px]'>
							Set up your prefer place to play
						</h3>
					</div>
					<div>
						{getLocations().length ? (
							<LocationPrefer />
						) : (
							<>
								<div className='flex-center mt-5 w-full'>
									<Image
										className=''
										alt=''
										src={'/images/player-location.png'}
										width={360}
										height={237}
										priority
									/>
								</div>
								<div className='px-3 flex flex-col'>
									<h3 className='pt-3 font-medium text-xl text-center'>
										Your list is empty
									</h3>
								</div>
								<div>
									<h3 className='px-3 font-normal text-[14px] text-center'>
										Create new to fill it
									</h3>
								</div>
							</>
						)}
					</div>
					<div className='px-3 flex flex-col gap-3 mt-6'>
						<Button
							radius='sm'
							className='w-full font-inter text-regular text-secondary-green font-normal text-opacity-80 bg-[#FFFFFFE5] h-[48px] text-[16px]'
							onPress={() => router.push('/add-new-location')}
						>
							<AddPaymentCard />
							Add new location
						</Button>
					</div>
				</Background>
			</div>
		</div>
	);
}
