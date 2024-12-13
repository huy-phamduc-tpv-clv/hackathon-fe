'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Background } from './Background';
import Link from 'next/link';
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Button,
	SharedSelection,
} from '@nextui-org/react';

const MobileChecking = ({ children }: { children: React.ReactNode }) => {
	const [isMobile, setIsMobile] = useState<boolean | null>(null);
	const [desLabel, setDesLabel] = useState<string>(
		'Explore your football team, pitch and fun time now.',
	);
	const [desLabel1, setDesLabel1] = useState<string>(
		'The easiest way to <strong>#MatchMates</strong> for you!',
	);
	const [desLabel2, setDesLabel2] = useState<string>(
		'Scan here to find and start your team on your mobile.',
	);
	const [selectedKeys, setSelectedKeys] = React.useState(new Set(['EN']));
	const handleSelectionChange = (keys: SharedSelection) => {
		if (keys !== 'all') {
			const newSelectedKeys = new Set<string>();
			if (keys.currentKey) {
				newSelectedKeys.add(keys.currentKey);
			}
			setSelectedKeys(newSelectedKeys);
		}
	};
	const selectedValue = React.useMemo(
		() => Array.from(selectedKeys).join(', ').replace(/_/g, ''),
		[selectedKeys],
	);
	useEffect(() => {
		const languageChoice = Array.from(selectedKeys)
			.join(', ')
			.replace(/_/g, '');
		if (languageChoice == 'VN') {
			setDesLabel('Explore your football team, pitch and fun time now.');
			setDesLabel1(
				'The easiest way to <strong>#MatchMates</strong> for you!',
			);
			setDesLabel2(
				'Scan here to find and start your team on your mobile.',
			);
		} else if (languageChoice == 'KR') {
			setDesLabel('지금 바로 나만의 축구 메이트를 찾아 보세요!');
			setDesLabel1('#MatchMates과 함께 더욱 짜릿한 축구!');
			setDesLabel2('여기를 스캔하여 모바일에서 팀을 찾아 시작하세요.');
		} else {
			setDesLabel('Explore your football team, pitch and fun time now.');
			setDesLabel1(
				'The easiest way to <strong>#MatchMates</strong> for you!',
			);
			setDesLabel2(
				'Scan here to find and start your team on your mobile.',
			);
		}
	}, [selectedKeys]);
	const checkIfMobile = () => {
		if (typeof window !== 'undefined') {
			const userAgent = navigator.userAgent.toLowerCase() || '';
			const isPhone = /mobile/i.test(userAgent);
			return isPhone && window.innerWidth <= 768;
		}
		return false;
	};

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(checkIfMobile());
		};

		checkMobile();

		window.addEventListener('resize', checkMobile);

		return () => {
			window.removeEventListener('resize', checkMobile);
		};
	}, []);

	if (isMobile === null) {
		return <Background />;
	}

	if (!isMobile) {
		return (
			<div>
				<div
					className='flex w-full h-[93vh]'
					style={{
						backgroundImage: "url('/images/bg-landing.png')",
						backgroundSize: 'cover',
					}}
				>
					<div className='mx-auto pt-14 w-full'>
						<div>
							<Image
								src={'/images/MatchMates.png'}
								className='mx-auto'
								width={508}
								height={70}
								alt=''
							/>
						</div>
						<p className='text-center pt-3 text-2xl font-medium'>
							{desLabel}
						</p>
						<div className=' grid mx-auto pt-[470px] w-full grid-cols-5 grid-flow-row gap-4'>
							<div className='col-span-3'>
								<p
									className='text-right text-white font-light pt-3 text-4xl'
									dangerouslySetInnerHTML={{
										__html: desLabel1,
									}}
								>
									{}
								</p>
								<p className='text-right text-white font-light text-lg'>
									{desLabel2}
								</p>
							</div>
							<div className='col-span-2'>
								<Image
									src={'/images/qr-code.png'}
									width={136}
									height={136}
									alt=''
								/>
							</div>
						</div>
					</div>
					<div className='items-end z-50'>
						<Dropdown>
							<DropdownTrigger>
								<Button
									className='capitalize'
									variant='bordered'
								>
									{selectedValue}
								</Button>
							</DropdownTrigger>
							<DropdownMenu
								disallowEmptySelection
								selectedKeys={selectedKeys}
								selectionMode='single'
								// variant="flat"
								onSelectionChange={handleSelectionChange}
							>
								<DropdownItem key='VN'>VN</DropdownItem>
								<DropdownItem key='KR'>KR</DropdownItem>
								<DropdownItem key='EN'>EN</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>
				</div>
				<div className='grid  grid-cols-2 grid-flow-row gap-4 w-full h-[7vh] bg-black'>
					{/* <p className='text-white'></p> */}
					<div className='text-white content-center w-full'>
						<Image
							src={'/images/clt-logo-landing-1.png'}
							className='mx-auto'
							width={138}
							height={41}
							alt=''
						/>
					</div>
					<div className='text-white content-center w-full'>
						Copyright from CLT 2024 Hackathon - Product of{' '}
						<Link
							className='text-blue-700'
							href='/#'
						>
							B.L.U.C Team
						</Link>
					</div>
				</div>
			</div>
		);
	}

	return <>{children}</>;
};

export default MobileChecking;
