'use client';

import { Header } from '@/components/Header';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@nextui-org/button';
import { Input, Textarea } from '@nextui-org/input';
import { useEffect, useState } from 'react';
import { v4 as uid } from 'uuid';
import {
  Checkbox,
  CheckboxGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { AddPaymentCard } from '@/icons/add-payment-card';
import { Pitch } from '@/store/usePitch';

import axios from '@/apis/index';
import useToken from '@/store/useToken';
import { Background } from '@/components/Background';
import WithAuth from '@/hoc/WithAuth';
import TimeInput from '@/components/TimeInput';

const isInputted = (pitch: Pitch) => {
  return pitch.pitchName.length;
};

function Profile() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const id = searchParams.get('id');
  const { usr_id } = useToken();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [isCheckBoxAllTrue, setIsCheckBoxAllTrue] = useState<boolean>(false);
  const [isCheckBoxAllTrue1, setIsCheckBoxAllTrue1] = useState<boolean>(false);
  const [scrollBehavior] = useState('inside' as const);
  const [pitch, setPitch] = useState<Pitch>({
    ownerId: '',
    fieldId: id ? id : '',
    id: uid(),
    pitchName: '',
    description: '',
    grassType: [],
    pitchType: [],
    timeTable: [],
  });
  const [day, setDay] = useState({
    id: '',
    endHour: '',
    endMinute: '',
    startHour: '',
    startMinute: '',
  });

  const checkboxPitchTypeItems = [
    { value: 'FIVE_FIVE', label: '5-5' },
    { value: 'SEVEN_SEVEN', label: '7-7' },
    { value: 'ELEVEN_ELEVEN', label: '11-11' },
  ];

  const checkboxGrassTypeItems = [
    { value: 'NATURAL', label: 'Natural' },
    { value: 'HYBRID_GRASS', label: 'Hybrid Grass' },
    { value: 'ARTIFICAL_TURF', label: 'Artifical Turf' },
    { value: 'INDOOR_FLOORING', label: 'Indoor Flooring' },
  ];

  const handleGoBack = () => {
    router.push(`/pitchs?id=${id}`);
  };

  interface TimeDetails {
    id: string;
    startHour: string;
    startMinute: string;
    endHour: string;
    endMinute: string;
    cur: string;
    price: number;
  }

  const [timeDetails, setTimeDetails] = useState<TimeDetails[]>();

  const handleAddTime = () => {
    const updatedList = timeDetails?.map((item) =>
      item.id === day.id
        ? {
            ...item,
            startHour: day.startHour,
            startMinute: day.startMinute,
            endHour: day.endHour,
            endMinute: day.endMinute,
          }
        : item,
    );
    setTimeDetails(updatedList);
    onClose();
  };
  const handleCheckAll = (value: boolean) => {
    setIsCheckBoxAllTrue(value);
    if (value) {
      const allValues = checkboxPitchTypeItems.map((item) => item.value);
      setPitch((preState) => ({
        ...preState,
        pitchType: allValues,
      }));
    } else {
      setPitch((preState) => ({
        ...preState,
        pitchType: [],
      }));
    }
  };
  const handleCheckAll1 = (value: boolean) => {
    setIsCheckBoxAllTrue1(value);
    if (value) {
      const allValues = checkboxGrassTypeItems.map((item) => item.value);
      setPitch((preState) => ({
        ...preState,
        grassType: allValues,
      }));
    } else {
      setPitch((preState) => ({
        ...preState,
        grassType: [],
      }));
    }
  };
  const handleCheckGroup1 = (value: string[]) => {
    if (value.length >= 4) {
      setIsCheckBoxAllTrue1(true);
    } else {
      setIsCheckBoxAllTrue1(false);
    }
    setPitch((preState) => ({
      ...preState,
      grassType: value,
    }));
  };
  const handleSetTime = (id: string) => {
    setDay({ id: id, startHour: '00', startMinute: '00', endHour: '00', endMinute: '00' });
    onOpen();
  };

  const handleCheckGroup = (value: string[]) => {
    if (value.length >= 3) {
      setIsCheckBoxAllTrue(true);
    } else {
      setIsCheckBoxAllTrue(false);
    }
    setPitch((preState) => ({
      ...preState,
      pitchType: value,
    }));
  };
  const handleInputChange = (id: string, pitch: string, value: string | number) => {
    const updatedTimeDetails = timeDetails?.map((item) => (item.id === id ? { ...item, [pitch]: value } : item));
    setTimeDetails(updatedTimeDetails);
  };
  const handleAddTimeItem = () => {
    setTimeDetails([
      ...(timeDetails || []),
      { id: uid(), startHour: '00', startMinute: '00', endHour: '00', endMinute: '00', cur: 'USD', price: 0 },
    ]);
  };
  const handleSavePitch = async () => {
    if (!isInputted(pitch)) return;

    try {
      console.log({
        ...pitch,
        name: pitch.pitchName,
        // address: pitch.address_detail,
        // service: pitch.services,
        pitchTypes: pitch.pitchType,
        pitchTimeSlots: timeDetails,
      });

      await axios.post(
        `field/${id}/pitch`,
        {
          ...pitch,
          name: pitch.pitchName,
          pitchTypes: pitch.pitchType,
          pitchTimeSlots: pitch.timeTable,
        },
        {
          headers: {
            USERID: usr_id,
          },
        },
      );
      router.push(`/pitchs?id=${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header back={handleGoBack}>
        <Button
          radius="sm"
          color="default"
          className={`text-white ${isInputted(pitch) ? ' bg-primary-black' : 'bg-neutral-300'}`}
          onPress={handleSavePitch}
          disabled
        >
          Save
        </Button>
      </Header>
      <div className="mt-[60px]">
        <Background>
          <div className="px-3 flex flex-col">
            <h3 className="pt-3 font-semibold text-xl">Create new Pitch</h3>
          </div>

          <div className="pt-4">
            <div className="px-3 flex flex-col gap-3">
              <h4 className="font-medium text-xl">Basic Info</h4>
              <Input
                size="md"
                placeholder="Please input"
                label={<span className="text-secondary-green">Pitch Name</span>}
                value={pitch.pitchName}
                onValueChange={(value) =>
                  setPitch((preState) => ({
                    ...preState,
                    pitchName: value,
                  }))
                }
                isRequired
                maxLength={50}
              />

              <Textarea
                size="md"
                placeholder="Please input"
                label={<span className="text-secondary-green">Description</span>}
                value={pitch.description}
                onValueChange={(value) =>
                  setPitch((preState) => ({
                    ...preState,
                    description: value,
                  }))
                }
              />
            </div>

            <div className="px-3 pt-4 flex flex-col gap-3">
              <div className="grid grid-cols-2 grid-flow-row">
                <h4 className="font-medium text-xl items-start">Pitch type</h4>
                <div className="flex gap-4 justify-end">
                  <Checkbox size="md" isSelected={isCheckBoxAllTrue} onValueChange={handleCheckAll}>
                    ALL
                  </Checkbox>
                </div>
              </div>

              <CheckboxGroup
                color="primary"
                defaultValue={pitch.pitchType}
                orientation="horizontal"
                value={pitch.pitchType}
                onValueChange={handleCheckGroup}
              >
                <div className=" grid grid-cols-3 gap-4 justify-items-center">
                  {checkboxPitchTypeItems.map((item) => (
                    <Checkbox key={item.value} value={item.value} size="lg">
                      {item.label}
                    </Checkbox>
                  ))}
                </div>
              </CheckboxGroup>
            </div>
            <div className="px-3 pt-4 flex flex-col gap-3">
              <div className="grid grid-cols-2 grid-flow-row">
                <h4 className="font-medium text-xl items-start">Grass type</h4>
                <div className="flex gap-4 justify-end">
                  <Checkbox size="md" isSelected={isCheckBoxAllTrue1} onValueChange={handleCheckAll1}>
                    ALL
                  </Checkbox>
                </div>
              </div>

              <CheckboxGroup
                color="primary"
                defaultValue={pitch.grassType}
                orientation="horizontal"
                value={pitch.grassType}
                onValueChange={handleCheckGroup1}
              >
                <div className=" w-full grid grid-cols-1 gap-4">
                  {checkboxGrassTypeItems.map((item) => (
                    <Checkbox key={item.value} value={item.value} size="lg">
                      {item.label}
                    </Checkbox>
                  ))}
                </div>
              </CheckboxGroup>
            </div>
            <div className="px-3 pt-4 flex flex-col gap-3">
              <h4 className="font-medium text-xl items-start">Timetable</h4>

              {timeDetails?.map((item) => (
                <div key={item.id} className="w-full grid grid-cols-5 grid-flow-col gap-1">
                  <div
                    className="bg-[#FFFFFFE5] w-full flex justify-center items-center rounded-[8px] text-[12px] font-normal text-neutral-500 cursor-pointer col-span-2"
                    onClick={() => handleSetTime(item.id)}
                  >
                    {item.startHour && item.endHour
                      ? item.startHour + ':' + item.startMinute + ' - ' + item.endHour + ':' + item.endMinute
                      : 'Set time'}
                  </div>
                  <div className="col-span-3">
                    <Input
                      endContent={
                        <div className="flex items-center h-full justify-center rounded-[8px] ">
                          <label className="sr-only" htmlFor="currency">
                            Currency
                          </label>
                          <select
                            className="outline-none border-0 bg-transparent text-default-400 text-small "
                            id="currency"
                            name="currency"
                            onChange={(e) => handleInputChange(item.id, 'cur', e.target.value)}
                          >
                            <option value="USD">USD</option>
                            <option value="KRW">KRW</option>
                            <option value="VND">VND</option>
                          </select>
                        </div>
                      }
                      label="Price"
                      placeholder="0.00"
                      isRequired
                      startContent={<div className="pointer-events-none flex items-center"></div>}
                      type="number"
                      onChange={(e) => handleInputChange(item.id, 'price', e.target.value)}
                    />
                  </div>
                </div>
              ))}

              <Button
                className="w-full bg-white text-secondary-green"
                color="default"
                size="lg"
                onPress={handleAddTimeItem}
              >
                <AddPaymentCard />
                Add new timestamp
              </Button>
            </div>
            <div className="px-3 pt-4 flex flex-col gap-3">
              <h4 className="font-medium text-xl items-start">Photo/Video</h4>
              <Button className="w-full bg-white text-secondary-green" color="default" size="lg">
                <AddPaymentCard />
                Add Media
              </Button>
            </div>
          </div>
        </Background>
        <Modal isOpen={isOpen} scrollBehavior={scrollBehavior} onOpenChange={onOpenChange}>
          <ModalContent>
            {() => (
              <>
                <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                <ModalBody>
                  <div className="flex-center flex-col gap-4">
                    <TimeInput
                      label={'Start Time '}
                      onHourChange={(value) =>
                        setDay({
                          ...day,
                          startHour: value,
                        })
                      }
                      onMinuteChange={(value) =>
                        setDay({
                          ...day,
                          startMinute: value,
                        })
                      }
                    />

                    <TimeInput
                      label={'End Time'}
                      onHourChange={(value) =>
                        setDay({
                          ...day,
                          endHour: value,
                        })
                      }
                      onMinuteChange={(value) =>
                        setDay({
                          ...day,
                          endMinute: value,
                        })
                      }
                    />
                  </div>

                  <Button className="bg-secondary-green text-white mt-6" onPress={handleAddTime}>
                    Save
                  </Button>
                </ModalBody>
                <ModalFooter></ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}

export default WithAuth(Profile);
