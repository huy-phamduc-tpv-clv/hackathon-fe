import { create } from 'zustand';

interface LocationState {
	locations: {
		city: string;
		ward: string;
		district: string;
		address: string;
	}[];
	addLocations: (newPlayerTypes: {
		city: string;
		ward: string;
		district: string;
		address: string;
	}) => void;
	getLocations: () => {
		city: string;
		ward: string;
		district: string;
		address: string;
	}[];
}

const useLocations = create<LocationState>((set, get) => ({
	locations: [],
	addLocations: newValue => {
		const current = get().locations;
		current.push(newValue);
		return set({ locations: current });
	},
	getLocations: () => get().locations,
}));

export default useLocations;
