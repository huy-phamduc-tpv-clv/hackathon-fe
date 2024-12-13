'use client';

import WithAuth from '../../hoc/WithAuth';
import { Header } from '@/components/Header';
import { useRouter } from 'next/navigation';
import { Background } from '../../components/Background';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { useEffect, useState } from 'react';
import useCardPayment, { Card } from '../../store/useCardPayment';
import { v4 as uid } from 'uuid';

const isInputted = (card: Card) => {
	return card.card_number.length && card.cvv.length && card.cvv.length;
};

function Profile() {
	const router = useRouter();
	const [card, setCard] = useState<Card>({
		card_number: '',
		cvv: '',
		expiration: '',
		id: uid(),
		type: '',
	});
	const { addCard } = useCardPayment();

	const handleGoBack = () => {
		router.push('/profile');
	};

	const handleSaveCard = () => {
		if (!isInputted(card)) return;

		addCard(card);

		router.push('/profile');
	};

	const handleExpirationChange = (value: string) => {
		const numericValue = value.replace(/\D/g, '');

		if (numericValue.length > 4) return;

		let formattedValue = numericValue;

		if (numericValue.length >= 3) {
			formattedValue = `${numericValue.slice(0, 2)}/${numericValue.slice(
				2,
				4,
			)}`;
		}

		if (
			numericValue.length >= 2 &&
			parseInt(numericValue.slice(0, 2)) > 12
		) {
			return;
		}

		setCard(prevState => ({
			...prevState,
			expiration: formattedValue,
		}));
	};

	const handleCardNumberChange = (value: string) => {
		const numericValue = value.replace(/\D/g, '');

		if (numericValue.length <= 16) {
			setCard(prevState => ({
				...prevState,
				card_number: numericValue,
			}));
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Header back={handleGoBack}>
				<Button
					radius='sm'
					color='default'
					className={`text-white ${
						isInputted(card)
							? ' bg-primary-black'
							: 'bg-neutral-300'
					}`}
					onPress={handleSaveCard}
					disabled
				>
					Save
				</Button>
			</Header>
			<div className='mt-[60px]'>
				<Background>
					<div className='px-3 flex flex-col'>
						<h3 className='pt-3 font-medium text-xl'>
							Add Payment Card
						</h3>
					</div>

					<div className='px-3 pt-4  flex flex-col gap-3'>
						<Input
							size='md'
							placeholder='Please input'
							label={
								<span className='text-secondary-green'>
									Card Number
								</span>
							}
							value={card.card_number}
							onValueChange={handleCardNumberChange}
							maxLength={16}
							type='number'
						/>
						<div className='flex gap-3'>
							<Input
								size='md'
								placeholder='Please input'
								label={
									<span className='text-secondary-green'>
										Expiration
									</span>
								}
								value={card.expiration}
								onValueChange={handleExpirationChange}
								maxLength={5}
							/>
							<Input
								size='md'
								placeholder='Please input'
								label={
									<span className='text-secondary-green'>
										CVV
									</span>
								}
								value={card.cvv}
								onValueChange={value =>
									setCard(preState => ({
										...preState,
										cvv: value,
									}))
								}
								maxLength={3}
							/>
						</div>
					</div>
				</Background>
			</div>
		</>
	);
}

export default WithAuth(Profile);
