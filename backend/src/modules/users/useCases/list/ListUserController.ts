import { AppError } from '../../../../middlewares/Erros';
import { ListUserUseCase } from './ListUserUseCase';
import { Request, Response } from 'express';
import { z } from 'zod';

class ListUserController {
  constructor(private listUserUseCase: ListUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {

    const getUserBodySchema = z.object({ id_store: z.string() });

    try {
      const { id_store } = getUserBodySchema.parse(request.params);

      const users = await this.listUserUseCase.execute({id_store});

      return response.status(200).json(users);
    } catch (error: any) {
      console.error(`Error to get user: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { ListUserController };
