import { AppError } from '../../../../middlewares/Erros';
import { UpdateStoreUseCase } from './UpdateStoreUseCase';
import { Request, Response } from 'express';
import { z } from 'zod';

class UpdateStoreController {
  constructor(private updateStoreUseCase: UpdateStoreUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const updateStoreBodySchema = z.object({
      id_store: z.string(),
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

    const today = new Date();
    const active = 'active';

    try {
      const {
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
      } = updateStoreBodySchema.parse(request.body);

      const paid_out = false;

      const obj = await this.updateStoreUseCase.execute({
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
      });

      return response.status(200).json(obj);
    } catch (error: any) {
      console.error(`Erro ao alterar store: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { UpdateStoreController };
