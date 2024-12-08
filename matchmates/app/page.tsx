import Link from 'next/link';
import { Background } from '../components/hoc/Background';

export default function Home() {
	return (
		<Background>
			<div className='h-screen w-full flex items-center justify-center'>
				<Link href={'/login'}>Login</Link>
			</div>
		</Background>
	);
}
