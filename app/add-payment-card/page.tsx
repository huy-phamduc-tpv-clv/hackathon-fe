'use client';

import WithAuth from '../../hoc/WithAuth';
import { Header } from '@/components/Header';
import { useRouter } from 'next/navigation';
import { Background } from '../../components/Background';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';

function Profile() {
	const router = useRouter();

	const handleGoBack = () => {
		router.push('/profile');
	};

	return (
		<>
			<Header back={handleGoBack}>
				<Button
					radius='sm'
					color='default'
					className='text-white bg-neutral-300'
				>
					Save
				</Button>
			</Header>
			<div className='mt-[60px]'>
				<Background>
					<div className='px-3 flex flex-col'>
						<h3 className='pt-3 font-medium text-xl'>
							Add Payment Card
						</h3>
					</div>

					<div className='px-3 pt-4  flex flex-col gap-3'>
						<Input
							size='md'
							placeholder='Card Number'
							label={
								<span className='text-secondary-green'>
									Name
								</span>
							}
						/>
						<div className='flex gap-3'>
							<Input
								size='md'
								placeholder='Expiration'
								label={
									<span className='text-secondary-green'>
										Age
									</span>
								}
							/>
							<Input
								size='md'
								placeholder='CVV'
								label={
									<span className='text-secondary-green'>
										Email
									</span>
								}
							/>
						</div>
					</div>
				</Background>
			</div>
		</>
	);
}

export default WithAuth(Profile);
