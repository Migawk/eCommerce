import { Injectable } from '@nestjs/common';
import { verifyToken } from 'src/helpers/token';
import { PrismaService } from 'src/prisma/prisma.service';
import { IAuthor } from 'types/user';
import { MtMParser } from "src/helpers/prisma";
import z from 'zod';

export interface IProduct {
    name: string
    price: number
    colors: string[]
    description: string[]
    photos: string[]
    size: string[]
    rate: number
    status: "InStock" | "RunningOut" | "EMPTY"

    countLeft: number
    countSold: number

    authorId?: string

    categories?: string[]
}

@Injectable()
export class ProductService {
    constructor(private prisma: PrismaService) { }

    private skeleton = z.object({
        name: z.string(),
        price: z.number(),
        colors: z.array(z.string()),
        description: z.array(z.string()),
        photos: z.array(z.string()),
        size: z.array(z.string()),
        status: z.enum(["InStock", "RunningOut", "EMPTY"]),
        countLeft: z.number(),
        countSold: z.number()
    });
    private parse(product: IProduct) {
        const parse = this.skeleton.safeParse(product);
        return parse;
    }
    async createProduct(author: IAuthor, product: IProduct) {
        if (!author.id) return { message: "There ain't user!" };
        const parse = this.parse(product);
        if (!parse.success) return { message: "wrongData", data: parse };

        /*
          Parser for categories.
          ["uuid"] => [{id: "uuid"}];
        */
        let categories;
        if("categories" in product) {
          categories = product.categories.map(category => {
            return {"id": category};
          });
          delete product.categories;
        }

        try {
            const res = await this.prisma.product.create({
                data: {
                    ...product as any,
                    authorId: author.id,

                    categories: {
                        connect: [
                          ...categories
                        ]
                    }
                },
            })
            return res;
        } catch (e) {
            if (e.code === "P2002") return { message: "Name is already taken" };
            return e;
        }
        return {message: "Something went wrong"};
    }
    async createManyProduct(author: IAuthor, products: IProduct[]) {
        if (!author.id) return { message: "There ain't user!" };
        const parse = z.array(this.skeleton).safeParse(products);

        if (!parse.success) return { message: "wrongData", data: parse };

        try {
            const newProducts: (IProduct & { authorId: string })[] = products.map((pr: IProduct) => {
                return { ...pr, authorId: author.id };
            });

            const state: any[] = [];
            newProducts.forEach(async (prod) => { // write map instead and return resuls
              let categories;
              if(prod.categories) {
                categories = MtMParser(prod.categories, "id");
                delete prod.categories;
              }
              try {
                const res = await this.prisma.product.create({
                    data: {
                      ...prod,
                      categories: {
                        connect: categories ? [
                        ...categories as any
                      ] : undefined}
                    }
                });
                return state.push(res);
              } catch(e) {
                return e;
              }
            });
            return state;
        } catch (e) {
            if (e.code === "P2002") return { message: "Name is already taken" };
            return { message: "Unknown error", data: e };
        }
    }
    async getProduct(id: string) {
        const res = await this.prisma.product.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                name: true,
                price: true,
                discount: true,
                colors: true,
                description: true,
                photos: true,
                size: true,
                rate: true,
                authorId: true,
                status: true,
                countLeft: true,
                countSold: true,
                _count: {
                    select: {
                        reviews: true
                    }
                },
                shipping: {
                    select: {
                        id: true,
                        name: true,
                        logo: true,
                        price: true,
                        duration: true,
                        insurance: true,
                    }
                }
            }
        })
        if (res === null) return { message: 404 }
        return res;
    }
    async getReviews(id: string, offset: number) {
        return this.prisma.review.findMany({
            where: {
                productId: id
            },
            select: {
                productId: true,
                user: {
                    select: {
                        name: true,
                        id: true,
                    }
                },
                rate: true,
                adventages: true,
                disadventages: true,
                description: true

            },
            take: 10,
            skip: offset,
        })
    }
    async updateProduct(author: IAuthor, id: string, product: IProduct) {
        if (!author.id) return { message: "There ain't user!" };
        const parse = this.parse(product);
        if (!parse.success) return { message: "wrongData", data: parse };

        const res = await this.prisma.product.update({
            where: {
                id
            },
            data: {
                ...product as any
            }
        });
        return res;
    }
    async deleteProduct(author: IAuthor, id: string) {
        if (!author.id) return { message: "There ain't user!" };
        const product = await this.prisma.product.findUnique({
            where: {
                id
            }
        });
        if (product === null) return { message: "We couldn't find product!" };
        if (author.id !== product.authorId) return { message: "It's not your!" };

        return this.prisma.product.delete({
            where: {
                id
            }
        });
    }
}
