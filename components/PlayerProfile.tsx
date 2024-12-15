'use client';

import WithAuth from '../hoc/WithAuth';
import { Header } from '@/components/Header';
import { useRouter } from 'next/navigation';
import { Background } from './Background';
import Image from 'next/image';
import { Pen } from '../icons/pen';
import { Input } from '@nextui-org/input';
import useToken from '../store/useToken';
import { Button } from '@nextui-org/button';
import { AddPaymentCard } from '@/icons/add-payment-card';
import useCardPayment from '../store/useCardPayment';
import { PaymentCard } from '@/components/PaymentCard';
import { GreenLeft } from '../icons/green-left';
import { PlayerNavigationBar } from './PlayerNavigationBar';
import axios from '@/apis';
import { ROLE } from '../constants/role';
import usePlayerType from '../store/usePlayerType';
import useRatePrice from '../store/useRatePrice';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const canSave = (timeTable: any, playerType: any, rate: any) => {
  console.log(timeTable, playerType, rate);
  return timeTable?.length > 0 && playerType?.length > 0 && Object.values(rate).length > 0;
};

export const PlayerProfile = () => {
  const router = useRouter();
  const {
    phone,
    usr_id,
    setPhone,
    getEmail,
    setEmail,
    setAge,
    getAge,
    getName,
    setName,
    getPlayerTimeTables,
    setUsrId,
    logout,
  } = useToken();
  const { getCards } = useCardPayment();
  const { getPlayerTypes } = usePlayerType();
  const { getRate } = useRatePrice();

  const handleGoBack = () => {
    if (!usr_id) {
      router.push('/select-role');
    }
  };

  const handleClickSave = async () => {
    if (!usr_id) {
      try {
        const res = await axios.post('user/register', {
          phoneNumber: phone,
          name: getName(),
          age: getAge(),
          email: getEmail(),
          userType: ROLE.PLAYER,
          playerGameInfo: {
            preferGameType: 'FIVE_FIVE',
            preferLocation: 'TAN BINH',
            playerTimeTables: getPlayerTimeTables().map((item) => ({
              dateOfWeek: item.dateOfWeek,
              startHour: +item.startHour,
              endHour: +item.endHour,
            })),
            playerTypes: getPlayerTypes(),
          },
        });
        const data = res.data;
        setUsrId(data.id);
      } catch (error) {
        console.error('🚀 ~ handleClickSave ~ error:', error);
      }
    }

    router.push('/match-now');
  };

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className="">
      <Header back={handleGoBack}>
        <Button
          radius="sm"
          color="default"
          className={`text-white ${
            canSave(getPlayerTimeTables(), getPlayerTypes(), getRate()) ? 'bg-black' : 'bg-neutral-300'
          }`}
          onPress={handleClickSave}
        >
          Save
        </Button>
      </Header>
      <div className="mt-[60px] mb-[80px]" style={{ minHeight: 'calc(100vh - 140px)' }}>
        <Background>
          <div className="px-3 flex flex-col">
            <h3 className="pt-3 font-medium text-xl">Basic Info</h3>
          </div>
          <div className="flex-center mt-3">
            <div className="w-[168px] h-[168px] bg-[#FFFFFFE5] z-100 rounded-xl shadow-custom-1 flex-center">
              <div className="relative">
                <Image src={'/images/avatar.png'} width={144} height={144} alt="" priority />

                <div className="absolute w-[48px] h-[48px] bg-neutral-50 right-0 bottom-0 rounded-tl-xl flex-center">
                  <Pen />
                </div>
              </div>
            </div>
          </div>

          <div
            className="px-3 pt-4 justify-center gap-2 grid grid-cols-2 grid-rows-2 mt-4"
            style={{
              gridTemplateColumns: '158px 158px',
              gridTemplateRows: '1fr 1fr',
            }}
          >
            <Input
              size="md"
              placeholder="Please input"
              label={<span className="text-secondary-green">Name</span>}
              isRequired
              value={getName()}
              onValueChange={setName}
            />
            <Input
              size="md"
              placeholder="Please input"
              label={<span className="text-secondary-green">Age</span>}
              type="number"
              value={getAge()}
              onValueChange={setAge}
            />
            <Input
              size="md"
              placeholder="Please input"
              label={<span className="text-secondary-green">Phone</span>}
              isRequired
              value={phone}
              onValueChange={setPhone}
            />
            <Input
              size="md"
              placeholder="Please input"
              label={<span className="text-secondary-green">Email</span>}
              value={getEmail()}
              onValueChange={setEmail}
            />
          </div>

          <div className="px-3 flex flex-col mt-2 mb-4">
            <h3 className="pt-3 font-medium text-xl">Payment List</h3>
          </div>

          <div className="px-3 flex flex-col gap-3 ">
            {getCards().map((item) => (
              <PaymentCard key={item.id} card={item} />
            ))}

            <Button
              radius="sm"
              className="w-full font-inter text-regular text-secondary-green font-normal text-opacity-80 bg-[#FFFFFFE5] h-[48px] text-[16px]"
              onPress={() => router.push('/add-payment-card')}
            >
              <AddPaymentCard />
              Add Payment Card
            </Button>
          </div>

          <div className="px-3 flex flex-col mt-3">
            <h3 className="pt-3 font-medium text-xl">Your prefer</h3>
          </div>
          <div>
            <h3 className="px-3 font-normal text-[14px]">Help us find you match games</h3>
          </div>

          <div className="mt-3 px-3 gap-2 flex flex-col">
            <div
              className="w-full h-[48px] rounded-[8px] flex flex-start bg-[#FFFFFFE5] items-center justify-between"
              onClick={() => router.push('time-table')}
            >
              <div className="ml-6">Timetable</div>
              <div className="mr-10">
                <GreenLeft />
              </div>
            </div>

            <div
              className="w-full h-[48px] rounded-[8px] flex flex-start bg-[#FFFFFFE5] items-center justify-between"
              onClick={() => router.push('player-type')}
            >
              <div className="ml-6">Player type</div>
              <div className="mr-10">
                <GreenLeft />
              </div>
            </div>

            <div
              className="w-full h-[48px] rounded-[8px] flex flex-start bg-[#FFFFFFE5] items-center justify-between"
              onClick={() => router.push('/use-my-location')}
            >
              <div className="ml-6">Location</div>
              <div className="mr-10">
                <GreenLeft />
              </div>
            </div>

            <div
              className="w-full h-[48px] rounded-[8px] flex flex-start bg-[#FFFFFFE5] items-center justify-between"
              onClick={() => router.push('/rate-price')}
            >
              <div className="ml-6">Rate/Price</div>
              <div className="mr-10">
                <GreenLeft />
              </div>
            </div>

            <Button
              className="w-full h-[48px] rounded-[8px] text-white bg-black"
              onPress={() => handleLogout()}
              color="danger"
            >
              <div>Logout</div>
            </Button>

            {/*<div className='w-full h-[48px] rounded-[8px] flex flex-start bg-[#FFFFFFE5] items-center justify-between'>
							<div className='ml-6'>Rate/Price</div>
							<div className='mr-10'>
								<GreenLeft />
							</div>
						</div> */}
          </div>

          <div className="h-[100px]"></div>
        </Background>
      </div>

      <PlayerNavigationBar />
    </div>
  );
};

export default WithAuth(PlayerProfile);
