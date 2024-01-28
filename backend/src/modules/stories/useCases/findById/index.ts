import { StoreRepository } from '../../repositories/implementations/storeRepository';
import { GetStoreByIdController } from './GetStoreByIdController';
import { GetStoreByIdUseCase } from './GetStoreByIdUseCase';

const storeRepository = StoreRepository.getInstance();
const getStoreByIdUseCase = new GetStoreByIdUseCase(storeRepository);
const getStoreByIdController = new GetStoreByIdController(getStoreByIdUseCase);

export { getStoreByIdController };
