import Image from 'next/image';

export default function LoginPage() {
	return (
		<section className='bg-gradient-to-b from-teritary-neon to-secondary-green h-screen'>
			<h1 className='text-primary-black font-bold text-3xl'>
				MatchMates
			</h1>
			<p>Explore your football team, pitch and have fun.</p>
			<Image
				alt=''
				src={'/images/login-content.png'}
				width={285}
				height={237}
			/>
		</section>
	);
}
