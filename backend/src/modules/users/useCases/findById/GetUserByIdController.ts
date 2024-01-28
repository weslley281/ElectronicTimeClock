import { AppError } from '../../../../middlewares/Erros';
import { Request, Response } from 'express';
import { GetUserByIdUseCase } from './GetUserByIdUseCase';
import { z } from 'zod';

class GetUserByIdController {
  constructor(private getUserByIdUseCase: GetUserByIdUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getUserBodySchema = z.object({ id_user: z.string() });

    try {
      const { id_user } = getUserBodySchema.parse(request.params);

      const users = await this.getUserByIdUseCase.execute({ id_user });

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

export { GetUserByIdController };
