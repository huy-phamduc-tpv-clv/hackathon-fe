import { create } from 'zustand';

export interface Field {
    id_owner: string,
    id: string;
    field_name: string;
    city: string;
    ward: string;
    district: string;
    address_detail: string;
    description: string;
    services: string[];
    medias: [];
}

interface FieldState {
    fields: Field[];
    addField: (newField: Field) => void;
    removeField: (id: string) => void;
    getField: (id: string) => Field | undefined;
    getFields: () => Field[];
}

const useField = create<FieldState>((set, get) => ({
    fields: [],
    addField: newField => {
        return set({ fields: [...get().fields, newField] });
    },
    removeField: id => {
        return set({ fields: [...get().fields.filter(item => item.id !== id)] });
    },
    getField: id => get().fields.find(item => (item.id = id)),
    getFields: () => get().fields,
}));

export default useField;
