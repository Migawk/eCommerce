import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request } from 'express';
import { verifyToken } from 'src/helpers/token';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request & any, _, next: () => void) {
    if(!req.headers.cookie) throw new Error("There isn't anybody");
    req.user = verifyToken(req.headers.cookie.split("=")[1]);
    next();
  }
}
