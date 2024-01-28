import { AppError } from '../../../../middlewares/Erros';
import { CreateStoreUseCase } from './CreateStoreUseCase';
import { Request, Response } from 'express';
import { z } from 'zod';
import { randomUUID } from 'node:crypto';

class CreateStoreController {
  constructor(private createStoreUseCase: CreateStoreUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const createStoreBodySchema = z.object({
      store: z.string(),
      address_line1: z.string(),
      address_line2: z.string(),
      postalCode: z.string(),
      neighborhood: z.string(),
      city: z.string(),
      state: z.string(),
      country: z.string(),
      phone: z.string(),
      email: z.string(),
    });

    const id_store = randomUUID();
    const today = new Date();
    const active = 'active';

    try {
      const {
        store,
        phone,
        email,
        address_line1,
        address_line2,
        postalCode,
        neighborhood,
        city,
        state,
        country,
      } = createStoreBodySchema.parse(request.body);

      console.log(request.body);

      const obj = await this.createStoreUseCase.execute({
        id_store,
        store,
        phone,
        email,
        address_line1,
        address_line2,
        postalCode,
        neighborhood,
        city,
        state,
        country,
        active,
        updatedAt: today,
        createdAt: today,
      });

      return response.status(201).json(obj);
    } catch (error: any) {
      console.error(`Erro ao cadastrar store: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { CreateStoreController };
