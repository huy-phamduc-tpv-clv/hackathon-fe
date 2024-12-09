export const NavProfile = ({ isActive = true }: { isActive?: boolean }) => {
	return (
		<svg
			width='64'
			height='32'
			viewBox='0 0 64 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect
				width='64'
				height='32'
				rx='16'
				fill={isActive ? '#009245' : '#F3F3F3'}
			/>
			<path
				d='M32 17C34.7614 17 37 14.7614 37 12C37 9.23858 34.7614 7 32 7C29.2386 7 27 9.23858 27 12C27 14.7614 29.2386 17 32 17Z'
				fill={isActive ? '#fff' : '#979797'}
				stroke={isActive ? '#fff' : '#979797'}
				strokeWidth='2'
				strokeLinecap='round'
			/>
			<path
				d='M40 25C40 22.8783 39.1571 20.8434 37.6569 19.3431C36.1566 17.8429 34.1217 17 32 17C29.8783 17 27.8434 17.8429 26.3431 19.3431C24.8429 20.8434 24 22.8783 24 25'
				stroke={isActive ? '#fff' : '#979797'}
				strokeWidth='2'
				strokeLinecap='round'
			/>
			<path
				d='M32 17C29.8783 17 27.8434 17.8429 26.3431 19.3431C24.8429 20.8434 24 22.8783 24 25H40C40 22.8783 39.1571 20.8434 37.6569 19.3431C36.1566 17.8429 34.1217 17 32 17Z'
				fill={isActive ? '#fff' : '#979797'}
				stroke={isActive ? '#fff' : '#979797'}
				strokeWidth='2'
				strokeLinecap='round'
			/>
		</svg>
	);
};
