import express from 'express';
import dotenv from 'dotenv';

// inisialisasi
dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());

// routes api
app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`Express runing on port ${port}`);
});
