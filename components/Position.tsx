export const Position = ({
	content,
	selected,
}: {
	content: string;
	selected?: boolean;
}) => {
	return (
		<div
			className={`w-[47px] h-[43px] flex-center rounded-[100px]
				${selected ? 'bg-[#A6E818]' : 'bg-neutral-50'}`}
		>
			{content}
		</div>
	);
};
