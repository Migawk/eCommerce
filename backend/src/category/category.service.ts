import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  category = this.prisma.category;
  getCategory(id: string) {
    return this.category.findUnique({
      where: {
        id
      }
    });
  }

  createCategory(name: string) {
    return this.category.create({
      data: {
        name,
      }
    })
  }
}
