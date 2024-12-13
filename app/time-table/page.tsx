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
	DateInput,
} from '@nextui-org/react';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function TimeTable() {
	const router = useRouter();
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [scrollBehavior] = React.useState('inside' as const);

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
						<div className='inline-block mr-4 '>
							<div className='bg-secondary-green h-[40px] w-[90px] flex justify-center items-center text-white rounded-[8px] text-[14px] font-normal'>
								Mon
							</div>
							<div className='bg-white h-[40px] w-[90px] flex justify-center items-center rounded-[8px] text-[12px] font-normal mt-2'>
								18:00 - 20:00
							</div>
							<div
								className='bg-[#FFFFFFE5] h-[40px] w-[90px] flex justify-center items-center rounded-[8px] text-[12px] font-normal mt-2 text-neutral-500'
								onClick={onOpen}
							>
								Set time
							</div>
						</div>

						<div className='inline-block mr-4 '>
							<div className='bg-secondary-green h-[40px] w-[90px] flex justify-center items-center text-white rounded-[8px] text-[14px] font-normal'>
								Tue
							</div>
							<div className='bg-white h-[40px] w-[90px] flex justify-center items-center rounded-[8px] text-[12px] font-normal mt-2'>
								18:00 - 20:00
							</div>
							<div className='bg-[#FFFFFFE5] h-[40px] w-[90px] flex justify-center items-center rounded-[8px] text-[12px] font-normal mt-2 text-neutral-500'>
								Set time
							</div>
						</div>

						<div className='inline-block mr-4 '>
							<div className='bg-secondary-green h-[40px] w-[90px] flex justify-center items-center text-white rounded-[8px] text-[14px] font-normal'>
								Wed
							</div>
							<div className='bg-white h-[40px] w-[90px] flex justify-center items-center rounded-[8px] text-[12px] font-normal mt-2'>
								18:00 - 20:00
							</div>
							<div className='bg-[#FFFFFFE5] h-[40px] w-[90px] flex justify-center items-center rounded-[8px] text-[12px] font-normal mt-2 text-neutral-500'>
								Set time
							</div>
						</div>

						<div className='inline-block mr-4 '>
							<div className='bg-secondary-green h-[40px] w-[90px] flex justify-center items-center text-white rounded-[8px] text-[14px] font-normal'>
								Thu
							</div>
							<div className='bg-white h-[40px] w-[90px] flex justify-center items-center rounded-[8px] text-[12px] font-normal mt-2'>
								18:00 - 20:00
							</div>
							<div className='bg-[#FFFFFFE5] h-[40px] w-[90px] flex justify-center items-center rounded-[8px] text-[12px] font-normal mt-2 text-neutral-500'>
								Set time
							</div>
						</div>

						<div className='inline-block mr-4 '>
							<div className='bg-secondary-green h-[40px] w-[90px] flex justify-center items-center text-white rounded-[8px] text-[14px] font-normal'>
								Fri
							</div>
							<div className='bg-white h-[40px] w-[90px] flex justify-center items-center rounded-[8px] text-[12px] font-normal mt-2'>
								18:00 - 20:00
							</div>
							<div className='bg-[#FFFFFFE5] h-[40px] w-[90px] flex justify-center items-center rounded-[8px] text-[12px] font-normal mt-2 text-neutral-500'>
								Set time
							</div>
						</div>

						<div className='inline-block mr-4 '>
							<div className='bg-secondary-green h-[40px] w-[90px] flex justify-center items-center text-white rounded-[8px] text-[14px] font-normal'>
								Sat
							</div>
							<div className='bg-white h-[40px] w-[90px] flex justify-center items-center rounded-[8px] text-[12px] font-normal mt-2'>
								18:00 - 20:00
							</div>
							<div className='bg-[#FFFFFFE5] h-[40px] w-[90px] flex justify-center items-center rounded-[8px] text-[12px] font-normal mt-2 text-neutral-500'>
								Set time
							</div>
						</div>

						<div className='inline-block mr-4 '>
							<div className='bg-secondary-green h-[40px] w-[90px] flex justify-center items-center text-white rounded-[8px] text-[14px] font-normal'>
								Sun
							</div>
							<div className='bg-white h-[40px] w-[90px] flex justify-center items-center rounded-[8px] text-[12px] font-normal mt-2'>
								18:00 - 20:00
							</div>
							<div className='bg-[#FFFFFFE5] h-[40px] w-[90px] flex justify-center items-center rounded-[8px] text-[12px] font-normal mt-2 text-neutral-500'>
								Set time
							</div>
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
							<ModalHeader className='flex flex-col gap-1'></ModalHeader>
							<ModalBody>
								<DateInput
									isRequired
									label={'Birth date'}
								/>
							</ModalBody>
							<ModalFooter></ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</div>
	);
}
