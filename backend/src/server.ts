import { app } from './app';
import { env } from 'env';

// const port = process.env.PORT || 5000;
const port = env.PORT;
const host = env.HOST;

app.listen(port, () =>
  console.log(`🚀 The HTTP Server is running on http://${host}:${port}`)
);
