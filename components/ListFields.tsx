import WithAuth from "@/hoc/WithAuth";
import { useRouter } from "next/navigation";
import { Header } from "./Header";
import { Button } from "@nextui-org/button";
import { Background } from "./Background";
import { Input } from '@nextui-org/react';
import { NavigationBar } from "./NavigationBar";
import { Search } from "@/icons/search";
import useCardProfileOwner from "@/store/useCardProfileOwner";

export const ListFields = () => {
    const { profileOwner } = useCardProfileOwner();
    const handleGoBack = () => {
        router.push('/profile');
    };
    const handleAddfield = () => {
        router.push('/add-field');
    };
    const router = useRouter();
    return (<div className=''>
        <Header back={handleGoBack}>
            <Button
                radius='sm'
                color='default'
                className=' text-white bg-primary-black'
                onPress={handleAddfield}
            >
                Create new field
            </Button>
        </Header>
        <div
            className='mt-[60px] mb-[80px]'
            style={{ minHeight: 'calc(100vh - 140px)' }}
        >
            <Background>
                <div className='p-4 '>
                    <p className="text-2xl" >Hi {profileOwner.owner_name}</p>
                    <Input
                        className="w-full"
                        endContent={
                            <button
                                aria-label="toggle password visibility"
                                className="focus:outline-none"
                                type="button"
                            >
                                <Search />
                            </button>
                        }
                        placeholder="Search here"
                        color="default"
                        size="lg"
                    // "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined
                    /></div>


            </Background>
            <NavigationBar /></div>
    </div>)
};
export default WithAuth(ListFields);