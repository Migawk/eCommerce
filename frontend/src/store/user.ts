import { create } from "zustand";

export interface IUser {
  id: string
  name: string
  role: string
  isVerified: boolean
  reviews?: {
    productId: string
  }[]
  favProducts?: {
    id: string
  }[]
}

export const useUser = create((set, get) => ({
  user: null,
  setUser: (val) => set((state) => ({
    user: val
  })),
  erase: () => set((state) => ({
    user: null
  }))
}))
