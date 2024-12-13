import Image from 'next/image';
import { Pen } from '@/icons/pen';
import { Card } from '../store/useCardPayment';

const addXs = (str: string) => {
	const lastChars = (str || '0000').slice(-4);
	return 'XXXX-XXXX-XXXX-' + lastChars;
};

export const PaymentCard = ({ card }: { card: Card }) => {
	return (
		<div className='w-full h-[72px] bg-[#FFFFFFE5] rounded-xl flex items-center gap-3 px-3'>
			<div className='w-[49px] h-[39px]'>
				<Image
					src={'/images/visa.png'}
					alt=''
					width={49}
					height={39}
					priority
				/>
			</div>
			<span className='font-semibold flex-grow'>
				{addXs(card.card_number)}
			</span>

			<div className='bg-white rounded-xl'>
				<div className='w-[48px] h-[48px] flex-center'>
					<Pen />
				</div>
			</div>
		</div>
	);
};
