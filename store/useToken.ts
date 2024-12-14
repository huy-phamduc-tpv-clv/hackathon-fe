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
	userType: string;
	setUserType: (newUser: string) => void;
	isPlayer: boolean;
	isFieldOwner: boolean;

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
				userType: '',
				setUserType: userType =>
					set({
						userType,
						isPlayer: ROLE.PLAYER === userType,
						isFieldOwner: ROLE.FIELD_OWNER === userType,
					}),
				isPlayer: false,
				isFieldOwner: false,

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
