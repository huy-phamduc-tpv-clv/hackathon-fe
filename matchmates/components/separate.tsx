export const SeparateText = ({ text }: { text: string }) => {
	return (
		<div className='flex items-center'>
			<div className='flex-grow border-t border-[#111111] opacity-15'></div>
			<span className='mx-4 text-neutral-700 text-[14px]'>{text}</span>
			<div className='flex-grow border-t border-[#111111] opacity-15'></div>
		</div>
	);
};
