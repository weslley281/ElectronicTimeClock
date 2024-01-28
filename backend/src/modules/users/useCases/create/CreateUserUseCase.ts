import { AppError } from '../../../../middlewares/Erros';
import { User } from '../../models/user';
import { IUserRepository } from '../../repositories/IUserRepository';
import { hash } from 'bcrypt';

interface IRequest {
  id_user?: string;
  user: string;
  password: string;
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
  createdAt?: Date | string;
}

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({
    id_user,
    user,
    password,
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
    createdAt,
  }: IRequest): Promise<User> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) throw new Error('User already exists');

    try {
      return this.userRepository.create({
        id_user,
        user,
        password,
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
        updatedAt: updatedAt || new Date(),
        createdAt,
      });
    } catch (error) {
      throw new AppError(`Cannot create User: ${error}`);
    }
  }
}

export { CreateUserUseCase };
