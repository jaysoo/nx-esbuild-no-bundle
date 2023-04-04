import express from 'express';
import { util } from '@api/util';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3333;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: util() });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
