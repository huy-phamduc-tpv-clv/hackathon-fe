import { Input } from '@nextui-org/react';
import { useState } from 'react';

const TimeInput = ({
	label,
	onMinuteChange,
	onHourChange,
}: {
	label: string;
	onMinuteChange: (value: string) => void;
	onHourChange: (value: string) => void;
}) => {
	const [hour, setHour] = useState('');
	const [minute, setMinute] = useState('');

	const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;

		if (/^[1-9]$|^[1-2][0-9]$|^2[0-3]$/.test(newValue) || newValue === '') {
			setHour(newValue);
			onHourChange(newValue);
		}
	};

	const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;

		if (/^[0-5]$|^[1-5][0-9]$/.test(newValue) || newValue === '') {
			setMinute(newValue);
			onMinuteChange(newValue);
		}
	};

	return (
		<div className='flex-center gap-3'>
			<p className='flex-grow'>{label}</p>
			<div>
				<Input
					label={'Hour'}
					placeholder='HH'
					value={hour}
					onChange={handleHourChange}
					className='w-[100px]'
					type='number'
				/>
			</div>
			<div>
				<Input
					value={minute}
					label='Minute'
					placeholder='MM'
					onChange={handleMinuteChange}
					className='w-[100px]'
					type='number'
				/>
			</div>
		</div>
	);
};

export default TimeInput;
