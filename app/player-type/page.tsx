'use client';

import WithAuth from '../../hoc/WithAuth';
import { Header } from '@/components/Header';
import { useRouter } from 'next/navigation';
import { Background } from '../../components/Background';
import { Button } from '@nextui-org/button';
import { NavigationBar } from '@/components/NavigationBar';
import { GreenLeft } from '../../icons/green-left';
import { AddPaymentCard } from '@/icons/add-payment-card';

const PlayerType = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/profile');
  };

  return (
    <div className="">
      <Header back={handleGoBack}>
        <Button radius="sm" color="default" className="text-white bg-neutral-300">
          Save
        </Button>
      </Header>
      <div className="mt-[60px] mb-[80px]" style={{ minHeight: 'calc(100vh - 140px)' }}>
        <Background>
          <div className="px-3 flex flex-col">
            <h3 className="pt-3 font-medium text-xl">Player Type</h3>
          </div>

          <div className="px-3 flex flex-col">
            <h3 className="pt-3 font-medium text-xl">Single</h3>
          </div>
          <div>
            <h3 className="px-3 font-normal text-[14px]">Set up your prefer as a single</h3>
          </div>

          <div className="mt-3 px-3 gap-2 flex flex-col">
            <div
              className="w-full h-[48px] rounded-[8px] flex flex-start bg-[#FFFFFFE5] items-center justify-between"
              onClick={() => router.push('add-5-5')}
            >
              <div className="ml-6">5-5</div>
              <div className="mr-10">
                <GreenLeft />
              </div>
            </div>

            <div
              className="w-full h-[48px] rounded-[8px] flex flex-start bg-[#FFFFFFE5] items-center justify-between"
              onClick={() => router.push('add-7-7')}
            >
              <div className="ml-6">7-7</div>
              <div className="mr-10">
                <GreenLeft />
              </div>
            </div>

            <div
              className="w-full h-[48px] rounded-[8px] flex flex-start bg-[#FFFFFFE5] items-center justify-between"
              onClick={() => router.push('add-11-11')}
            >
              <div className="ml-6">11-11</div>
              <div className="mr-10">
                <GreenLeft />
              </div>
            </div>

            {/* <div className='w-full h-[48px] rounded-[8px] flex flex-start bg-[#FFFFFFE5] items-center justify-between'>
							<div className='ml-6'>Location</div>
							<div className='mr-10'>
								<GreenLeft />
							</div>
						</div>

						<div className='w-full h-[48px] rounded-[8px] flex flex-start bg-[#FFFFFFE5] items-center justify-between'>
							<div className='ml-6'>Rate/Price</div>
							<div className='mr-10'>
								<GreenLeft />
							</div>
						</div> */}
          </div>

          <div className="px-3 flex flex-col mt-1">
            <h3 className="pt-3 font-medium text-xl">Team Lineup</h3>
          </div>
          <div>
            <h3 className="px-3 font-normal text-[14px]">Set up your prefer as a whole team</h3>
          </div>

          <div className="px-3 flex flex-col gap-3 ">
            <Button
              radius="sm"
              className="mt-4 w-full font-inter text-regular text-secondary-green font-normal text-opacity-80 bg-[#FFFFFFE5] h-[48px] text-[16px]"
            >
              <AddPaymentCard />
              Add Lineup
            </Button>
          </div>

          <div className="h-[100px]"></div>
        </Background>
      </div>

      <NavigationBar />
    </div>
  );
};

export default WithAuth(PlayerType);
