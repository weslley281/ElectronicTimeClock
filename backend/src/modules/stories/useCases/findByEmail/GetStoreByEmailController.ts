import { AppError } from '../../../../middlewares/Erros';
import { Request, Response } from 'express';
import { GetStoreByEmailUseCase } from './GetStoreByEmailUseCase';
import { z } from 'zod';

class GetStoreByEmailController {
  constructor(private getStoreByEmailUseCase: GetStoreByEmailUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getStoreBodySchema = z.object({ email: z.string() });

    try {
      const { email } = getStoreBodySchema.parse(request.params);

      const stores = await this.getStoreByEmailUseCase.execute({ email });

      return response.status(200).json(stores);
    } catch (error: any) {
      console.error(`Error to get store: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { GetStoreByEmailController };
