import { AppError } from '../../../../middlewares/Erros';
import { CreatePointRecordUseCase } from './CreatePointRecordUseCase';
import { Request, Response } from 'express';
import { z } from 'zod';
import { randomUUID } from 'node:crypto';
import { MatchPasswordPointRecord } from 'middlewares/matchPasswordPointRecord';

class CreatePointRecordController {
  constructor(private createPointRecordUseCase: CreatePointRecordUseCase, private matchPasswordPointRecord: MatchPasswordPointRecord) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const createUserBodySchema = z.object({
      email: z.string(),
      password: z.string(),
    });

    const id_pointRecord = randomUUID();
    const today = new Date();

    try {
      const { email, password } = createUserBodySchema.parse(request.body);

      const compare = await this.matchPasswordPointRecord.execute({email, password});

      if (compare) {
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
      
    }else{
      
    }
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
