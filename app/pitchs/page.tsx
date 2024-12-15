'use client';
import WithAuth from '@/hoc/WithAuth';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@nextui-org/button';
import { useEffect } from 'react';
import axios from '@/apis/index';
import { Header } from '@/components/Header';
import { Background } from '@/components/Background';
import { NavigationContent } from '@/components/NavigationContent';
import useToken from '@/store/useToken';
import usePitch, { Pitch } from '@/store/usePitch';
import FieldCard from '@/components/CardField';
import Image from 'next/image';
import PitchCard from '@/components/PitchCard';

export const ListPitchs = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { usr_id } = useToken();
  const id = searchParams.get('id');
  const { addPitch, pitchs } = usePitch();

  const handleGoBack = () => {
    router.push('/fields');
  };
  const handleAddPitch = () => {
    router.push(`/add-pitch?id=${id}`);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`field/${id}/pitch`, { headers: { USERID: usr_id } });
        const data = res.data;
        let test: Pitch[] = [];
        if (data.length > 0) {
          test = data;
        }
        addPitch(test);
      } catch (error) {
        console.error('Error occurred:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <Header back={handleGoBack}>
        <Button radius="sm" color="default" className=" text-white bg-primary-black" onPress={handleAddPitch}>
          Create new pitch
        </Button>
      </Header>
      <div className="mt-[60px] mb-[80px]" style={{ minHeight: 'calc(100vh - 140px)' }}>
        <Background>
          <div className="p-4 ">
            <NavigationContent />
          </div>
          <div className="px-3 flex flex-col">
            <h3 className="pt-3 font-semibold text-xl">Pitch List</h3>
          </div>

          <div className="p-5">
            {pitchs.length > 0 ? (
              pitchs.map((pitch, index) => (
                // <FieldCard
                //   key={pitch.id}
                //   pitchName={pitch.pitchName}
                //   description={pitch.description}
                //   id={pitch.id}
                //   fieldId={pitch.fieldId}
                // />
                // <PitchCard />
                <p key={index}></p>
              ))
            ) : (
              <>
                <div className="flex-center mt-5 w-full">
                  <Image className="" alt="" src={'/images/player-location.png'} width={360} height={237} priority />
                </div>
                <div className="px-3 flex flex-col">
                  <h3 className="pt-3 font-medium text-xl text-center">Your list is empty</h3>
                </div>
                <div>
                  <h3 className="px-3 font-normal text-[14px] text-center">Create new to fill it</h3>
                </div>
              </>
            )}
          </div>
        </Background>
      </div>
    </div>
  );
};
export default WithAuth(ListPitchs);
