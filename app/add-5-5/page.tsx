'use client';

import WithAuth from '../../hoc/WithAuth';
import { Header } from '@/components/Header';
import { useRouter } from 'next/navigation';
import { Background } from '@/components/Background';
import { Button } from '@nextui-org/button';
import { Stadium } from '@/images/stadium';
import { Position } from '../../components/Position';

export const SelectGameType = () => {
	const router = useRouter();

	const handleGoBack = () => {
		router.push('player-type');
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
						<h3 className='pt-3 font-medium text-xl'>5 - 5</h3>
					</div>
					<div>
						<h3 className='px-3 font-normal text-[14px]'>
							Select the position you prefer
						</h3>
					</div>

					<div className='mt-5 flex justify-center relative'>
						<Stadium />
						<div className='absolute top-[50px]'>
							<Position content='GK' />
						</div>
						<div className='absolute top-[200px]'>
							<Position content='CD' />
						</div>
						<div className='absolute top-[50%] transform -translate-y-1/2 left-[22%]'>
							<Position content='RM' />
						</div>
						<div className='absolute top-[50%] transform -translate-y-1/2 right-[22%]'>
							<Position content='LM' />
						</div>
						<div className='absolute bottom-[200px]'>
							<Position content='FW' />
						</div>
					</div>

					<div className='h-[100px]'></div>
				</Background>
			</div>
		</div>
	);
};

export default WithAuth(SelectGameType);
