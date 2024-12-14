'use client';

import WithAuth from '../../hoc/WithAuth';
import { Header } from '@/components/Header';
import { useRouter } from 'next/navigation';
import { Background } from '../../components/Background';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { useEffect, useState } from 'react';
import { CITIES } from '../../constants/location';
import { Select, SelectItem, SharedSelection } from '@nextui-org/react';

function AddNewLocation() {
	const router = useRouter();
	const [location, setLocation] = useState({
		city: '',
		ward: '',
		district: '',
		address: '',
	});

	const handleGoBack = () => {
		router.push('/location');
	};

	const handleSaveCard = () => {};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleSelectCity = (value: SharedSelection) => {
		console.log('🚀 ~ handleSelectCity ~ value:', value.currentKey);
	};

	return (
		<>
			<Header back={handleGoBack}>
				<Button
					radius='sm'
					color='default'
					className={`text-white bg-primary-black' bg-neutral-300`}
					onPress={handleSaveCard}
				>
					Save
				</Button>
			</Header>
			<div className='mt-[60px]'>
				<Background>
					<div className='px-3 pt-4  flex flex-col gap-3'>
						<Select
							className='w-full'
							label={
								<span className='text-secondary-green'>
									City
								</span>
							}
							isRequired
							placeholder='Please select your city'
							items={CITIES}
							onSelectionChange={handleSelectCity}
						>
							{city => (
								<SelectItem key={city.key}>
									{city.label}
								</SelectItem>
							)}
						</Select>

						<div className='flex gap-3'>
							<Select
								className='w-full'
								label={
									<span className='text-secondary-green'>
										Ward
									</span>
								}
								isRequired
								placeholder='Please select'
							>
								{CITIES.map(city => (
									<SelectItem key={city.key}>
										{city.label}
									</SelectItem>
								))}
							</Select>
							<Select
								className='w-full'
								label={
									<span className='text-secondary-green'>
										District
									</span>
								}
								isRequired
								placeholder='Please select'
							>
								{CITIES.map(city => (
									<SelectItem key={city.key}>
										{city.label}
									</SelectItem>
								))}
							</Select>
						</div>

						<Input
							size='md'
							placeholder='Please input'
							label={
								<span className='text-secondary-green'>
									Address detail
								</span>
							}
							value={''}
							maxLength={16}
						/>
					</div>
				</Background>
			</div>
		</>
	);
}

export default WithAuth(AddNewLocation);
