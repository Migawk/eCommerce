import { create } from "zustand";

export const useItems = create((set, get) => ({
  items: null,
  addItem: (val) => set((state) => ({
    items: state.items === null ? [val] : Array.from(new Set([...state.items].concat(val)))
  })),
  setItems: (val) => set((state) => ({
    items: Array.from(new Set(val))
  })),
  removeItem: (ind) => set((state) => ({
    items: state.items.filter((el, iInd) => ind !== iInd)
  }))
}));
