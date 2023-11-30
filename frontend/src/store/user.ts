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

export interface IUserStore {
  user: IUser
  setUser: (val: IUser) => {user: IUser}
  erase: () => {user: null}
}

export const useUser = create((set) => ({
  user: null,
  setUser: (val: any) => set(() => ({
    user: val
  })),
  erase: () => set(() => ({
    user: null
  }))
}))
