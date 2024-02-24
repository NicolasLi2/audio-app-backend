import express from 'express';
import 'dotenv/config'; // order is important
import './db';
import authRouter from './routers/auth';
import audioRouter from './routers/audio';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('src/public'));

app.use('/auth', authRouter);
app.use('/audio', audioRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
