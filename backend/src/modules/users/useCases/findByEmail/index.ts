import { UserRepository } from '../../repositories/implementations/userRepository';
import { GetUserByEmailController } from './GetUserByEmailController';
import { GetUserByEmailUseCase } from './GetUserByEmailUseCase';

const userRepository = UserRepository.getInstance();
const getUserByEmailUseCase = new GetUserByEmailUseCase(userRepository);
const getUserByEmailController = new GetUserByEmailController(
  getUserByEmailUseCase
);

export { getUserByEmailController };
