import { Request, Response } from 'express';
import { z } from 'zod';
import { FindByDatePointRecordUseCase } from './findByDateUseCase';
import { AppError } from 'middlewares/Erros';

class FindByDatePointRecordController {
  constructor(private findByDatePointRecordUseCase: FindByDatePointRecordUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {

    const getUserBodySchema = z.object({
        id_user: z.string(),
        initialDate: z.date(),
        finalDate: z.date()
    });

    try {
      const { id_user, initialDate, finalDate } = getUserBodySchema.parse(request.params);

      const users = await this.findByDatePointRecordUseCase.execute({id_user, initialDate, finalDate});

      return response.status(200).json(users);
    } catch (error: any) {
      console.error(`Error to get dates: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { FindByDatePointRecordController };
