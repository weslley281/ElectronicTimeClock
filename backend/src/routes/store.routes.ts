import { createStoreController } from '@modules/stories/useCases/create';
import { deleteStoreByEmailController } from '@modules/stories/useCases/deleteByEmail';
import { deleteStoreByIdController } from '@modules/stories/useCases/deleteByID';
import { getStoreByEmailController } from '@modules/stories/useCases/findByEmail';
import { getStoreByIdController } from '@modules/stories/useCases/findById';
import { listStoreController } from '@modules/stories/useCases/list';
import { updateStoreController } from '@modules/stories/useCases/update';
import { Router, Request, Response } from 'express';

const storesRoutes = Router();

storesRoutes.post('/create', (request: Request, response: Response) => {
  createStoreController.handle(request, response);
});

storesRoutes.put('/update', (request: Request, response: Response) => {
  updateStoreController.handle(request, response);
});

storesRoutes.get('/all', (request: Request, response: Response) => {
  listStoreController.handle(request, response);
});

storesRoutes.get('/id/:id_store', (request: Request, response: Response) => {
  getStoreByIdController.handle(request, response);
});

storesRoutes.get('/email/:email', (request: Request, response: Response) => {
  getStoreByEmailController.handle(request, response);
});

storesRoutes.delete('/id/:id_store', (request: Request, response: Response) => {
  deleteStoreByIdController.handle(request, response);
});

storesRoutes.delete('/email/:id_store', (request: Request, response: Response) => {
  deleteStoreByEmailController.handle(request, response);
});
export { storesRoutes };
