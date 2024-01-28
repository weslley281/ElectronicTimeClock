import { AppError } from '../../../../middlewares/Erros';
import { CreateUserUseCase } from './CreateUserUseCase';
import { Request, Response } from 'express';
import { z } from 'zod';
import { randomUUID } from 'node:crypto';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const createUserBodySchema = z.object({
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

    const id_user = randomUUID();
    const today = new Date();

    try {
      const {
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
      } = createUserBodySchema.parse(request.body);

      const obj = await this.createUserUseCase.execute({
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

export { CreateUserController };
