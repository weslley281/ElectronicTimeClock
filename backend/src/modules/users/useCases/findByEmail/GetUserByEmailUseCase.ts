import { AppError } from '../../../../middlewares/Erros';
import { User } from '../../models/user';
import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
  email: string;
}

class GetUserByEmailUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ email }: IRequest): Promise<User> {
    try {
      const user = await this.userRepository.findByEmail(email);

      if (!user) throw new Error('User not exists');

      return user;
    } catch (error) {
      throw new AppError(`Cannot get User: ${error}`);
    }
  }
}

export { GetUserByEmailUseCase };
