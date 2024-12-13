/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Header } from '@/components/Header';
import { Background } from '@/components/Background';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
	Button,
} from '@nextui-org/react';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import TimeInput from '../../components/TimeInput';
import useToken from '../../store/useToken';

interface TimeDetails {
	startHour: string;
	startMinute: string;
	endHour: string;
	endMinute: string;
}

interface PlayerTime {
	dateOfWeek: string;
	times: TimeDetails[];
	name: string;
}

function mapPlayerTimeFromServer(rawData: any) {
	const defaultDays = [
		{ dateOfWeek: 'MONDAY', times: [], name: 'Mon' },
		{ dateOfWeek: 'TUESDAY', times: [], name: 'Tue' },
		{ dateOfWeek: 'WEDNESDAY', times: [], name: 'Wed' },
		{ dateOfWeek: 'THURSDAY', times: [], name: 'Thu' },
		{ dateOfWeek: 'FRIDAY', times: [], name: 'Fri' },
		{ dateOfWeek: 'SATURDAY', times: [], name: 'Sat' },
		{ dateOfWeek: 'SUNDAY', times: [], name: 'Sun' },
	];

	return rawData.reduce((acc: any, item: any) => {
		const existingDay = acc.find(
			(day: any) => day.dateOfWeek === item.dateOfWeek,
		);

		if (existingDay) {
			existingDay.times.push({
				startHour: item.startHour,
				startMinute: '00',
				endHour: item.endHour,
				endMinute: '00',
			});
		} else {
			acc.push({
				dateOfWeek: item.dateOfWeek,
				name: item.dateOfWeek.substring(0, 3),
				times: [
					{
						startHour: item.startHour,
						startMinute: '00',
						endHour: item.endHour,
						endMinute: '00',
					},
				],
			});
		}

		return acc;
	}, defaultDays);
}

export default function TimeTable() {
	const router = useRouter();
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
	const [scrollBehavior] = React.useState('inside' as const);
	const [day, setDay] = useState({
		dateOfWeek: '',
		name: '',
		endHour: '',
		endMinute: '',
		startHour: '',
		startMinute: '',
	});
	const { setPlayerTimeTables, getPlayerTimeTables } = useToken();

	// const [playerTimes, setPlayerTimes] = useState<PlayerTime[]>([
	// 	{ dateOfWeek: 'MONDAY', times: [], name: 'Mon' },
	// 	{ dateOfWeek: 'TUESDAY', times: [], name: 'Tue' },
	// 	{ dateOfWeek: 'WEDNESDAY', times: [], name: 'Wed' },
	// 	{ dateOfWeek: 'THURSDAY', times: [], name: 'Thu' },
	// 	{ dateOfWeek: 'FRIDAY', times: [], name: 'Fri' },
	// 	{ dateOfWeek: 'SATURDAY', times: [], name: 'Sat' },
	// 	{ dateOfWeek: 'SUNDAY', times: [], name: 'Sun' },
	// ]);
	const [playerTimes, setPlayerTimes] = useState<PlayerTime[]>(
		mapPlayerTimeFromServer(getPlayerTimeTables()),
	);

	const handleSetTime = (dateOfWeek: string, name: string) => {
		setDay({
			dateOfWeek,
			name,
			endHour: '',
			endMinute: '',
			startHour: '',
			startMinute: '',
		});
		onOpen();
	};

	const handleAddTime = () => {
		const index = playerTimes.findIndex(
			item => item.dateOfWeek === day.dateOfWeek,
		);

		playerTimes[index].times.push({
			endHour: day.endHour,
			endMinute: day.endMinute,
			startHour: day.startHour,
			startMinute: day.startMinute,
		});

		setPlayerTimes([...playerTimes]);

		onClose();

		setPlayerTimeTables(
			playerTimes
				.map(item => {
					const mapped = item.times.map(t => ({
						startHour: t.startHour,
						endHour: t.endHour,
						dateOfWeek: item.dateOfWeek,
					}));

					return mapped;
				})
				.flat(),
		);
	};

	return (
		<div className=''>
			<Header back={() => router.push('/profile')}></Header>
			<div
				className='mt-[60px]'
				style={{ minHeight: 'calc(100vh )' }}
			>
				<Background>
					<div className='px-3 flex flex-col'>
						<h3 className='pt-3 font-medium text-xl'>
							Timetable setup
						</h3>

						<p className='font-normal text-[14px]'>
							Please set time range that you want to play game
						</p>
					</div>

					<div className='mt-4 overflow-x-auto whitespace-nowrap ml-3 scrollbar-hide'>
						<div className='flex gap-2'>
							{playerTimes.map((item, index) => (
								<div
									className='flex flex-col items-center'
									key={index}
								>
									{' '}
									<div className='bg-secondary-green h-[40px] w-[90px] flex justify-center items-center text-white rounded-[8px] text-[14px] font-normal'>
										{item.name}
									</div>
									{item.times.map((t, idx) => (
										<div
											className='bg-white h-[40px] w-[90px] flex justify-center items-center rounded-[8px] text-[12px] font-normal mt-2'
											key={idx}
										>
											{t.startHour}:{t.startMinute} -{' '}
											{t.endHour}:{t.endMinute}
										</div>
									))}
									<div
										className='bg-[#FFFFFFE5] h-[40px] w-[90px] flex justify-center items-center rounded-[8px] text-[12px] font-normal mt-2 text-neutral-500 cursor-pointer'
										onClick={() =>
											handleSetTime(
												item.dateOfWeek,
												item.name,
											)
										}
									>
										Set time
									</div>
								</div>
							))}
						</div>
					</div>
				</Background>
			</div>

			<Modal
				isOpen={isOpen}
				scrollBehavior={scrollBehavior}
				onOpenChange={onOpenChange}
			>
				<ModalContent>
					{() => (
						<>
							<ModalHeader className='flex flex-col gap-1'>
								{day.name}
							</ModalHeader>
							<ModalBody>
								<div className='flex-center flex-col gap-4'>
									<TimeInput
										label={'Start Time '}
										onHourChange={value =>
											setDay({
												...day,
												startHour: value,
											})
										}
										onMinuteChange={value =>
											setDay({
												...day,
												startMinute: value,
											})
										}
									/>

									<TimeInput
										label={'End Time'}
										onHourChange={value =>
											setDay({
												...day,
												endHour: value,
											})
										}
										onMinuteChange={value =>
											setDay({
												...day,
												endMinute: value,
											})
										}
									/>
								</div>

								<Button
									className='bg-secondary-green text-white mt-6'
									onPress={handleAddTime}
								>
									Save
								</Button>
							</ModalBody>
							<ModalFooter></ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</div>
	);
}
