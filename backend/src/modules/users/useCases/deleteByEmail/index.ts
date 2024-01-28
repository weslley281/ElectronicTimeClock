import { UserRepository } from '../../repositories/implementations/userRepository';
import { DeleteUserByEmailController } from './DeleteUserByEmailController';
import { DeleteUserByEmailUseCase } from './DeleteUserByEmailUseCase';

const userRepository = UserRepository.getInstance();
const deleteUserByEmailUseCase = new DeleteUserByEmailUseCase(
  userRepository
);
const deleteUserByEmailController = new DeleteUserByEmailController(
  deleteUserByEmailUseCase
);

export { deleteUserByEmailController };
