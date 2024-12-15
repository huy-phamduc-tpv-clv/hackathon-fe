import { Location } from '@/icons/location';
import { MapSimpleMarker } from '@/icons/map-simple-marker';
import { Money } from '@/icons/money';
import { Rating } from '@/icons/rating';
import { Field } from '@/store/useField';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FieldCard: React.FC<Field> = ({
  field_name,
  //   city,
  district,
  //   id_owner,
  id,
  ward,
  //   address_detail,
  //   description,
  //   services,
  //   medias,
}) => {
  return (
    <Card className="w-full p-3 mt-3">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <div className="flex flex-col gap-1 items-start justify-center">
            <Link
              className="text-lg font-semibold leading-none text-default-600"
              href={`/fields/details?id=${id}`}
              passHref
            >
              {field_name}
            </Link>
            <div className="flex items-center gap-2">
              <Location />
              <h5 className="text-small tracking-tight text-default-400">{`${ward}, ${district}`}</h5>
            </div>
            <div className="flex gap-5 items-center">
              <div className="flex items-center gap-2">
                <Money />
                <h5 className="text-small tracking-tight text-default-400">From 100,000 VND</h5>
              </div>
              <div className="flex items-center gap-2">
                <MapSimpleMarker />
                <h5 className="text-small tracking-tight text-default-400">3 pitches</h5>
              </div>
            </div>
          </div>
        </div>
        <Rating />
      </CardHeader>

      <CardBody className="px-3 py-0 text-small text-default-400">
        <div className="grid grid-cols-2 grid-rows-2 grid-flow-row mb-2 w-full">
          <div className="grid row-span-2">
            <Image src={'/images/field1.png'} alt={`field-image-field1`} width="280" height="202" />
          </div>
          <div className="grid row-span-2">
            <Image src={'/images/field2.png'} alt={`field-image-field2`} width="280" height="101" />
            <Image src={'/images/field3.png'} alt={`field-image-field3`} width="280" height="101" />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FieldCard;
