import { StoreRepository } from '../../repositories/implementations/storeRepository';
import { ListStoreController } from './ListStoreController';
import { ListStoreUseCase } from './ListStoreUseCase';

const storeRepository = StoreRepository.getInstance();
const listStoreUseCase = new ListStoreUseCase(storeRepository);
const listStoreController = new ListStoreController(listStoreUseCase);

export { listStoreController };
