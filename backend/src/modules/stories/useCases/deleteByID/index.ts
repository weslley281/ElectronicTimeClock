import { StoreRepository } from '../../repositories/implementations/storeRepository';
import { DeleteStoreByIdController } from './DeleteStoreByIdController';
import { DeleteStoreByIdUseCase } from './DeleteStoreUseByIdCase';

const storeRepository = StoreRepository.getInstance();
const deleteStoreByIdUseCase = new DeleteStoreByIdUseCase(storeRepository);
const deleteStoreByIdController = new DeleteStoreByIdController(
  deleteStoreByIdUseCase
);

export { deleteStoreByIdController };
