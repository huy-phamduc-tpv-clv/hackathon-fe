import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface TimeDetails {
  id: string;
  startHour: string;
  startMinute: string;
  endHour: string;
  endMinute: string;
  cur: string;
  price: number;
}

export interface Pitch {
  ownerId: string;
  fieldId: string;
  id: string;
  pitchName: string;
  description: string;
  pitchType: string[];
  grassType: string[];
  timeTable: TimeDetails[];
}

interface PitchState {
  pitchs: Pitch[];
  addPitch: (newPitch: Pitch[]) => void;
  removePitch: (id: string) => void;
  initPitch: () => void;
  getPitch: (id: string) => Pitch | undefined;
  getPitchs: () => Pitch[];
}

const usePitch = create<PitchState>()(
  devtools(
    persist(
      (set, get) => ({
        pitchs: [],
        addPitch: (newPitch) => {
          set({ pitchs: newPitch });
        },
        removePitch: (id) => {
          set({ pitchs: get().pitchs.filter((item) => item.id !== id) });
        },
        getPitch: (id) => get().pitchs.find((item) => item.id === id),
        getPitchs: () => get().pitchs,
        initPitch: () => set({ pitchs: [] }),
      }),
      {
        name: 'pitch-storage',
      },
    ),
  ),
);

export default usePitch;
