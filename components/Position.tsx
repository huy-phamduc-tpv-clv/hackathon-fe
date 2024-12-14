export const Position = ({ content, selected }: { content: string; selected?: boolean }) => {
  return (
    <div
      className={`w-[55px] h-[45px] flex-center rounded-[100px]
				${selected ? 'bg-[#A6E818]' : 'bg-neutral-50'}`}
    >
      {content}
    </div>
  );
};
