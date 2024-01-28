import { StoreRepository } from '../../repositories/implementations/storeRepository';
import { DeleteStoreByEmailController } from './DeleteStoreByEmailController';
import { DeleteStoreByEmailUseCase } from './DeleteStoreByEmailUseCase';

const storeRepository = StoreRepository.getInstance();
const deleteStoreByEmailUseCase = new DeleteStoreByEmailUseCase(
  storeRepository
);
const deleteStoreByEmailController = new DeleteStoreByEmailController(
  deleteStoreByEmailUseCase
);

export { deleteStoreByEmailController };
