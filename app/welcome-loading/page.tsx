'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Background } from '../../components/Background';
import { Progress } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import '../../styles/progress.css';
import useToken from '@/store/useToken';

export default function WelcomeLoading() {
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  const { isFieldOwner, isPlayer } = useToken();
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        if (isFieldOwner) {
          router.push('/fields');
        } else if (isPlayer) {
          router.push('/match-now');
        } else {
          router.push('/select-role');
        }
      }, 1000);
    }
  }, [isFieldOwner, isPlayer, progress, router]);

  return (
    <Background>
      <div className="min-h-screen flex flex-col items-center justify-center pb-10">
        <div className="flex flex-col justify-center items-center mb-10">
          <h1 className="text-[40px] font-medium text-center h-14">Welcome to</h1>
          <h2 className="text-[30px] font-normal font-bfo text-center">MatchMates</h2>
          <p className="text-[14px] font-normal text-center mt-3 h-4">
            You’re successful create your account! Let’s start
          </p>
          <p className="text-[14px] font-normal text-center">finding your match.</p>
        </div>

        <div className="">
          <div className="w-[264px] h-[289px] z-10">
            <Image
              src={'/images/welcome-loading-player.svg'}
              className="object-contain w-full h-full"
              width={264}
              height={289}
              alt=""
              priority
            />
          </div>
        </div>

        <div className="mt-5 flex flex-col justify-center items-center gap-3">
          <p className="text-center">Loading...</p>

          <div className="min-w-[328px]">
            <Progress
              color="default"
              value={progress}
              classNames={{
                track: 'progress-track',
              }}
            />
          </div>
        </div>
      </div>
    </Background>
  );
}
