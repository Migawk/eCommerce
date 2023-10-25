import { create } from "zustand";

export const useItems = create((set, get) => ({
  items: [1],
  addItem: (val) => set((state) => ({
    items: [...state.items].concat(val)
  })),
  removeItem: (ind) => set((state) => ({
    items: state.items.filter((el, iInd) => ind !== iInd)
  }))
}));
