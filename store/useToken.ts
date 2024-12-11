import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface TokenState {
	token: string;
	phone: string;
	setPhone: (newPhone: string) => void;
	getPhone: () => string;
	setToken: (newToken: string) => void;
	removeToken: () => void;
	hasToken: () => boolean;
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
			}),
			{ name: 'auth-token' },
		),
	),
);

export default useToken;
