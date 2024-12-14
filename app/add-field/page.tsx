'use client';

import WithAuth from '../../hoc/WithAuth';
import { Header } from '@/components/Header';
import { useRouter } from 'next/navigation';
import { Background } from '../../components/Background';
import { Button } from '@nextui-org/button';
import { Input, Textarea } from '@nextui-org/input';
import { useEffect, useState } from 'react';
import useCardPayment, { Card } from '../../store/useCardPayment';
import { v4 as uid } from 'uuid';
import { Checkbox, CheckboxGroup } from '@nextui-org/react';
import { AddPaymentCard } from '@/icons/add-payment-card';

const isInputted = (card: Card) => {
    return card.card_number.length && card.cvv.length && card.cvv.length;
};

function Profile() {
    const router = useRouter();
    const [card, setCard] = useState<Card>({
        owner_name: '',
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
                    className={`text-white ${isInputted(card)
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
                        <h3 className='pt-3 font-semibold text-xl'>
                            Create new field
                        </h3>
                    </div>

                    <div className='pt-4'>
                        <div className='px-3 flex flex-col gap-3'>
                            <h4 className='font-medium text-xl'>
                                Basic Info
                            </h4>
                            <Input
                                size='md'
                                placeholder='Please input'
                                label={
                                    <span className='text-secondary-green'>
                                        Field Name
                                    </span>
                                }
                                value={card.owner_name}
                                onValueChange={value =>
                                    setCard(preState => ({
                                        ...preState,
                                        owner_name: value.toUpperCase(),
                                    }))
                                }
                                isRequired
                                maxLength={50}
                            />
                            <Textarea
                                size='md'
                                placeholder='Please input'
                                label={
                                    <span className='text-secondary-green'>
                                        Address Number
                                    </span>
                                }
                                value={card.card_number}
                                onValueChange={handleCardNumberChange}
                                maxLength={50}
                                isRequired
                            />
                            <Textarea
                                size='md'
                                placeholder='Please input'
                                label={
                                    <span className='text-secondary-green'>
                                        Description
                                    </span>
                                }
                                value={card.card_number}
                                onValueChange={handleCardNumberChange}
                                maxLength={50}

                            />
                        </div>

                        <div className='px-3 pt-4 flex flex-col gap-3'>
                            <div className='grid grid-cols-2 grid-flow-row'>
                                <h4 className='font-medium text-xl items-start'>
                                    Service
                                </h4>
                                <div className="flex gap-4 justify-end">
                                    <Checkbox size="md">ALL</Checkbox>
                                </div>
                            </div>

                            <CheckboxGroup
                                color="secondary"
                                defaultValue={[]}
                                orientation="horizontal"
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    <Checkbox value="wifi" size="lg" >Wifi</Checkbox>
                                    <Checkbox value="food" size="lg">Food</Checkbox>
                                    <Checkbox value="rest-room" size="lg">Restroom</Checkbox>
                                    <Checkbox value="car-park" size="lg">Car park</Checkbox>
                                </div>
                            </CheckboxGroup>
                        </div>
                        <div className='px-3 pt-4 flex flex-col gap-3'>
                            <h4 className='font-medium text-xl items-start'>
                                Photo/Video
                            </h4>
                            <Button className='w-full bg-white' color='default' size='lg' >
                                <AddPaymentCard />
                                Add Media
                            </Button>
                        </div>

                    </div>
                </Background>
            </div>
        </>
    );
}

export default WithAuth(Profile);
