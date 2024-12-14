'use client';

import WithAuth from '../../hoc/WithAuth';
import { Header } from '@/components/Header';
import { useRouter } from 'next/navigation';
import { Background } from '../../components/Background';
import { Button } from '@nextui-org/button';
import { useEffect } from 'react';
import Image from 'next/image';

function Profile() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/profile');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header back={handleGoBack}></Header>
      <div className="mt-[60px]">
        <Background>
          <div className="flex-center">
            <Image src={'/images/use-my-location.png'} width={292} height={292} alt="" />
          </div>
          <div className="mx-4">
            <Button className="w-full h-[48px] bg-primary-black rounded-[8px] text-[#FFFFFFE5] font-light">
              Allow to use my location
            </Button>
          </div>
        </Background>
      </div>
    </>
  );
}

export default WithAuth(Profile);
