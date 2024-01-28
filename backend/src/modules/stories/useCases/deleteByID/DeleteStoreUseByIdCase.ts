import { AppError } from '../../../../middlewares/Erros';
import { IStoreRepository } from '../../repositories/IStoreRepository';

interface IRequest {
  id_store: string;
}

class DeleteStoreByIdUseCase {
  constructor(private storeRepository: IStoreRepository) {}

  async execute({ id_store }: IRequest): Promise<void> {
    try {
      const store = await this.storeRepository.deleteByID(id_store);

      return store;
    } catch (error) {
      throw new AppError(`Cannot delete Store: ${error}`);
    }
  }
}

export { DeleteStoreByIdUseCase };
