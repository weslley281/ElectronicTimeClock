import { AppError } from '../../../../middlewares/Erros';
import { Request, Response } from 'express';
import { z } from 'zod';
import { FindPointRecordByTodayUseCase } from './GetUserByIdUseCase';

class GetPointRecordByIdController {
  constructor(private findPointRecordByTodayUseCase: FindPointRecordByTodayUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getPointRecordBodySchema = z.object({ id_user: z.string() });

    try {
      const today = new Date();
      const { id_user } = getPointRecordBodySchema.parse(request.params);

      const pointrecords = await this.findPointRecordByTodayUseCase.execute({ id_user, today });

      return response.status(200).json(pointrecords);
    } catch (error: any) {
      console.error(`Error to get pointrecord: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { GetPointRecordByIdController };
