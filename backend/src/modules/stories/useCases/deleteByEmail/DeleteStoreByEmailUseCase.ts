import { AppError } from '../../../../middlewares/Erros';
import { IStoreRepository } from '../../repositories/IStoreRepository';

interface IRequest {
  email: string;
}

class DeleteStoreByEmailUseCase {
  constructor(private storeRepository: IStoreRepository) {}

  async execute({ email }: IRequest): Promise<void> {
    try {
      const store = await this.storeRepository.deleteByEmail(email);

      return store;
    } catch (error) {
      throw new AppError(`Cannot delete Store: ${error}`);
    }
  }
}

export { DeleteStoreByEmailUseCase };
