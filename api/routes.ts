import express, { Application, Request, Response, NextFunction} from 'express';
import { DEFAULT_SERVER_PORT, DEFAULT_SERVER_URL } from './consts';

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello');
})


app.listen(DEFAULT_SERVER_PORT, () => console.log(`Server running at ${DEFAULT_SERVER_URL}${DEFAULT_SERVER_PORT}.`))