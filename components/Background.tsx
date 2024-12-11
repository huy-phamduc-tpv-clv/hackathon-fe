import { ReactNode } from 'react';

export const Background = ({ children }: { children?: ReactNode }) => {
	return (
		<section className='bg-gradient-to-b from-[#E8FFB6] to-[#009245] min-h-screen relative z-40'>
			<div className="bg-[url('/images/grain-gray.png')] inset-0 bg-cover bg-center absolute opacity-15 pointer-events-none z-0"></div>

			<div className='relative z-10 h-full'>{children}</div>
		</section>
	);
};
