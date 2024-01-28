import { AppError } from '../../../../middlewares/Erros';
import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
  id_user: string;
}

class DeleteUserByIdUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ id_user }: IRequest): Promise<void> {
    try {
      const user = await this.userRepository.deleteByID(id_user);

      return user;
    } catch (error) {
      throw new AppError(`Cannot delete User: ${error}`);
    }
  }
}

export { DeleteUserByIdUseCase };
