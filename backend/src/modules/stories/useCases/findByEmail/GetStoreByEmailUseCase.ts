import { AppError } from '../../../../middlewares/Erros';
import { Store } from '../../models/store';
import { IStoreRepository } from '../../repositories/IStoreRepository';

interface IRequest {
  email: string;
}

class GetStoreByEmailUseCase {
  constructor(private storeRepository: IStoreRepository) {}

  async execute({ email }: IRequest): Promise<Store> {
    try {
      const store = await this.storeRepository.findByEmail(email);

      if (!store) throw new Error('Store not exists');

      return store;
    } catch (error) {
      throw new AppError(`Cannot get Store: ${error}`);
    }
  }
}

export { GetStoreByEmailUseCase };
