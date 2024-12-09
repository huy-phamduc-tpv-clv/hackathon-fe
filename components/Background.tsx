import { ReactNode } from 'react';

export const Background = ({ children }: { children?: ReactNode }) => {
	return (
		<section className='bg-gradient-to-b from-[#E8FFB6] to-[#009245] min-h-screen relative'>
			<div className=" bg-[url('/images/grain-gray.png')] inset-0 bg-cover bg-center absolute opacity-15 pointer-events-none"></div>
			<div className='opacity-100 h-full'>{children}</div>
		</section>
	);
};
