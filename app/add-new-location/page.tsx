'use client';

import WithAuth from '../../hoc/WithAuth';
import { Header } from '@/components/Header';
import { useRouter } from 'next/navigation';
import { Background } from '../../components/Background';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { useEffect, useState } from 'react';
import { CITIES, WARDS } from '../../constants/location';
import { Select, SelectItem, SharedSelection } from '@nextui-org/react';
import { DISTRICTS } from '@/constants/location';
import useLocations from '../../store/useLocation';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isFullFill = (o: any) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return Object.values(o).filter((item: any) => item.length).length === 4;
};

function AddNewLocation() {
	const router = useRouter();
	const [location, setLocation] = useState({
		city: '',
		ward: '',
		district: '',
		address: '',
	});
	const { addLocations } = useLocations();

	const handleGoBack = () => {
		router.push('/location');
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleSelectCity = (value: SharedSelection) => {
		setLocation({ ...location, city: value.currentKey ?? '' });
	};

	const handleSelectDistrict = (value: SharedSelection) => {
		setLocation({ ...location, district: value.currentKey ?? '' });
	};

	const handleSelectWard = (value: SharedSelection) => {
		setLocation({ ...location, ward: value.currentKey ?? '' });
	};

	const handleChangeAddress = (value: string) => {
		setLocation({ ...location, address: value ?? '' });
	};

	const handleCreateLocation = () => {
		addLocations(location);
		router.push('/location');
	};

	return (
		<>
			<Header back={handleGoBack}>
				<Button
					radius='sm'
					color='default'
					className={`text-white bg-primary-black' ${
						isFullFill(location)
							? 'bg-primary-black'
							: 'bg-neutral-300'
					}`}
					onPress={handleCreateLocation}
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
										District
									</span>
								}
								isRequired
								placeholder='Please select'
								items={
									DISTRICTS[location.city as 'Da Nang'] ?? []
								}
								onSelectionChange={handleSelectDistrict}
							>
								{district => (
									<SelectItem key={district.key}>
										{district.label}
									</SelectItem>
								)}
							</Select>
							<Select
								className='w-full'
								label={
									<span className='text-secondary-green'>
										Ward
									</span>
								}
								isRequired
								placeholder='Please select'
								items={
									(
										WARDS[location.district as 'quan1'] || {
											wards: [],
										}
									).wards.map(item => ({
										key: item,
										label: item,
									})) ?? []
								}
								onSelectionChange={handleSelectWard}
							>
								{district => (
									<SelectItem key={district.key}>
										{district.label}
									</SelectItem>
								)}
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
							value={location.address}
							onValueChange={handleChangeAddress}
							maxLength={16}
						/>
					</div>
				</Background>
			</div>
		</>
	);
}

export default WithAuth(AddNewLocation);
