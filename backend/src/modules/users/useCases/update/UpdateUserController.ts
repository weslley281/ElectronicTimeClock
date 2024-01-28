import { AppError } from '../../../../middlewares/Erros';
import { UpdateUserUseCase } from './UpdateUserUseCase';
import { Request, Response } from 'express';
import { z } from 'zod';

class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const updateUserBodySchema = z.object({
      id_user: z.string(),
      user: z.string(),
      birthday: z.string(),
      address_line1: z.string(),
      address_line2: z.string(),
      postalCode: z.string(),
      neighborhood: z.string(),
      city: z.string(),
      state: z.string(),
      country: z.string(),
      level: z.enum(['admin', 'manager', 'employee']),
      phone: z.string(),
      email: z.string(),
      active: z.enum(['active', 'inactive']),
      id_store: z.string(),
    });

    const today = new Date();

    try {
      const {
        id_user,
        user,
        birthday,
        phone,
        email,
        address_line1,
        address_line2,
        postalCode,
        neighborhood,
        city,
        state,
        country,
        level,
        active,
        id_store,
      } = updateUserBodySchema.parse(request.body);

      const obj = await this.updateUserUseCase.execute({
        id_user,
        user,
        birthday,
        phone,
        email,
        address_line1,
        address_line2,
        postalCode,
        neighborhood,
        city,
        state,
        country,
        level,
        active,
        id_store,
        updatedAt: today,
      });

      return response.status(200).json(obj);
    } catch (error: any) {
      console.error(`Erro ao alterar user: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { UpdateUserController };
