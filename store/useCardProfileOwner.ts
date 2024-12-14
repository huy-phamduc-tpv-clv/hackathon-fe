import { create } from 'zustand';

export interface ProfileOwner {
	owner_name: string;
	id: string;
	type: string;
	age: string;
	phone_number: string;
	email: string;
}

interface ProfileOwnerState {
	profileOwners: ProfileOwner[];
	addProfileOwner: (newProfileOwner: ProfileOwner) => void;
	removeProfileOwner: (id: string) => void;
	getProfileOwner: (id: string) => ProfileOwner | undefined;
	getProfileOwners: () => ProfileOwner[];
}

const useCardProfileOwner = create<ProfileOwnerState>((set, get) => ({
	profileOwners: [],

	addProfileOwner: (newProfileOwner) => {
		set({ profileOwners: [...get().profileOwners, newProfileOwner] });
	},

	removeProfileOwner: (id) => {
		set({ profileOwners: get().profileOwners.filter((item) => item.id !== id) });
	},

	getProfileOwner: (id) => {
		return get().profileOwners.find((item) => item.id === id);
	},

	getProfileOwners: () => {
		return get().profileOwners;
	},
}));

export default useCardProfileOwner;
