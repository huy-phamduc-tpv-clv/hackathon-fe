'use client';

import { Background } from '@/components/Background';
import { PlayerNavigationBar } from '@/components/PlayerNavigationBar';
import Image from 'next/image';
import { CalendarIcon } from '../../icons/calendar';
import { PersonIcon } from '@/icons/person';
import { JudgeIcon } from '../../icons/judge';
import { DollarIcon } from '../../icons/dollar';
import { MapSimpleMarker } from '../../icons/map-simple-marker';
import { useEffect } from 'react';
import useMatchList, { Match } from '@/store/useMatchList';
import TinderCard from 'react-tinder-card';
import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';
// import axios from '@/apis';
import useToken from '@/store/useToken';

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const DefaultImage = () => {
  return `/png/psframe_${getRandomNumber(2, 102)}.png`;
};

export default function MatchNow() {
  const { getMatchList, setMatchList, swiftRight } = useMatchList();
  const { getUsrId } = useToken();
  const randomME = [
    'top-[25px]',
    'top-[80px]',
    'top-[150px]',
    'top-[120px] right-[65px]',
    'top-[120px] left-[65px]',

    'bottom-[25px]',
    'bottom-[80px]',
    'bottom-[150px]',
    'bottom-[120px] right-[65px]',
    'bottom-[120px] left-[65px]',
  ];
  const router = useRouter();

  useEffect(() => {
    const fetchList = async () => {
      console.log(getUsrId());
      // const response = await axios.get('/game/match', { headers: { ['USERID']: getUsrId(), AAA: 1, bbb: 1 } });
      // const data = response.data;
      // console.log('🚀 ~ fetchList ~ data:', data);

      const res = [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
        { id: '5' },
        { id: '6' },
        { id: '7' },
        { id: '8' },

        { id: '9' },
        { id: '10' },
        { id: '11' },
        { id: '12' },
        { id: '13' },
        { id: '14' },
        { id: '15' },
        { id: '16' },
      ];

      setMatchList(res);
    };

    if (getUsrId()) {
      fetchList();
    }
  }, [getUsrId, setMatchList]);

  const handleSwipe = (direction: string, match: Match) => {
    if (direction === 'left') {
      handleSkip(match);
    }

    if (direction === 'right') {
      handleJoin(match);
    }
  };

  const handleSkip = (match: Match) => {
    console.log('skip', match);
  };
  const handleJoin = (match: Match) => {
    console.log('join', match);
    swiftRight(match);
  };

  return (
    <Background>
      <div className="pt-[10px]"></div>

      <div className="cardContainer  h-[400px] flex-center">
        {getMatchList().map((item: Match, index) => (
          <TinderCard className="swipe" key={index} onSwipe={(dir) => handleSwipe(dir, item)}>
            <div className="flex justify-center relative h-[400px]">
              <Image alt="" width={43} height={43} src={DefaultImage()} className="absolute top-[25px]" />
              <Image alt="" width={43} height={43} src={DefaultImage()} className="absolute top-[80px]" />
              <Image alt="" width={43} height={43} src={DefaultImage()} className="absolute top-[150px]" />
              <Image alt="" width={43} height={43} src={DefaultImage()} className="absolute top-[120px] right-[65px]" />
              <Image alt="" width={43} height={43} src={DefaultImage()} className="absolute top-[120px] left-[65px]" />

              {/**/}

              <Image alt="" width={43} height={43} src={DefaultImage()} className="absolute bottom-[25px]" />
              <Image alt="" width={43} height={43} src={DefaultImage()} className="absolute bottom-[80px]" />
              <Image alt="" width={43} height={43} src={DefaultImage()} className="absolute bottom-[150px]" />
              <Image
                alt=""
                width={43}
                height={43}
                src={DefaultImage()}
                className="absolute bottom-[120px] right-[65px]"
              />
              <Image
                alt=""
                width={43}
                height={43}
                src={DefaultImage()}
                className="absolute bottom-[120px] left-[65px]"
              />

              <Image
                alt=""
                width={43}
                height={43}
                src={`/psframe_/psframe_1.svg`}
                className={`absolute ${randomME[getRandomNumber(0, 9)]}`}
              />

              <Image alt="" src={'/images/stadium.png'} width={330} height={400} />
            </div>
          </TinderCard>
        ))}
      </div>

      <div className="text-[#A6E818] text-[36px] font-[500] text-center my-3">You got a match</div>

      <div className="px-5 text-[#FFFFFFE5]">
        <p className="text-[#FFFFFFE5] font-[500] text-[16px]">Group Stage - OPUS Terminal versus OPUS CNTR</p>
        <p className="text-[#FFFFFFE5] font-[300] text-[12px] flex mt-3 gap-3">
          <CalendarIcon />
          12/12/2024 - 18:00 - 20:00
        </p>
        <p className="text-[#FFFFFFE5] font-[300] text-[12px] mt-1 flex gap-1 items-center">
          <MapSimpleMarker />
          San bong K334 - Pitch #1
        </p>
        <div className="flex text-[#FFFFFFE5] font-[300] text-[12px] gap-3 mt-1">
          <p className="flex gap-3 items-center">
            <PersonIcon />
            5-5
          </p>
          <p className="flex gap-1 items-center">
            <JudgeIcon />
            No referee
          </p>
          <p className="flex gap-1 items-center">
            <DollarIcon />
            85,000 VND
          </p>
        </div>

        <div className="flex mt-6 gap-4">
          <Button
            className="w-full bg-[#009245] text-[#FFFFFFE5] rounded-[8px]"
            onPress={() => router.push('/my-game')}
          >
            Join Now
          </Button>
        </div>
      </div>

      <div className="h-[150px]"></div>

      <PlayerNavigationBar />
    </Background>
  );
}
