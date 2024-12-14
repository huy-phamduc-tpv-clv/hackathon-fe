import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { ROLE } from '../constants/role';

interface TokenState {
	token: string;
	phone: string;
	setPhone: (newPhone: string) => void;
	getPhone: () => string;
	setToken: (newToken: string) => void;
	removeToken: () => void;
	hasToken: () => boolean;
	usr_id: string;
	setUsrId: (newUsrId: string) => void;
	getUsrId: () => string;
	userType: string;
	setUserType: (newUser: string) => void;
	isPlayer: boolean;
	isFieldOwner: boolean;
	name: string;
	setName: (newName: string) => void;
	getName: () => string;
	age: string;
	setAge: (newAge: string) => void;
	getAge: () => string;
	email: string;
	setEmail: (newEmail: string) => void;
	getEmail: () => string;
	// player time tables
	playerTimeTables: {
		dateOfWeek: string;
		startHour: string;
		endHour: string;
	}[];
	setPlayerTimeTables: (
		newPlayerTimeTables: {
			dateOfWeek: string;
			startHour: string;
			endHour: string;
		}[],
	) => void;
	getPlayerTimeTables: () => {
		dateOfWeek: string;
		startHour: string;
		endHour: string;
	}[];

	// Player Types
	playerTypes: {
		playerType: string;
		pitchType: string;
		position: string;
	}[];
	setPlayerTypes: (
		newPlayerTypes: {
			playerType: string;
			pitchType: string;
			position: string;
		}[],
	) => void;
	getPlayerTypes: () => {
		playerType: string;
		pitchType: string;
		position: string;
	}[];
}

const useToken = create<TokenState>()(
	devtools(
		persist(
			(set, get) => ({
				phone: '',
				setPhone: newPhone => set({ phone: newPhone }),
				getPhone: () => get().phone,
				token: '',
				setToken: newToken => set({ token: newToken }),
				removeToken: () => set({ token: '' }),
				hasToken: () => !!get().token,
				usr_id:'',
				setUsrId: newUsrId => set({ usr_id: newUsrId }),
				getUsrId: () => get().usr_id,
				userType: '',
				setUserType: userType =>
					set({
						userType,
						isPlayer: ROLE.PLAYER === userType,
						isFieldOwner: ROLE.FIELD_OWNER === userType,
					}),
				isPlayer: false,
				isFieldOwner: false,
				
				name: '',
				setName: newName => set({ name: newName }),
				getName: () => get().name,

				age: '',
				setAge: newAge => set({ age: newAge }),
				getAge: () => get().age,

				email: '',
				setEmail: newEmail => set({ email: newEmail }),
				getEmail: () => get().email,

				// player time tables
				playerTimeTables: [],
				setPlayerTimeTables: newPlayerTimeTables =>
					set({ playerTimeTables: newPlayerTimeTables }),
				getPlayerTimeTables: () => get().playerTimeTables,

				// Player Types
				playerTypes: [],
				setPlayerTypes: newPlayerTypes =>
					set({ playerTypes: newPlayerTypes }),
				getPlayerTypes: () => get().playerTypes,
			}),
			{ name: 'auth-token' },
		),
	),
);

export default useToken;
