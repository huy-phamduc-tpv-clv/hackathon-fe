'use client';

import WithAuth from '@/hoc/WithAuth';
import { Header } from '@/components/Header';
import { useRouter } from 'next/navigation';
import { Background } from '@/components/Background';
import { Button } from '@nextui-org/button';
import { Slider } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import useRatePrice from '@/store/useRatePrice';

const RacePrice = () => {
  const router = useRouter();
  const { setRate } = useRatePrice();
  const [rateLocal, setRateLocal] = useState({ preferPriceStart: 0, preferPriceEnd: 0 });

  const handleGoBack = () => {
    router.push('/profile');
  };

  const handleOnDragAndDrop = (value: number[] | number) => {
    if (Array.isArray(value)) {
      setRateLocal({ preferPriceStart: value[0], preferPriceEnd: value[1] });
    }
  };

  const handleSaveRatePrice = () => {
    setRate(rateLocal);
    router.push('/profile');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="">
      <Header back={handleGoBack}>
        <Button radius="sm" color="default" className="text-white bg-primary-black" onPress={handleSaveRatePrice}>
          Save
        </Button>
      </Header>
      <div className="mt-[60px]" style={{ minHeight: 'calc(100vh - 140px)' }}>
        <Background>
          <div className="mt-[60px] px-3">
            <h3 className="pt-3 font-[400] text-[14px]">Set up your prefer rate to match easier</h3>
          </div>
          <div className="bg-white mt-5 mx-3 h-[100px] rounded-[12px] p-3">
            <Slider
              className="max-w-md "
              defaultValue={[50_000, 5_000_000]}
              formatOptions={{ style: 'currency', currency: 'VND' }}
              label={<span className="text-[16px] font-medium">Price rate per game</span>}
              maxValue={5_000_000}
              minValue={0}
              step={50_000}
              color="success"
              classNames={{ track: 'h-[5px]' }}
              onChangeEnd={handleOnDragAndDrop}
            />
          </div>

          <div className="bg-white mt-5 mx-3 h-[100px] rounded-[12px] p-3">
            <Slider
              className="max-w-md "
              defaultValue={[50_000, 5_000_000]}
              formatOptions={{ style: 'currency', currency: 'VND' }}
              label={<span className="text-[16px] font-medium">Price rate per hour</span>}
              maxValue={5_000_000}
              minValue={0}
              step={50_000}
              color="success"
              classNames={{ track: 'h-[5px]' }}
            />
          </div>
        </Background>
      </div>
    </div>
  );
};

export default WithAuth(RacePrice);
