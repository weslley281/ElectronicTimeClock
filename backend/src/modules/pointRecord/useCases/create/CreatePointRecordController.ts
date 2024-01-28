import { AppError } from '../../../../middlewares/Erros';
import { CreatePointRecordUseCase } from './CreatePointRecordUseCase';
import { Request, Response } from 'express';
import { z } from 'zod';
import { randomUUID } from 'node:crypto';

class CreatePointRecordController {
  constructor(private createPointRecordUseCase: CreatePointRecordUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const createUserBodySchema = z.object({
      id_user: z.string(),
      now: z.date(),
    });

    const id_pointRecord = randomUUID();
    const today = new Date();

    try {
      const { id_user, now } = createUserBodySchema.parse(request.body);

      const obj = await this.createPointRecordUseCase.execute({
        id_user,
        id_pointRecord,
        checkIn: now,
        checkInLunch: null,
        checkOutLunch: null,
        checkOut: null,
        updatedAt: today,
        createdAt: today,
      });

      return response.status(201).json(obj);
    } catch (error: any) {
      console.error(`Erro ao cadastrar user: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { CreatePointRecordController };
