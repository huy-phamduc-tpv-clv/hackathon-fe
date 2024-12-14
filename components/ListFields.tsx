import WithAuth from "@/hoc/WithAuth";
import { useRouter } from "next/navigation";
import { Header } from "./Header";
import { Button } from "@nextui-org/button";

export const ListFields = () => {
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
                className={`text-white ' bg-primary-black' }`}
                onPress={handleAddfield}
            >
                Create new field
            </Button>
        </Header>
    </div>)
};
export default WithAuth(ListFields);