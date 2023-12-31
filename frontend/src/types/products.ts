import { ESTATUS } from "./enums"

export default interface IProduct {
    id: string
    name: string
    price: number
    discount: number
    colors: string[]
    status: ESTATUS
    countLeft: number
    countSold: number
    description: string[]
    photos: string[]
    size: string[]
    rate: number
    quantity: number

    _count: {
        reviews: number
    }

    shipping: IShipping[]
}

export interface IReview {
    productId: string
    user: {
        name: string
        id: string
    }
    rate: number
    adventages: string
    disadventages: string
    description: string
}

export interface IShipping {
    id: string
    name: string
    logo: string

    price: string
    duration: string
    insurance: boolean
}
