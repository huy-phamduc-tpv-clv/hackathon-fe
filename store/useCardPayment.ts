import { create } from 'zustand';

export interface Card {
	owner_name: string;
	id: string;
	type: string;
	card_number: string;
	expiration: string;
	cvv: string;
}

interface CardPaymentState {
	cards: Card[];
	addCard: (newCard: Card) => void;
	removeCard: (id: string) => void;
	getCard: (id: string) => Card | undefined;
	getCards: () => Card[];
}

const useCardPayment = create<CardPaymentState>((set, get) => ({
	cards: [],
	addCard: newCard => {
		return set({ cards: [...get().cards, newCard] });
	},
	removeCard: id => {
		return set({ cards: [...get().cards.filter(item => item.id !== id)] });
	},
	getCard: id => get().cards.find(item => (item.id = id)),
	getCards: () => get().cards,
}));

export default useCardPayment;
