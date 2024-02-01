import { createPointRecordController } from '@modules/pointRecord/useCases/create';
import { findByDatePointRecordController } from '@modules/pointRecord/useCases/findByDate';
import { Router, Request, Response } from 'express';

const pointrecordsRoutes = Router();

pointrecordsRoutes.post('/create', (request: Request, response: Response) => {
  createPointRecordController.handle(request, response);
});

pointrecordsRoutes.get('/interval/', (request: Request, response: Response) => {
  findByDatePointRecordController.handle(request, response);
});

// pointrecordsRoutes.put('/update', (request: Request, response: Response) => {
//   updatePointRecordController.handle(request, response);
// });

export { pointrecordsRoutes };
