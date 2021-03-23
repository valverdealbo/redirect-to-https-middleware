import { Request, Response, NextFunction } from 'express';

export function redirectToHttpsMiddleware(request: Request, response: Response, next: NextFunction): void {
  const { protocol, hostname, url } = request;
  if (protocol === 'http' && hostname !== 'localhost' && hostname !== '127.0.0.1') {
    response.redirect(`https://${hostname}${url}`);
    return;
  }
  next();
}
