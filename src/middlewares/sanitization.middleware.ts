import { NextFunction, Response, Request } from 'express';
import * as sanitization from '../sanitization';

export const sanitizeData = (req: Request, _res: Response, next: NextFunction): void => {
  req.body.name = sanitization.formatName(req.body.name);
  req.body.nickname = sanitization.formatName(req.body.nickname);
  req.body.phone = sanitization.formatTelp(req.body.phone);
  req.body.parentPhone = sanitization.formatTelp(req.body.parentPhone);
  req.body.originSchool = sanitization.formatSekolah(req.body.originSchool);
  req.body.originChurch = sanitization.formatGereja(req.body.originChurch);
  return next();
};
