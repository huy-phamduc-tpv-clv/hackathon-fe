"use client";

import WithAuth from "../../hoc/WithAuth";
import { Header } from "@/components/Header";
import { useRouter } from "next/navigation";
import { Background } from "../../components/Background";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { useEffect, useState } from "react";
import { v4 as uid } from "uuid";
import { Checkbox, CheckboxGroup, Select, SelectItem } from "@nextui-org/react";
import { AddPaymentCard } from "@/icons/add-payment-card";
import useField, { Field } from "@/store/useField";
import { city, districts, wards } from "../datas/data-common";

const isInputted = (field: Field) => {
  return (
    field.field_name.length &&
    field.city.length &&
    field.ward.length &&
    field.district.length
  );
};

function Profile() {
  const router = useRouter();
  const [isCheckBoxAllTrue, setIsCheckBoxAllTrue] = useState<boolean>(false);
  const [districtFake, setDistrictFake] = useState<
    { key: string; label: string }[]
  >([]);
  const [wardFake, setWardFake] = useState<{ key: string; label: string }[]>(
    []
  );
  const [field, setField] = useState<Field>({
    id_owner: "",
    id: uid(),
    field_name: "",
    city: "",
    ward: "",
    district: "",
    address_detail: "",
    description: "",
    services: [],
    medias: [],
  });
  const loc_citys = city;
  const loc_districts = districts;
  const loc_wards = wards;
  const { addField } = useField();

  const checkboxItems = [
    { value: "wifi", label: "Wifi" },
    { value: "food", label: "Food" },
    { value: "rest-room", label: "Restroom" },
    { value: "car-park", label: "Car park" },
  ];

  const handleGoBack = () => {
    router.push("/fields");
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
  const handleChangeSelectCity = (e: { target: { value: string } }) => {
    const value = e.target.value;
    setField((preState) => ({
      ...preState,
      city: value,
    }));
    if (value == "tpHcm") {
      setDistrictFake(loc_districts[0]);
    } else if (value == "tpDn") {
      setDistrictFake(loc_districts[1]);
    } else if (value == "thdHn") {
      setDistrictFake(loc_districts[2]);
    }
  };

  const handleChangeSelectDistrict = (e: { target: { value: string } }) => {
    const value = e.target.value;
    setField((preState) => ({
      ...preState,
      district: value,
    }));
    setWardFake(loc_wards);
  };

  const handleCheckGroup = (value: string[]) => {
    if (value.length >= 4) {
      setIsCheckBoxAllTrue(true);
    } else {
      setIsCheckBoxAllTrue(false);
    }
    setField((preState) => ({
      ...preState,
      services: value,
    }));
  };

  const handleSaveField = () => {
    console.log(field);
    if (!isInputted(field)) return;

    addField(field);

    // router.push("/fields");
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
          className={`text-white ${
            isInputted(field) ? " bg-primary-black" : "bg-neutral-300"
          }`}
          onPress={handleSaveField}
          disabled
        >
          Save
        </Button>
      </Header>
      <div className="mt-[60px]">
        <Background>
          <div className="px-3 flex flex-col">
            <h3 className="pt-3 font-semibold text-xl">Create new field</h3>
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
                  items={loc_citys}
                  label={<span className="text-green-500">City</span>}
                  placeholder="Please select"
                  isRequired
                  value={field.city}
                  onChange={handleChangeSelectCity}
                >
                  {(loc_city) => <SelectItem>{loc_city.label}</SelectItem>}
                </Select>
                <div className="grid grid-cols-2 grid-row-col w-full gap-3">
                  <Select
                    className="max-w-xs "
                    items={districtFake}
                    label={<span className="text-green-500">District</span>}
                    placeholder="Please select"
                    isRequired
                    value={field.district}
                    onChange={handleChangeSelectDistrict}
                  >
                    {(district) => <SelectItem>{district.label}</SelectItem>}
                  </Select>
                  <Select
                    className=" max-w-xs "
                    items={wardFake}
                    label={<span className="text-green-500">Ward</span>}
                    placeholder="Please select"
                    isRequired
                    value={field.ward}
                    onChange={(e) =>
                      setField((preState) => ({
                        ...preState,
                        ward: e.target.value,
                      }))
                    }
                  >
                    {(ward) => <SelectItem>{ward.label}</SelectItem>}
                  </Select>
                </div>
              </div>

              <Textarea
                size="md"
                placeholder="Please input"
                label={
                  <span className="text-secondary-green">Address Number</span>
                }
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
                label={
                  <span className="text-secondary-green">Description</span>
                }
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
                  <Checkbox
                    size="md"
                    isSelected={isCheckBoxAllTrue}
                    onValueChange={handleCheckAll}
                  >
                    ALL
                  </Checkbox>
                </div>
              </div>

              <CheckboxGroup
                color="secondary"
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
