import { AppError } from '../../../../middlewares/Erros';
import { User } from '../../models/user';
import { IUserRepository } from '../../repositories/IUserRepository';


interface IRequest {
  id_store: string;
}

class ListUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({id_store}: IRequest): Promise<User[]> {
    try {
      const users = await this.userRepository.list(id_store);

      if (!users) throw new Error('User not exists');

      return users;
    } catch (error) {
      throw new AppError(`Cannot get User: ${error}`);
    }
  }
}

export { ListUserUseCase };
