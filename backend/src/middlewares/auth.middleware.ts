import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request } from 'express';
import { verifyToken } from 'src/helpers/token';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request & any, _, next: () => void) {
    req.user = verifyToken(req.headers.cookie.split("=")[1]);
    next();
  }
}
