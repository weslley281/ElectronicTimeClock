import { StoreRepository } from '../../repositories/implementations/storeRepository';
import { GetStoreByEmailController } from './GetStoreByEmailController';
import { GetStoreByEmailUseCase } from './GetStoreByEmailUseCase';

const storeRepository = StoreRepository.getInstance();
const getStoreByEmailUseCase = new GetStoreByEmailUseCase(storeRepository);
const getStoreByEmailController = new GetStoreByEmailController(
  getStoreByEmailUseCase
);

export { getStoreByEmailController };
