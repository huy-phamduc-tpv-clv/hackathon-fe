import { create } from 'zustand';

export interface Match {
  id: string;
}

interface UseListMatch {
  matchList: Match[];
  setMatchList: (matches: Match[]) => void;
  getMatchList: () => Match[];
}

const useMatchList = create<UseListMatch>((set, get) => ({
  matchList: [],
  setMatchList: (matches) => set({ matchList: matches }),
  getMatchList: () => get().matchList,
}));

export default useMatchList;
