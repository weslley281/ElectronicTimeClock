import { AppError } from '../../../../middlewares/Erros';
import { Store } from '../../models/store';
import { IStoreRepository } from '../../repositories/IStoreRepository';

class ListStoreUseCase {
  constructor(private storeRepository: IStoreRepository) {}

  async execute(): Promise<Store[]> {
    try {
      const stores = await this.storeRepository.list();

      if (!stores) throw new Error('Store not exists');

      return stores;
    } catch (error) {
      throw new AppError(`Cannot get Store: ${error}`);
    }
  }
}

export { ListStoreUseCase };
