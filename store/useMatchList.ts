import { create } from 'zustand';

export interface Match {
  id: string;

  name?: string;

  date?: string;
  timeSlotStart?: string;
  timeSlotEnd?: string;

  fieldName?: string;
  pitchName?: string;

  refereeType?: string;
  price?: string;
}

interface UseListMatch {
  matchList: Match[];
  picked: Match[];
  setMatchList: (matches: Match[]) => void;
  getMatchList: () => Match[];
  swiftRight: (match: Match) => void;
}

const useMatchList = create<UseListMatch>((set, get) => ({
  matchList: [],
  picked: [],
  setMatchList: (matches) => set({ matchList: matches }),
  getMatchList: () => get().matchList,

  swiftRight: (match: Match) => {
    get().picked.push(match);

    return set({ picked: get().picked });
  },
}));

export default useMatchList;
