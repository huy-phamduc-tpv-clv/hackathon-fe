'use client';

import { Background } from '@/components/Background';
import { PlayerNavigationBar } from '@/components/PlayerNavigationBar';
import Image from 'next/image';
import { CalendarIcon } from '../../icons/calendar';
import { PersonIcon } from '@/icons/person';
import { JudgeIcon } from '../../icons/judge';
import { DollarIcon } from '../../icons/dollar';
import { MapSimpleMarker } from '../../icons/map-simple-marker';
import { useEffect, useState } from 'react';
import useMatchList, { Match } from '@/store/useMatchList';
import TinderCard from 'react-tinder-card';
import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';
import axios from '@/apis';
import useToken from '@/store/useToken';

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const DefaultImage = () => {
  return `/png/psframe_${getRandomNumber(2, 102)}.png`;
};

function convertDateFormat(dateString: string): string {
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (!regex.test(dateString)) {
    return '';
  }

  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year}`;
}

function formatCurrencyCustom(amount: string): string {
  return amount.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default function MatchNow() {
  const [currentMatch, setCurrentMatch] = useState<Match>({ id: '' });
  const { getMatchList, setMatchList, swiftRight } = useMatchList();
  const { getUsrId } = useToken();
  const randomME = [
    'top-[26px]',
    'top-[80px]',
    'top-[150px]',
    'top-[120px] right-[65px]',
    'top-[120px] left-[65px]',

    'bottom-[18px]',
    'bottom-[73px]',
    'bottom-[143px]',
    'bottom-[113px] right-[65px]',
    'bottom-[113px] left-[65px]',
  ];
  const router = useRouter();

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get('/game/match', { headers: { ['USERID']: getUsrId(), AAA: 1, bbb: 1 } });
        const data = response.data;
        console.log('🚀 ~ fetchList ~ data:', data);

        const MAP_REFEREE_TYPE = {
          MANDATORY: 'Mandatory',
          NOT_REQUIRED: 'No referee',
          PLAYER_CHOICE: 'Player Choice',
          '': 'No referee',
        };

        setCurrentMatch({
          id: data[0]?.id ?? '',
          name: data[0]?.name || '',

          date: convertDateFormat(data[0]?.date ?? ''),
          timeSlotStart: data[0]?.timeSlot?.startHour ?? '',
          timeSlotEnd: data[0]?.timeSlot?.endHour ?? '',

          fieldName: data[0]?.field?.fieldName ?? '',
          pitchName: data[0]?.pitch?.name ?? '',

          refereeType: MAP_REFEREE_TYPE[(data[0]?.refereeType as '') ?? ''],
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          price: formatCurrencyCustom(data[0].price as ''),
        });
        setMatchList(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data.map((item: any, index: number) => ({
            id: item?.id || index,
            name: item?.name || '',

            date: convertDateFormat(item?.date ?? ''),
            timeSlotStart: item?.timeSlot?.startHour ?? '',
            timeSlotEnd: item?.timeSlot?.endHour ?? '',

            fieldName: item?.field?.fieldName ?? '',
            pitchName: item?.pitch?.name ?? '',

            refereeType: MAP_REFEREE_TYPE[(item.refereeType as '') ?? ''],
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            price: formatCurrencyCustom(item.price as ''),
          })),
        );
      } catch (error) {
        console.log('🚀 ~ fetchList ~ error:', error);
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
        setCurrentMatch(res[0]);
      }
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

    setCurrentMatch(match);
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
                src={`/png/psframe_1.png`}
                className={`absolute ${randomME[getRandomNumber(0, 9)]}`}
                // className={`absolute ${randomME[8]}`}
              />

              <Image alt="" src={'/images/stadium.png'} width={330} height={400} />
            </div>
          </TinderCard>
        ))}
      </div>

      <div className="text-[#A6E818] text-[36px] font-[500] text-center my-3">You got a match!</div>

      <div className="px-5 text-[#FFFFFFE5]">
        <p className="text-[#FFFFFFE5] font-[500] text-[16px]">{`${
          currentMatch.name || `Group Stage - OPUS Terminal versus OPUS CNTR`
        }`}</p>
        <p className="text-[#FFFFFFE5] font-[300] text-[12px] flex mt-3 gap-3">
          <CalendarIcon />
          {currentMatch.date || '12/12/2024'} - {currentMatch.timeSlotStart || `18`}:00 -{' '}
          {currentMatch.timeSlotEnd || `20`}:00
        </p>
        <p className="text-[#FFFFFFE5] font-[300] text-[12px] mt-1 flex gap-1 items-center">
          <MapSimpleMarker />
          {currentMatch.fieldName || 'San bong K334'} - {currentMatch.pitchName || 'Pitch'} #1
        </p>
        <div className="flex text-[#FFFFFFE5] font-[300] text-[12px] gap-3 mt-1">
          <p className="flex gap-3 items-center">
            <PersonIcon />
            5-5
          </p>
          <p className="flex gap-1 items-center">
            <JudgeIcon />
            {currentMatch.refereeType || 'No referee'}
          </p>
          <p className="flex gap-1 items-center">
            <DollarIcon />
            {currentMatch.price || '85,000'} VND
          </p>
        </div>

        <div className="flex mt-6 gap-4">
          <Button
            className="w-full bg-[#009245] text-[#FFFFFFE5] rounded-[8px]"
            onPress={() => router.push('/my-game')}
          >
            View My Game
          </Button>
        </div>
      </div>

      <div className="h-[150px]"></div>

      <PlayerNavigationBar />
    </Background>
  );
}
