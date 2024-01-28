import { AppError } from '../../../../middlewares/Erros';
import { Request, Response } from 'express';
import { DeleteUserByIdUseCase } from './DeleteUserUseByIdCase';
import { z } from 'zod';

class DeleteUserByIdController {
  constructor(private deleteUserByIdUseCase: DeleteUserByIdUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getUserBodySchema = z.object({ id_user: z.string() });

    try {
      const { id_user } = getUserBodySchema.parse(request.params);

      const users = await this.deleteUserByIdUseCase.execute({ id_user });

      return response.status(204).json(users);
    } catch (error: any) {
      console.error(`Erro ao delete user: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { DeleteUserByIdController };
