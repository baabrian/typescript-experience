import express, { Request, Response } from 'express';
import { router as loginRoutes } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['2313iklj21ljkdasdasdo8cuvoixchvxc'] }));

app.use(loginRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send(
    `
    <div>
      <h1>Hi there</h1>
    </div>
    `
  );
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
