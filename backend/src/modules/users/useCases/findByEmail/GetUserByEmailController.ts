import { AppError } from '../../../../middlewares/Erros';
import { Request, Response } from 'express';
import { GetUserByEmailUseCase } from './GetUserByEmailUseCase';
import { z } from 'zod';

class GetUserByEmailController {
  constructor(private getUserByEmailUseCase: GetUserByEmailUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getUserBodySchema = z.object({ email: z.string() });

    try {
      const { email } = getUserBodySchema.parse(request.params);

      const users = await this.getUserByEmailUseCase.execute({ email });

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

export { GetUserByEmailController };
