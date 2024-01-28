import { AppError } from '../../../../middlewares/Erros';
import { Request, Response } from 'express';
import { GetStoreByIdUseCase } from './GetStoreByIdUseCase';
import { z } from 'zod';

class GetStoreByIdController {
  constructor(private getStoreByIdUseCase: GetStoreByIdUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getStoreBodySchema = z.object({ id_store: z.string() });

    try {
      const { id_store } = getStoreBodySchema.parse(request.params);

      const stores = await this.getStoreByIdUseCase.execute({ id_store });

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

export { GetStoreByIdController };
