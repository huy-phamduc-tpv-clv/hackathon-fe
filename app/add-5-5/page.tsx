'use client';

import WithAuth from '../../hoc/WithAuth';
import { Header } from '@/components/Header';
import { useRouter } from 'next/navigation';
import { Background } from '@/components/Background';
import { Button } from '@nextui-org/button';
import { Stadium } from '@/images/stadium';
import { Position } from '../../components/Position';
import { useState } from 'react';
import { POSITION } from '../../constants/positive';
import usePlayerType from '../../store/usePlayerType';

const SelectGameType = () => {
  const router = useRouter();
  const { setPlayerTypes, getPlayerTypes } = usePlayerType();

  const [positions, setPositions] = useState([
    {
      position: POSITION.GK,
      css: 'bottom-[50px]',
      selected: false,
    },
    {
      position: POSITION.FIX,
      css: 'bottom-[200px]',
      selected: false,
    },
    {
      position: POSITION['ALA-R'],
      css: 'bottom-[50%] transform translate-y-1/2 right-[22%]',
      selected: false,
    },
    {
      position: POSITION['ALA-L'],
      css: 'bottom-[50%] transform translate-y-1/2 left-[22%]',
      selected: false,
    },
    {
      position: POSITION.PIV,
      css: 'top-[200px]',
      selected: false,
    },
  ]);

  const handleGoBack = () => {
    router.push('player-type');
  };

  const handleSelectPositive = (index: number) => {
    const p = positions[index];
    p.selected = !p.selected;

    setPositions(JSON.parse(JSON.stringify(positions)));

    const store = positions.filter((item) => item.selected);
    setPlayerTypes(
      store.map((item) => ({
        playerType: 'SINGLE',
        pitchType: 'FIVE_FIVE',
        position: item.position,
      })),
    );
  };

  const handleSavePositive = () => {
    setPlayerTypes(getPlayerTypes());
  };

  return (
    <div className="">
      <Header back={handleGoBack}>
        <Button
          radius="sm"
          color="default"
          className={`text-white ${
            positions.filter((item) => item.selected).length ? 'bg-primary-black' : 'bg-neutral-300'
          }`}
          onPress={handleSavePositive}
        >
          Save
        </Button>
      </Header>
      <div className="mt-[60px]" style={{ minHeight: 'calc(100vh - 140px)' }}>
        <Background>
          <div className="px-3 flex flex-col">
            <h3 className="pt-3 font-medium text-xl">5 - 5</h3>
          </div>
          <div>
            <h3 className="px-3 font-normal text-[14px]">Select the position you prefer</h3>
          </div>

          <div className="mt-5 flex justify-center relative">
            <Stadium />

            {positions.map((item, index) => (
              <div className={`absolute ${item.css}`} key={index} onClick={() => handleSelectPositive(index)}>
                <Position content={item.position} selected={item.selected} />
              </div>
            ))}
          </div>

          <div className="h-[100px]"></div>
        </Background>
      </div>
    </div>
  );
};

export default WithAuth(SelectGameType);
