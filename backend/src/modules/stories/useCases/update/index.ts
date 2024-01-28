import { StoreRepository } from '../../repositories/implementations/storeRepository';
import { UpdateStoreController } from './UpdateStoreController';
import { UpdateStoreUseCase } from './UpdateStoreUseCase';

const storeRepository = StoreRepository.getInstance();
const updateStoreUseCase = new UpdateStoreUseCase(storeRepository);
const updateStoreController = new UpdateStoreController(updateStoreUseCase);

export { updateStoreController };
