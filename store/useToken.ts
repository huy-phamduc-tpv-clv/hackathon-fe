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
			}),
			{ name: 'auth-token' },
		),
	),
);

export default useToken;
