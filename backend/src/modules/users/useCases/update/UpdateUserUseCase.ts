import { AppError } from '../../../../middlewares/Erros';
import { User } from '../../models/user';
import { IUserRepository } from '../../repositories/IUserRepository';
import { hash } from 'bcrypt';

interface IRequest {
  id_user?: string;
  user: string;
  birthday: Date | string;
  phone: string;
  email: string;
  address_line1: string;
  address_line2: string;
  postalCode: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  level: 'admin' | 'manager' | 'employee';
  active: 'active' | 'inactive';
  id_store: string;
  updatedAt?: Date | string;
  created_at?: Date | string;
}

class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({
    id_user,
    user,
    birthday,
    phone,
    email,
    address_line1,
    address_line2,
    postalCode,
    neighborhood,
    city,
    state,
    country,
    level,
    active,
    id_store,
    updatedAt,
  }: IRequest): Promise<User> {
    try {
      return this.userRepository.update({
        id_user,
        user,
        birthday,
        phone,
        email,
        address_line1,
        address_line2,
        postalCode,
        neighborhood,
        city,
        state,
        country,
        level,
        active,
        id_store,
        updatedAt: updatedAt || new Date,
      });
    } catch (error) {
      throw new AppError(`Cannot update User: ${error}`);
    }
  }
}

export { UpdateUserUseCase };
