import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { PrismaClient } from "@prisma/client";
import { verifyToken } from 'src/helpers/token';
const cookie = require("cookie");

@Injectable()
export class CategoryGuard implements CanActivate {
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {

    const req: Request = context.switchToHttp().getRequest();
    const token = cookie.parse(req.headers.cookie).token;
    if(!token) return false;

    const { data } = verifyToken(token);
    if(!data.id) return false;

    const prisma = new PrismaClient();
    const { role } = await prisma.user.findUnique({
      where: {
        id: data.id
      }
    });
    if(role === "ADMIN") return true;

    return false;
  }
}
