import { UserRepository } from '../../repositories/implementations/pointRecordRepository';
import { CreateUserController } from './CreatePointRecordController';
import { CreateUserUseCase } from './CreatePointRecordUseCase';

const userRepository = UserRepository.getInstance();
const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
