import { StoreRepository } from '../../repositories/implementations/storeRepository';
import { CreateStoreController } from './CreateStoreController';
import { CreateStoreUseCase } from './CreateStoreUseCase';

const storeRepository = StoreRepository.getInstance();
const createStoreUseCase = new CreateStoreUseCase(storeRepository);
const createStoreController = new CreateStoreController(createStoreUseCase);

export { createStoreController };
