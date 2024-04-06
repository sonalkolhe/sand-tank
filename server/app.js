import express from 'express';
import globalErrorHandler from './utils/globalErrorHandler.js';
import cookieParser from 'cookie-parser';
import userRouter from './routes/userRouter.js';
import reviewRouter from './routes/reviewRouter.js';
import postRouter from './routes/postRouter.js';
import questionRouter from './routes/questionRoute.js';
import updatesRouter from './routes/updatesRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get('/', (req, res, next) => {
  res.status(200).send('okay goo');
});

app.use('/api/users/', userRouter);
app.use('/api/reviews/', reviewRouter);
app.use('/api/posts/', postRouter);
app.use('/api/questions/', questionRouter);
app.use('/api/updates/', updatesRouter);
app.use(globalErrorHandler);

export default app;