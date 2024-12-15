'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Button } from '@nextui-org/button';
import { FieldIcon } from '@/icons/field';
import { PitchIcon } from '@/icons/pitch';
import { GameIcon } from '@/icons/game';

export const NavigationContent = () => {
  const pathname = usePathname();
  const isFieldDetail = pathname.startsWith('/fields');
  const isPitch = pathname.startsWith('/pitchs');
  const isGame = pathname.startsWith('/games');
  const router = useRouter();
  const searchParams = useSearchParams();

  const id = searchParams.get('id');

  const handleChangeField = () => {
    console.log(isFieldDetail);
    router.push(`/fields/${id}?id=${id}`);
  };
  const handleChangePitch = () => {
    console.log(isPitch);
    router.push(`/pitchs?id=${id}`);
  };
  const handleChangeGame = () => {
    console.log(isGame);
    router.push(`/games`);
  };

  return (
    <div>
      <h3 className="pt-3 font-semibold text-medium">Content</h3>
      <div className="pt-3 flex flex-row gap-2">
        <Button
          className={` ${isFieldDetail ? 'bg-black text-white' : 'bg-white text-black'}`}
          color="default"
          onPress={handleChangeField}
        >
          <FieldIcon /> Field
        </Button>
        <Button
          className={` ${isPitch ? 'bg-black text-white' : 'bg-white text-black'}`}
          color="default"
          onPress={handleChangePitch}
        >
          <PitchIcon /> Pitch
        </Button>
        <Button
          className={` ${isGame ? 'bg-black text-white' : 'bg-white text-black'}`}
          color="default"
          onPress={handleChangeGame}
        >
          <GameIcon /> Game
        </Button>
      </div>
    </div>
  );
};
