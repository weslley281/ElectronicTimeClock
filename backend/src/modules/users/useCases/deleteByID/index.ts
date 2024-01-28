import { UserRepository } from '../../repositories/implementations/userRepository';
import { DeleteUserByIdController } from './DeleteUserByIdController';
import { DeleteUserByIdUseCase } from './DeleteUserUseByIdCase';

const userRepository = UserRepository.getInstance();
const deleteUserByIdUseCase = new DeleteUserByIdUseCase(userRepository);
const deleteUserByIdController = new DeleteUserByIdController(
  deleteUserByIdUseCase
);

export { deleteUserByIdController };
