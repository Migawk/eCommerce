import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async getUser(id: string) {
        return this.prisma.user.findUnique(
            {
                where: { id: id },
                select: { id: true, name: true, reviews: {
                    select: {
                        productId: true,
                        userId: true,
                        rate: true,
                    }
                } }
            }
        );
    }
}
