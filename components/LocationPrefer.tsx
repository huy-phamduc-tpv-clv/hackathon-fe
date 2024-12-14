import { MapSimpleMarker } from '@/icons/map-simple-marker';
import useLocations from '@/store/useLocation';
import { Pen } from '../icons/pen';
import { DISTRICTS } from '../constants/location';

export const LocationPrefer = () => {
	const { getLocations } = useLocations();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const getDistrict = (found: any) => {
		const xxx = DISTRICTS[found.city as 'Ho Chi Minh'].find(
			item => item.key === found.district,
		);
		return xxx?.label;
	};

	return (
		<div className='mx-3 mt-5 flex flex-col gap-3'>
			{getLocations().map((item, index) => (
				<div
					className='bg-[#FFFFFFE5] rounded-[12px] flex justify-between items-center p-3 shadow-custom-1'
					key={index}
				>
					<div className='flex flex-col'>
						<div className='flex items-center gap-2'>
							<MapSimpleMarker />
							<span className='text-[12px] text-neutral-700'>
								{item.city} City
							</span>
						</div>

						<div>
							{item.ward} Ward, {getDistrict(item)}
						</div>
					</div>
					<div className='p-3 bg-white rounded-[12px]'>
						<Pen />
					</div>
				</div>
			))}
		</div>
	);
};
