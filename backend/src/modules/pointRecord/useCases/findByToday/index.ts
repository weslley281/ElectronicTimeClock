import { UserRepository } from '../../repositories/implementations/userRepository';
import { GetUserByIdController } from './GetUserByIdController';
import { GetUserByIdUseCase } from './GetUserByIdUseCase';

const userRepository = UserRepository.getInstance();
const getUserByIdUseCase = new GetUserByIdUseCase(userRepository);
const getUserByIdController = new GetUserByIdController(getUserByIdUseCase);

export { getUserByIdController };
