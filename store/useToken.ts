import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface TokenState {
	token: string;
	setToken: (newToken: string) => void;
	removeToken: () => void;
	hasToken: () => boolean;
}

const useToken = create<TokenState>()(
	devtools(
		persist(
			(set, get) => ({
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
