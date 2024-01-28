import { AppError } from '../../../../middlewares/Erros';
import { Store } from '../../models/store';
import { IStoreRepository } from '../../repositories/IStoreRepository';

interface IRequest {
  id_store: string;
}

class GetStoreByIdUseCase {
  constructor(private storeRepository: IStoreRepository) {}

  async execute({ id_store }: IRequest): Promise<Store> {
    try {
      const store = await this.storeRepository.findById(id_store);

      if (!store) throw new Error('Store not exists');

      return store;
    } catch (error) {
      throw new AppError(`Cannot get Store: ${error}`);
    }
  }
}

export { GetStoreByIdUseCase };
