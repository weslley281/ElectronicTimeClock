import { AppError } from '../../../../middlewares/Erros';
import { Request, Response } from 'express';
import { DeleteUserByEmailUseCase } from './DeleteUserByEmailUseCase';
import { z } from 'zod';

class DeleteUserByEmailController {
  constructor(private deleteUserByEmailUseCase: DeleteUserByEmailUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getUserBodySchema = z.object({ email: z.string() });

    try {
      const { email } = getUserBodySchema.parse(request.params);

      const users = await this.deleteUserByEmailUseCase.execute({ email });

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

export { DeleteUserByEmailController };
