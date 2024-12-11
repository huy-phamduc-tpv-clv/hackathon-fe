import { create } from 'zustand';

interface Card {
	id: string;
	type: string;
	card_number: string;
	Expiration: string;
	cvv: string;
}

interface CardPaymentState {
	cards: Card[];
	addCard: (newCard: Card) => void;
	removeCard: (id: string) => void;
	getCards: (id: string) => Card | undefined;
}

const useCardPayment = create<CardPaymentState>((set, get) => ({
	cards: [],
	addCard: newCard => {
		return set({ cards: [...get().cards, newCard] });
	},
	removeCard: id => {
		return set({ cards: [...get().cards.filter(item => item.id !== id)] });
	},
	getCards: id => get().cards.find(item => (item.id = id)),
}));

export default useCardPayment;
