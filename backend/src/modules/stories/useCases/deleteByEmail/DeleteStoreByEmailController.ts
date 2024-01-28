import { AppError } from '../../../../middlewares/Erros';
import { Request, Response } from 'express';
import { DeleteStoreByEmailUseCase } from './DeleteStoreByEmailUseCase';
import { z } from 'zod';

class DeleteStoreByEmailController {
  constructor(private deleteStoreByEmailUseCase: DeleteStoreByEmailUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getStoreBodySchema = z.object({ email: z.string() });

    try {
      const { email } = getStoreBodySchema.parse(request.params);

      const stores = await this.deleteStoreByEmailUseCase.execute({ email });

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

export { DeleteStoreByEmailController };
