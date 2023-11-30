import { create } from "zustand";
import IProduct from "../types/products";

export interface IItemsStore {
  items: null | IProduct[];
  addItem: any;
  setItems: any;
  removeItem: any;
}

export const useItems = create((set) => ({
  items: null,
  addItem: (val: any) => set((state: IItemsStore) => ({
    items: state.items === null ? [val] : Array.from(new Set([...state.items].concat(val)))
  })),
  setItems: (val: any) => set(() => ({
    items: Array.from(new Set(val))
  })),
  removeItem: (ind: any) => set((state: IItemsStore) => ({
    items: state.items !== null ? state.items.filter((_, iInd) => ind !== iInd) : null
  }))
}));
