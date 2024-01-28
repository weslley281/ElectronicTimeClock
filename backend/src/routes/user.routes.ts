import { createUserController } from '@modules/users/useCases/create';
import { deleteUserByEmailController } from '@modules/users/useCases/deleteByEmail';
import { deleteUserByIdController } from '@modules/users/useCases/deleteByID';
import { getUserByEmailController } from '@modules/users/useCases/findByEmail';
import { getUserByIdController } from '@modules/users/useCases/findById';
import { listUserController } from '@modules/users/useCases/list';
import { updateUserController } from '@modules/users/useCases/update';
import { Router, Request, Response } from 'express';

const usersRoutes = Router();

usersRoutes.post('/create', (request: Request, response: Response) => {
  createUserController.handle(request, response);
});

usersRoutes.put('/update', (request: Request, response: Response) => {
  updateUserController.handle(request, response);
});

usersRoutes.get('/all/:id_store', (request: Request, response: Response) => {
  listUserController.handle(request, response);
});

usersRoutes.get('/id/:id_user', (request: Request, response: Response) => {
  getUserByIdController.handle(request, response);
});

usersRoutes.get('/email/:email', (request: Request, response: Response) => {
  getUserByEmailController.handle(request, response);
});

usersRoutes.delete('/id/:id_user', (request: Request, response: Response) => {
  deleteUserByIdController.handle(request, response);
});

usersRoutes.delete('/email/:id_user', (request: Request, response: Response) => {
  deleteUserByEmailController.handle(request, response);
});
export { usersRoutes };
