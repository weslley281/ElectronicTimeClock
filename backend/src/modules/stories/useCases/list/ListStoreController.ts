import { AppError } from '../../../../middlewares/Erros';
import { ListStoreUseCase } from './ListStoreUseCase';
import { Request, Response } from 'express';

class ListStoreController {
  constructor(private listStoreUseCase: ListStoreUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const stores = await this.listStoreUseCase.execute();

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

export { ListStoreController };
