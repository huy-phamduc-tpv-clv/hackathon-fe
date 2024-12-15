import WithAuth from '@/hoc/WithAuth';
import { useRouter } from 'next/navigation';
import { Header } from './Header';
import { Button } from '@nextui-org/button';
import { Background } from './Background';
import { NavigationBar } from './NavigationBar';
import { Search } from '@/icons/search';
import useToken from '@/store/useToken';
import { useEffect } from 'react';
import { Input } from '@nextui-org/react';
import axios from '@/apis/index';
import FieldCard from './CardField';
import useField, { Field } from '@/store/useField';
import Image from 'next/image';

export const ListFields = () => {
  const { name, usr_id } = useToken();
  // const { name } = useToken();
  const router = useRouter();

  const { addField, initField, fields } = useField();

  type MappedField = {
    id: string;
    userId: string;
    fieldName: string;
    city: string;
    district: string;
    ward: string;
    address: string;
    description: string;
    service: { id: string; filedService: string; field: string | null }[];
    mediaFiles: {
      id: string;
      fileType: string;
      fileUrl: string;
      field: string | null;
      pitch: string | null;
    }[];
  };
  const handleGoBack = () => {
    router.push('/profile');
  };
  const handleAddfield = () => {
    router.push('/add-field');
  };
  useEffect(() => {
    initField();
    const fetchData = async () => {
      try {
        const res = await axios.get('field', { headers: { USERID: usr_id } });
        const data = res.data;
        let test: Field[] = [];

        if (data.length > 0) {
          data.forEach((element: MappedField) => {
            test.push({
              address_detail: element.address,
              field_name: element.fieldName,
              city: element.city,
              ward: element.ward,
              district: element.district,
              description: element.description,
              id: element.id,
              id_owner: element.userId,
              services: element.service.map((service) => service.filedService),
              medias: element.mediaFiles,
            });
          });
        }
        addField(test);
      } catch (error) {
        console.error('Error occurred:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <Header back={handleGoBack}>
        <Button radius="sm" color="default" className=" text-white bg-primary-black" onPress={handleAddfield}>
          Create new field
        </Button>
      </Header>
      <div className="mt-[60px] mb-[80px]" style={{ minHeight: 'calc(100vh - 140px)' }}>
        <Background>
          <div className="p-4 ">
            <p className="text-2xl">Hi {name},</p>
            <Input
              className="w-full"
              endContent={
                <button aria-label="toggle password visibility" className="focus:outline-none" type="button">
                  <Search />
                </button>
              }
              placeholder="Search here"
              color="default"
              size="lg"
              // "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined
            />
          </div>
          {/* <div className="p-4 ">
            <Card className="w-full">
              <CardHeader className="justify-between">
                <div className="flex gap-5">
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-lg font-semibold leading-none text-default-600">San bong H2</h4>
                    <div className="flex items-center gap-2">
                      <Location />
                      <h5 className="text-small tracking-tight text-default-400">qweqweqew</h5>
                    </div>

                    <div className="flex gap-5 items-center">
                      <div className="flex items-center gap-2">
                        <Money />
                        <h5 className="text-small tracking-tight text-default-400">qweqweqew</h5>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapSimpleMarker />
                        <h5 className="text-small tracking-tight text-default-400">qweqweqew</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <Rating />
              </CardHeader>
              <CardBody className="px-3 py-0 text-small text-default-400"></CardBody>
            </Card>
          </div> */}
          <div className="p-4 ">
            {/* Duyệt qua dữ liệu và hiển thị từng Card */}

            {fields.length ? (
              fields.map((field) => (
                <FieldCard
                  key={field.id}
                  field_name={field.field_name}
                  city={field.city}
                  district={field.district}
                  ward={field.ward}
                  address_detail={field.address_detail}
                  description={field.description}
                  services={field.services}
                  medias={field.medias}
                  id={field.id}
                  id_owner={field.id_owner}
                />
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
        <NavigationBar />
      </div>
    </div>
  );
};
export default WithAuth(ListFields);
