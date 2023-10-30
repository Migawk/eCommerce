import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MtMParser } from "src/helpers/prisma";

export interface ICategory {
  name: string
  subCategories?: string[]
  parentCategories?: string[]
}
type TParsedCategory = [{id: string}];

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  category = this.prisma.category;

  getCategory(id: string) {
    return this.category.findUnique({
      where: {
        id
      },
      select: {
        id: true,
        name: true,
        products: {
          take: 10,
          select: {
            id: true,
            name: true,
            rate: true,
            price: true,
            discount: true,
            description: true,
            colors: true,
            photos: true,
            size: true,
            countLeft: true,
            countSold: true,
            _count: {
              select: {
                reviews: true
              }
            }
          }
        },
        subCategories: {
          select: {
            id: true,
            name: true,
            products: {
              take: 1,
              select: {
                id: true,
                photos: true
              }
            }
          }
        },
        parentCategories: {
          select: {
            id: true,
            name: true
          }
        }
      }
    });
  }
  
  createCategory(category: ICategory) {
    let subCategories;
    let parentCategories;

    if(category.subCategories) {
      subCategories = MtMParser(category.subCategories, "id");
      delete category.subCategories;
    }
    if(category.parentCategories) {
      parentCategories = MtMParser(category.parentCategories, "id");
      delete category.parentCategories;
    }

    return this.category.create({
      data: {
        name: category.name,
        subCategories: {
          connect: subCategories ? [
            ...subCategories
          ] : undefined
        },
        parentCategories: {
          connect: parentCategories ? [
            ...parentCategories
          ] : undefined
        }
      }
    })
  }
}
