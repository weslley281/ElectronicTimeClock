import { AppError } from '../../../../middlewares/Erros';
import { User } from '../../models/user';
import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
  id_user: string;
}

class GetUserByIdUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ id_user }: IRequest): Promise<User> {
    try {
      const user = await this.userRepository.findById(id_user);

      if (!user) throw new Error('User not exists');

      return user;
    } catch (error) {
      throw new AppError(`Cannot get User: ${error}`);
    }
  }
}

export { GetUserByIdUseCase };
