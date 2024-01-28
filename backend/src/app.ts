//Data Base
import { createConnectionDataBase } from '@database/db';
import { createTableStore } from '@database/models/storesModel';
import { createTableUser } from '@database/models/usersModel';

//express
import express, { NextFunction, Request, Response } from 'express';

//Swagger
import swaggerUi from 'swagger-ui-express';
import swaggerFile from 'swagger.json';

//Erros
import { AppError } from './middlewares/Erros';

//Routes
import { storesRoutes } from './routes/store.routes';
import { usersRoutes } from 'routes/user.routes';

createConnectionDataBase();
createTableStore();
createTableUser();

const app = express();

app.use(express.json());

app.use('/store', storesRoutes);
app.use('/user', usersRoutes);

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use((request: Request, response: Response, next: NextFunction) => {
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost');
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({ error: error.message });
    }

    return response.status(500).json({ error: error.message || error.stack });
  }
);

export { app };
