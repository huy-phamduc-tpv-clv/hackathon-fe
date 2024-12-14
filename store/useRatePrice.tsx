import { create } from 'zustand';

interface UseRatePrice {
  ratePrice: {
    preferPriceStart: number;
    preferPriceEnd: number;
  };
  setRate: (newRate: { preferPriceStart: number; preferPriceEnd: number }) => void;
  getRate: () => {
    preferPriceStart: number;
    preferPriceEnd: number;
  };
}

const useRatePrice = create<UseRatePrice>((set, get) => ({
  ratePrice: { preferPriceEnd: 0, preferPriceStart: 5_000_000 },
  setRate: (newValue) => set({ ratePrice: newValue }),
  getRate: () => get().ratePrice,
}));

export default useRatePrice;
