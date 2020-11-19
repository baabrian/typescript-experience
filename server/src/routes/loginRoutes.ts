import e, { Router, Request, Response } from 'express';
import { requireAuth } from '../middlewares/requireAuth';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
    <div>
      <div>You are logged in</div>
      <a href="/logout">Logout</a>
    </div>
    `);
  } else {
    res.send(`
    <div>
      <div>You are not logged in</div>
      <a href="/auth/login">Login</a>
    </div>
    `);
  }
});

router.get('/protected', requireAuth, (req: RequestWithBody, res: Response) => {
  res.send('Welcome to proteected Route.Your Password and email information');
});

export { router };
