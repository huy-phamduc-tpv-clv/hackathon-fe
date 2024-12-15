'use client';

import WithAuth from '../../../hoc/WithAuth';
import { Header } from '@/components/Header';
import { useRouter, useSearchParams } from 'next/navigation';
import { Background } from '../../../components/Background';
import { Button } from '@nextui-org/button';
import { Input, Textarea } from '@nextui-org/input';
import { useEffect, useState } from 'react';
import { Checkbox, CheckboxGroup, Select, SelectItem, SharedSelection } from '@nextui-org/react';
import { AddPaymentCard } from '@/icons/add-payment-card';
import useField, { Field } from '@/store/useField';

import axios from '@/apis/index';
import useToken from '@/store/useToken';
import { CITIES, DISTRICTS, WARDS } from '@/constants/location';
import { NavigationContent } from '@/components/NavigationContent';

const isInputted = (field: Field) => {
  return field.field_name.length && field.city.length && field.ward.length && field.district.length;
};

function Profile() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const id = searchParams.get('id');
  const { usr_id } = useToken();
  const { getField } = useField();
  const pre_field = getField(id ? id : '');
  const [isCheckBoxAllTrue, setIsCheckBoxAllTrue] = useState<boolean>(false);
  const [field, setField] = useState<Field>({
    id_owner: pre_field ? pre_field.id_owner : '',
    id: pre_field ? pre_field.id : '',
    field_name: pre_field ? pre_field.field_name : '',
    city: pre_field ? pre_field.city : '',
    ward: pre_field ? pre_field.ward : '',
    district: pre_field ? pre_field.district : '',
    address_detail: pre_field ? pre_field.address_detail : '',
    description: pre_field ? pre_field.description : '',
    services: pre_field ? pre_field.services : [],
    medias: [],
  });

  const checkboxItems = [
    { value: 'WIFI', label: 'Wifi' },
    { value: 'FOOD', label: 'Food' },
    { value: 'REST_ROOM', label: 'Restroom' },
    { value: 'CAR_PARK', label: 'Car park' },
  ];

  const handleGoBack = () => {
    router.push('/fields');
  };

  const handleCheckAll = (value: boolean) => {
    setIsCheckBoxAllTrue(value);
    if (value) {
      const allValues = checkboxItems.map((item) => item.value);
      setField((preState) => ({
        ...preState,
        services: allValues,
      }));
    } else {
      setField((preState) => ({
        ...preState,
        services: [],
      }));
    }
  };

  const handleSelectCity = (value: SharedSelection) => {
    setField({ ...field, city: value.currentKey ?? '' });
  };

  const handleSelectDistrict = (value: SharedSelection) => {
    setField({ ...field, district: value.currentKey ?? '' });
  };

  const handleSelectWard = (value: SharedSelection) => {
    setField({ ...field, ward: value.currentKey ?? '' });
  };

  const handleCheckGroup = (value: string[]) => {
    setIsCheckBoxAllTrue(value.length >= 4);
    setField((preState) => ({
      ...preState,
      services: value,
    }));
  };

  const handleSaveField = async () => {
    if (!isInputted(field)) return;

    try {
      console.log(field);
      await axios.post(
        'field',
        {
          ...field,
          fieldName: field.field_name,
          address: field.address_detail,
          service: field.services,
        },
        {
          headers: {
            USERID: usr_id,
          },
        },
      );
      router.push('/fields');
    } catch (error) {
      console.error(error);
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
          className={`text-white ${isInputted(field) ? 'bg-primary-black' : 'bg-neutral-300'}`}
          onPress={handleSaveField}
          disabled={!isInputted(field)}
        >
          Save update
        </Button>
      </Header>
      <div className="mt-[60px]">
        <Background>
          <div className="px-3 flex flex-col">
            <h3 className="pt-3 font-semibold text-xl">Field detail</h3>
          </div>

          <div className="px-3 flex flex-col">
            <NavigationContent />
          </div>
          <div className="pt-4">
            <div className="px-3 flex flex-col gap-3">
              <h4 className="font-medium text-xl">Basic Info</h4>
              <Input
                size="md"
                placeholder="Please input"
                label={<span className="text-secondary-green">Field Name</span>}
                value={field.field_name}
                onValueChange={(value) =>
                  setField((preState) => ({
                    ...preState,
                    field_name: value,
                  }))
                }
                isRequired
                maxLength={50}
              />

              <div className="grid grid-rows-2 grid-flow-col w-full gap-3">
                <Select
                  className="w-full"
                  label={<span className="text-secondary-green">City</span>}
                  isRequired
                  placeholder="Please select your city"
                  items={CITIES}
                  onSelectionChange={handleSelectCity}
                >
                  {(city) => <SelectItem key={city.key}>{city.label}</SelectItem>}
                </Select>
                <div className="grid grid-cols-2 gap-3">
                  <Select
                    className="w-full"
                    label={<span className="text-secondary-green">District</span>}
                    isRequired
                    placeholder="Please select"
                    items={DISTRICTS[field.city as 'Da Nang'] ?? []}
                    onSelectionChange={handleSelectDistrict}
                  >
                    {(district) => <SelectItem key={district.key}>{district.label}</SelectItem>}
                  </Select>
                  <Select
                    className="w-full"
                    label={<span className="text-secondary-green">Ward</span>}
                    isRequired
                    placeholder="Please select"
                    items={
                      (
                        WARDS[field.district as 'quan1'] || {
                          wards: [],
                        }
                      ).wards.map((item) => ({
                        key: item,
                        label: item,
                      })) ?? []
                    }
                    onSelectionChange={handleSelectWard}
                  >
                    {(district) => <SelectItem key={district.key}>{district.label}</SelectItem>}
                  </Select>
                </div>
              </div>

              <Textarea
                size="md"
                placeholder="Please input"
                label={<span className="text-secondary-green">Address Number</span>}
                value={field.address_detail}
                onValueChange={(value) =>
                  setField((preState) => ({
                    ...preState,
                    address_detail: value,
                  }))
                }
                maxLength={50}
                isRequired
              />
              <Textarea
                size="md"
                placeholder="Please input"
                label={<span className="text-secondary-green">Description</span>}
                value={field.description}
                onValueChange={(value) =>
                  setField((preState) => ({
                    ...preState,
                    description: value,
                  }))
                }
                maxLength={50}
              />
            </div>

            <div className="px-3 pt-4 flex flex-col gap-3">
              <div className="grid grid-cols-2 grid-flow-row">
                <h4 className="font-medium text-xl items-start">Service</h4>
                <div className="flex gap-4 justify-end">
                  <Checkbox size="md" isSelected={isCheckBoxAllTrue} onValueChange={handleCheckAll}>
                    ALL
                  </Checkbox>
                </div>
              </div>

              <CheckboxGroup
                color="primary"
                defaultValue={field.services}
                orientation="horizontal"
                value={field.services}
                onValueChange={handleCheckGroup}
              >
                <div className="grid grid-cols-2 gap-4">
                  {checkboxItems.map((item) => (
                    <Checkbox key={item.value} value={item.value} size="lg">
                      {item.label}
                    </Checkbox>
                  ))}
                </div>
              </CheckboxGroup>
            </div>
            <div className="px-3 pt-4 flex flex-col gap-3">
              <h4 className="font-medium text-xl items-start">Photo/Video</h4>
              <Button className="w-full bg-white" color="default" size="lg">
                <AddPaymentCard />
                Add Media
              </Button>
            </div>
          </div>
        </Background>
      </div>
    </>
  );
}

export default WithAuth(Profile);
