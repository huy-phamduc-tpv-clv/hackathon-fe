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
	profileOwner: ProfileOwner;
	setProfileOwner: (newProfileOwner: ProfileOwner) => void;
	updateProfileOwner: (updatedFields: Partial<ProfileOwner>) => void;
	clearProfileOwner: () => void; // Reset the profileOwner to default
}

const useProfileOwner = create<ProfileOwnerState>((set) => ({
	profileOwner: {
		owner_name: '',
		id: '',
		type: '',
		age: '',
		phone_number: '',
		email: '',
	},
	setProfileOwner: (newProfileOwner) =>
		set({ profileOwner: newProfileOwner }),
	updateProfileOwner: (updatedFields) =>
		set((state) => ({
			profileOwner: { ...state.profileOwner, ...updatedFields },
		})),
	clearProfileOwner: () =>
		set({
			profileOwner: {
				owner_name: '',
				id: '',
				type: '',
				age: '',
				phone_number: '',
				email: '',
			},
		}),
}));

export default useProfileOwner;
