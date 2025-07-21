import express from 'express';
import dotenv from 'dotenv';
import router from './routes/authRoute.js';

// inisialisasi
dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());

// routes api
app.use('/api/auth', router);

app.listen(port, () => {
  console.log(`Express runing on port ${port}`);
});
