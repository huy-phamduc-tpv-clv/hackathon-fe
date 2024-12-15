import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface Field {
  id_owner: string;
  id: string;
  field_name: string;
  city: string;
  ward: string;
  district: string;
  address_detail: string;
  description: string;
  services: string[];
  medias: {
    id: string;
    fileType: string;
    fileUrl: string;
    field: string | null;
    pitch: string | null;
  }[];
}

interface FieldState {
  fields: Field[];
  addField: (newField: Field[]) => void;
  removeField: (id: string) => void;
  initField: () => void;
  getField: (id: string) => Field | undefined;
  getFields: () => Field[];
}

const useField = create<FieldState>()(
  devtools(
    persist(
      (set, get) => ({
        fields: [],
        addField: (newField) => {
          set({ fields: newField });
        },
        removeField: (id) => {
          set({ fields: get().fields.filter((item) => item.id !== id) });
        },
        getField: (id) => get().fields.find((item) => item.id === id),
        getFields: () => get().fields,
        initField: () => set({ fields: [] }),
      }),
      {
        name: 'field-storage',
      },
    ),
  ),
);

export default useField;
