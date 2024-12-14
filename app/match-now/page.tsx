import { Background } from '@/components/Background';
import { PlayerNavigationBar } from '@/components/PlayerNavigationBar';
import Image from 'next/image';
import { CalendarIcon } from '../../icons/calendar';
import { PersonIcon } from '@/icons/person';
import { JudgeIcon } from '../../icons/judge';
import { DollarIcon } from '../../icons/dollar';
import { MapSimpleMarker } from '../../icons/map-simple-marker';
import { Button } from '@nextui-org/button';

export default function MatchNow() {
  return (
    <Background>
      <div className="pt-[10px]"></div>
      <div className="flex justify-center relative h-[400px]">
        <Image alt="" src={'/images/stadium.png'} width={330} height={400} />
      </div>

      <div className="text-[#A6E818] text-[36px] font-[500] text-center my-3">You got a match</div>

      <div className="px-5 text-[#FFFFFFE5]">
        <p className="text-[#FFFFFFE5] font-[500] text-[16px]">Group Stage - OPUS Terminal versus OPUS CNTR</p>
        <p className="text-[#FFFFFFE5] font-[300] text-[12px] flex mt-3 gap-2">
          <CalendarIcon />
          12/12/2024 - 18:00 - 20:00
        </p>
        <p className="text-[#FFFFFFE5] font-[300] text-[12px] mt-1 flex gap-1 items-center">
          <MapSimpleMarker />
          San bong K334 - Pitch #1
        </p>
        <div className="flex text-[#FFFFFFE5] font-[300] text-[12px] gap-3 mt-1">
          <p className="flex gap-1 items-center">
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
          <Button className="w-full bg-[#FFFFFFE5] rounded-[8px]">Skip</Button>
          <Button className="w-full bg-[#009245] text-[#FFFFFFE5] rounded-[8px]">Join Now</Button>
        </div>
      </div>

      <PlayerNavigationBar />
    </Background>
  );
}
