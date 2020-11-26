import e, { Router, Request, Response } from 'express';
import { requireAuth } from '../middlewares/requireAuth';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

export { router };
