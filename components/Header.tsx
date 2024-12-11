import { ReactNode } from 'react';
import { ArrowLeftIcon } from '../icons/arrow-left';

export const Header = ({
	children,
	back,
}: {
	children?: ReactNode;
	back?: () => void;
}) => {
	return (
		<header className='bg-[#FFFFFF] h-[60px] z-10 w-full flex justify-between items-center px-4'>
			<div
				className='w-[48px] h-[48px] flex-center'
				onClick={() => back && back()}
			>
				{back && <ArrowLeftIcon />}
			</div>
			<div>{children}</div>
		</header>
	);
};
