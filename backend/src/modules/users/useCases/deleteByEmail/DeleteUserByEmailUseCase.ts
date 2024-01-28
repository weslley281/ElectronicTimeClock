import { AppError } from '../../../../middlewares/Erros';
import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
  email: string;
}

class DeleteUserByEmailUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ email }: IRequest): Promise<void> {
    try {
      const user = await this.userRepository.deleteByEmail(email);

      return user;
    } catch (error) {
      throw new AppError(`Cannot delete User: ${error}`);
    }
  }
}

export { DeleteUserByEmailUseCase };
