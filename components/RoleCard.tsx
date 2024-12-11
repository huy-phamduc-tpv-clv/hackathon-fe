import Image from 'next/image';

const CustomCheckbox = ({
	title,
	checked,
}: {
	title: string;
	checked: boolean;
}) => {
	return (
		<label className='relative flex items-center cursor-pointer mx-auto mb-5'>
			<span
				className={`w-[16px] h-[16px] border-2 rounded-full flex items-center justify-center transition-all ${
					checked ? 'border-secondary-green' : ''
				}`}
			>
				<span
					className={`w-[6px] h-[6px] rounded-full transition-all ${
						checked ? ' bg-secondary-green' : ''
					}`}
				></span>
			</span>
			<span className='text-[14px] font-[600] ml-2'>{title}</span>
		</label>
	);
};

export const RoleCard = ({
	isActive,
	image,
	title,
	onClick,
}: {
	isActive: boolean;
	image: string;
	title: string;
	onClick: () => void;
}) => {
	return (
		<div
			onClick={onClick}
			className={`bg-[#A6E8184D] z-10 rounded-[14px] flex-center flex-col transition-all ${
				isActive
					? 'bg-[#A6E8184D] border-[5px] border-secondary-green'
					: 'bg-[#FFFFFF]'
			}`}
		>
			<CustomCheckbox
				title={title}
				checked={isActive}
			/>
			<div className=''>
				<Image
					src={image}
					width={120}
					height={100}
					alt=''
				/>
			</div>
		</div>
	);
};
