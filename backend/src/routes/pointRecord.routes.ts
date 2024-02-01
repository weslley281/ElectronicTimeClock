import { createPointRecordController } from '@modules/pointRecord/useCases/create';
import { Router, Request, Response } from 'express';

const pointrecordsRoutes = Router();

pointrecordsRoutes.post('/create', (request: Request, response: Response) => {
  createPointRecordController.handle(request, response);
});

// pointrecordsRoutes.put('/update', (request: Request, response: Response) => {
//   updatePointRecordController.handle(request, response);
// });

export { pointrecordsRoutes };
