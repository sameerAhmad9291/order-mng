import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import orderRouters from './routes/order.routes';
import userRouters from './routes/user.routes';

const app: express.Express = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/alive', (req, res) => res.send({ alive: true }));
app.use('/api/users', userRouters);
app.use('/api/orders', orderRouters);

export default app;