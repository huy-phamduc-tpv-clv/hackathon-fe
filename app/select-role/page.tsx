'use client';

import { Background } from '@/components/Background';
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
import { ArrowRightIcon } from '../../icons/arrow-right';
import { ArrowLeftIcon } from '../../icons/arrow-left';
import { useRouter } from 'next/navigation';
import { RoleCard } from '@/components/RoleCard';
import useToken from '../../store/useToken';
import { ROLE } from '../../constants/role';

export default function SelectRolePage() {
	const router = useRouter();
	const { setUserType: setUser } = useToken();

	const [selectRole, setSelectRole] = useState({
		player: false,
		field_owner: false,
		referee: false,
		fan: false,
	});

	const isSelectedRole = Object.values(selectRole).some(Boolean);

	const handleSelectRole = async () => {
		if (!isSelectedRole) return;

		const payload = {
			userType: selectRole.player ? ROLE.PLAYER : ROLE.FIELD_OWNER,
		};

		setUser(payload.userType);
		router.push('/profile');
	};

	return (
		<Background>
			<div className='pb-10 flex flex-col justify-center items-center w-full min-h-screen px-4'>
				<div>
					<h2 className='font-medium text-xl text-center'>
						Select your prefer role
					</h2>
				</div>

				<div
					className='grid grid-cols-2 grid-rows-2 gap-[16px] mt-4'
					style={{
						gridTemplateColumns: '156px 156px',
						gridTemplateRows: '191px 191px',
					}}
				>
					<RoleCard
						isActive={selectRole.player}
						image='/images/role-player.svg'
						title='Player'
						onClick={() =>
							setSelectRole({
								player: true,
								fan: false,
								field_owner: false,
								referee: false,
							})
						}
					/>
					<RoleCard
						isActive={selectRole.field_owner}
						image='/images/role-field-owner.svg'
						title='Field Owner'
						onClick={() =>
							setSelectRole({
								player: false,
								field_owner: true,
								referee: false,
								fan: false,
							})
						}
					/>
					{/* <RoleCard
						isActive={selectRole.referee}
						image='/images/role-referee.svg'
						title='Referee'
						onClick={() =>
							setSelectRole({
								player: false,
								field_owner: false,
								referee: !selectRole.referee,
								fan: false,
							})
						}
						disable
					/>
					<RoleCard
						isActive={selectRole.fan}
						image='/images/role-fan.svg'
						title='Fan'
						onClick={() =>
							setSelectRole({
								player: false,
								field_owner: false,
								referee: false,
								fan: !selectRole.fan,
							})
						}
						disable
					/> */}
				</div>

				<div className='w-full flex justify-between mt-28'>
					<Button
						size='sm'
						radius='sm'
						className='min-w-[48px] h-[48px] p-0'
						onPress={() => router.push('login')}
					>
						<ArrowLeftIcon />
					</Button>
					<Button
						onPress={handleSelectRole}
						size='lg'
						radius='sm'
						endContent={<ArrowRightIcon />}
						className={`transition-all min-w-[112px] text-neutral-900 relative ${
							isSelectedRole ? '' : 'bg-neutral-300'
						}`}
						disabled={!isSelectedRole}
					>
						Next
					</Button>
				</div>
			</div>
		</Background>
	);
}
