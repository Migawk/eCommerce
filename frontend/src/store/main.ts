import { create } from "zustand";

export const useItems = create((set, get) => ({
  items: [
    // {
    //   id: "123",
    //   name: "Short Mango top",
    //   price: 14.99,
    //   quantity: 1,
    //   shipping: {
    //     id: "dd9e6f84-8bf2-4a6b-9ff9-66ddf7fd214a",
    //     name: "Ausff",
    //     price: 4,
    //     duration: "4-9",
    //     insurance: true
    //   }
    // } // an example
  ],
  addItem: (val) => set((state) => ({
    items: Array.from(new Set([...state.items].concat(val)))
  })),
  removeItem: (ind) => set((state) => ({
    items: state.items.filter((el, iInd) => ind !== iInd)
  }))
}));
