'use client';

import WithAuth from '../../hoc/WithAuth';
import { Header } from '@/components/Header';
import { useRouter } from 'next/navigation';
import { Background } from '../../components/Background';
import { useEffect } from 'react';
import useMatchList from '../../store/useMatchList';
import { CalendarIcon } from '@/icons/calendar';
import { PersonIcon } from '@/icons/person';
import { JudgeIcon } from '@/icons/judge';
import { DollarIcon } from '@/icons/dollar';
import { MapSimpleMarker } from '@/icons/map-simple-marker';

function MyGame() {
  const router = useRouter();
  const { picked } = useMatchList();
  console.log('🚀 ~ MyGame ~ picked:', picked);

  const handleGoBack = () => {
    router.push('/match-now');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header back={handleGoBack}></Header>
      <div className="mt-[60px]">
        <Background>
          <div className="px-3 flex flex-col">
            <h3 className="pt-3 font-medium text-xl">My game</h3>
          </div>
          <div className="px-3 flex flex-col mb-2">
            <h3 className="font-[400] text-[14px]">Your game that you joined</h3>
          </div>

          <div className="px-4 mt-4">
            <div className="bg-[#F3F3F3] w-full h-[200px] rounded-[12px] px-4 py-3">
              <p className=" font-[500] text-[16px]">Group Stage - OPUS Terminal versus OPUS CNTR</p>
              <p className=" font-[300] text-[12px] flex mt-3 gap-3">
                <CalendarIcon color="#009245" />
                12/12/2024 - 18:00 - 20:00
              </p>
              <p className=" font-[300] text-[12px] mt-1 flex gap-1 items-center">
                <MapSimpleMarker color="#009245" />
                San bong K334 - Pitch #1
              </p>
              <div className="flex  font-[300] text-[12px] gap-3 mt-1">
                <p className="flex gap-3 items-center">
                  <PersonIcon color="#009245" />
                  5-5
                </p>
                <p className="flex gap-1 items-center">
                  <JudgeIcon color="#009245" />
                  No referee
                </p>
                <p className="flex gap-1 items-center">
                  <DollarIcon color="#009245" />
                  85,000 VND
                </p>
              </div>

              <div className="flex mt-3 gap-1">
                <div className="h-[30px] w-[30px] bg-secondary-green rounded-full flex-center flex-col">
                  <p className="text-[8px] text-white">GK</p>
                  <p className="text-[8px] text-white">(1/1)</p>
                </div>

                <div className="h-[30px] w-[30px] bg-secondary-green rounded-full flex-center flex-col">
                  <p className="text-[8px] text-white">FIX</p>
                  <p className="text-[8px] text-white">(1/1)</p>
                </div>

                <div className="h-[30px] w-[30px] bg-secondary-green rounded-full flex-center flex-col">
                  <p className="text-[8px] text-white">ALA</p>
                  <p className="text-[8px] text-white">(1/1)</p>
                </div>

                <div className="h-[30px] w-[30px] bg-secondary-green rounded-full flex-center flex-col">
                  <p className="text-[8px] text-white">PIV</p>
                  <p className="text-[8px] text-white">(1/1)</p>
                </div>

                <div className="h-[30px] w-[30px] bg-white rounded-full flex-center flex-col">
                  <p className="text-[8px]">SUB</p>
                  <p className="text-[8px]">(0/1)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 mt-4">
            <div className="bg-[#F3F3F3] w-full h-[200px] rounded-[12px] px-4 py-3">
              <p className=" font-[500] text-[16px]">Group Stage - OPUS Terminal versus OPUS CNTR</p>
              <p className=" font-[300] text-[12px] flex mt-3 gap-3">
                <CalendarIcon color="#009245" />
                12/12/2024 - 18:00 - 20:00
              </p>
              <p className=" font-[300] text-[12px] mt-1 flex gap-1 items-center">
                <MapSimpleMarker color="#009245" />
                San bong K334 - Pitch #1
              </p>
              <div className="flex  font-[300] text-[12px] gap-3 mt-1">
                <p className="flex gap-3 items-center">
                  <PersonIcon color="#009245" />
                  5-5
                </p>
                <p className="flex gap-1 items-center">
                  <JudgeIcon color="#009245" />
                  No referee
                </p>
                <p className="flex gap-1 items-center">
                  <DollarIcon color="#009245" />
                  85,000 VND
                </p>
              </div>

              <div className="flex mt-3 gap-1">
                <div className="h-[30px] w-[30px] bg-secondary-green rounded-full flex-center flex-col">
                  <p className="text-[8px] text-white">GK</p>
                  <p className="text-[8px] text-white">(1/1)</p>
                </div>

                <div className="h-[30px] w-[30px] bg-secondary-green rounded-full flex-center flex-col">
                  <p className="text-[8px] text-white">FIX</p>
                  <p className="text-[8px] text-white">(1/1)</p>
                </div>

                <div className="h-[30px] w-[30px] bg-secondary-green rounded-full flex-center flex-col">
                  <p className="text-[8px] text-white">ALA</p>
                  <p className="text-[8px] text-white">(1/1)</p>
                </div>

                <div className="h-[30px] w-[30px] bg-secondary-green rounded-full flex-center flex-col">
                  <p className="text-[8px] text-white">PIV</p>
                  <p className="text-[8px] text-white">(1/1)</p>
                </div>

                <div className="h-[30px] w-[30px] bg-white rounded-full flex-center flex-col">
                  <p className="text-[8px]">SUB</p>
                  <p className="text-[8px]">(0/1)</p>
                </div>
              </div>
            </div>
          </div>
        </Background>
      </div>
    </>
  );
}

export default WithAuth(MyGame);
