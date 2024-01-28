import { AppError } from '../../../../middlewares/Erros';
import { Request, Response } from 'express';
import { DeleteStoreByIdUseCase } from './DeleteStoreUseByIdCase';
import { z } from 'zod';

class DeleteStoreByIdController {
  constructor(private deleteStoreByIdUseCase: DeleteStoreByIdUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getStoreBodySchema = z.object({ id_store: z.string() });

    try {
      const { id_store } = getStoreBodySchema.parse(request.params);

      const stores = await this.deleteStoreByIdUseCase.execute({ id_store });

      return response.status(204).json(stores);
    } catch (error: any) {
      console.error(`Erro ao delete store: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { DeleteStoreByIdController };
