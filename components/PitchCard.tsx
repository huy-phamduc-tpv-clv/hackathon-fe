import { Location } from '@/icons/location';
import { MapSimpleMarker } from '@/icons/map-simple-marker';
import { Money } from '@/icons/money';
import { Pen } from '@/icons/pen';
import { Rating } from '@/icons/rating';
import { Pitch } from '@/store/usePitch';
import { Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const checkboxPitchTypeItems = [
  { value: 'FIVE_FIVE', label: '5-5' },
  { value: 'SEVEN_SEVEN', label: '7-7' },
  { value: 'ELEVEN_ELEVEN', label: '11-11' },
];

const PitchCard: React.FC<Pitch> = ({
  ownerId,
  fieldId,
  id,
  pitchName,
  description,
  pitchType,
  grassType,
  timeTable,
}) => {
  const selectedLabels = pitchType.map(
    (value) => checkboxPitchTypeItems.find((item) => item.value === value)?.label || value,
  );
  return (
    // <Card className="w-full p-3 mt-3">
    //   <CardHeader className="justify-between">
    //     <div className="flex gap-5">
    //       <div className="flex flex-col gap-1 items-start justify-center">
    //         <Link
    //           className="text-lg font-semibold leading-none text-default-600"
    //           href={`/pitchs/details?id=${id}`}
    //           passHref
    //         >
    //           {pitchName}
    //         </Link>
    //         <div className="flex items-center gap-2">
    //           <Location />
    //           <h5 className="text-small tracking-tight text-default-400"></h5>
    //         </div>
    //         <div className="flex gap-5 items-center">
    //           <div className="flex items-center gap-2">
    //             <Money />
    //             <h5 className="text-small tracking-tight text-default-400">From 100,000 VND</h5>
    //           </div>
    //           <div className="flex items-center gap-2">
    //             <MapSimpleMarker />
    //             <h5 className="text-small tracking-tight text-default-400">3 pitches</h5>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <Rating />
    //   </CardHeader>

    //   <CardBody className="px-3 py-0 text-small text-default-400">
    //     <div className="grid grid-cols-2 grid-rows-2 grid-flow-row mb-2 w-full">
    //       <div className="grid row-span-2">
    //         <Image src={'/images/pitch1.png'} alt={`pitch-image-pitch1`} width="280" height="202" />
    //       </div>
    //       <div className="grid row-span-2">
    //         <Image src={'/images/pitch2.png'} alt={`pitch-image-pitch2`} width="280" height="101" />
    //         <Image src={'/images/pitch3.png'} alt={`pitch-image-pitch3`} width="280" height="101" />
    //       </div>
    //     </div>
    //   </CardBody>
    // </Card>

    <div>
      <Card className="w-full p-3 mt-3">
        <CardBody className="w-full grid grid-cols-6 grid-flow-row gap-2">
          <div className="col-span-2">
            <Image src={'/images/pitch.jpg'} alt={`pitch-image-pitch2`} width="154" height="138"></Image>
          </div>
          <div className="col-span-3">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold leading-none text-default-600">{pitchName}</h2>
              <div>
                <MapSimpleMarker /> {selectedLabels.join(', ')}
              </div>
            </div>
          </div>
          <div className="col-span-1 p-auto flex-center mx-2 ">
            <Button className="bg-slate-100" size="lg">
              <Pen />
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default PitchCard;
