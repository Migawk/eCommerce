import { Injectable } from '@nestjs/common';
import { generateToken } from 'src/helpers/token';
import { PrismaService } from 'src/prisma/prisma.service';
import z from "zod";
import { toHash } from 'src/helpers/crypt';
import { verifyToken } from 'src/helpers/token';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) { };

    async createUser(name: string, email: string, password: string) {
        const parse = {
            name: z.string().safeParse(name),
            email: z.string().safeParse(email),
            password: z.string().min(7).safeParse(password)
        };
        if (!parse.name.success || !parse.password.success || !parse.email.success) //
            return {erorr: "Problem in data", data: Object.values(parse).filter(e => !e.success)};

        const hashPassword = await toHash(password);
        try {
            const res = await this.prisma.user.create({
                data: {
                    name,
                    email,
                    password: hashPassword
                }
            });

            const token = generateToken({id: res.id, name: res.name, password: res.password });
            delete res.password;
            return { res, token }
        } catch (e) {
            if(e.code === "P2002") return {error: "Name is already taken"};
        }
    }
    async logIn(email: string, password: string) {
        const parse = {
            email: z.string().safeParse(email),
            password: z.string().min(7).safeParse(password)
        };
        if (!parse.email.success || !parse.password.success) //
            return {error: "Problem in data", data: Object.values(parse).filter(e => !e.success)};

        const hash = await toHash(password);

        const user = await this.prisma.user.findUnique({
            where: {
              email
            },
            select: {
                id: true,
                name: true,
                password: true,

                products: true,
                reviews: true,
                favProducts: {
                  select: {
                    id: true,
                    name: true,
                    price: true,
                    colors: true,
                    countLeft: true,
                    countSold: true,
                    description: true,
                    photos: true,
                    size: true,
                    rate: true,
                    _count: {
                      select: {
                        reviews: true
                      }
                    }
                  }
                },
                role: true
            }
        });
        if (user.password !== hash) return {error: "Wrong password"};

        delete user.password;
        return { user, token: generateToken({ id: user.id, name: user.name, password }) };
    }
    async me(token: string) {
      const tokenStatus = verifyToken(token);
      if(!tokenStatus.data.id) return {msg: "wrong token"};
      return this.prisma.user.findUnique({
        where: {
          id: tokenStatus.data.id
        }, select: {
          id: true,
          name: true,

          products: true,
          reviews: true,
          favProducts: true,
          role: true
        }
      });
    }
}
