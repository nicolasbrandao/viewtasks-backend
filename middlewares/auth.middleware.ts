import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.cookies && req.cookies['access_token']) {
      const accessToken = req.cookies['access_token'];
      req.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    next();
  }
}
