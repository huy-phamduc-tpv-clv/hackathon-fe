import { create } from 'zustand';

interface CardPaymentState {
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

const usePlayerType = create<CardPaymentState>((set, get) => ({
	playerTypes: [],
	setPlayerTypes: newPlayerTypes => set({ playerTypes: newPlayerTypes }),
	getPlayerTypes: () => get().playerTypes,
}));

export default usePlayerType;
