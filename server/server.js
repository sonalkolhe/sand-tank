import dotenv from 'dotenv';
dotenv.config({ path: './dotenv.config' });
import app from './app.js';
import mongoose from 'mongoose';

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log({ name: err.name, message: err.message, err });
  process.exit(1);
});

const db = process.env.LOCAL_DATABASE;
mongoose.connect(db)
  .then(() => {
    console.log('db connected successfully');
  }).catch(err => {
    console.log(err);
  });

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message, err);
  server.close(() => {
    process.exit(1);
  });
});