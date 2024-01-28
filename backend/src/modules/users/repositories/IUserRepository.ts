import { ICreateUserDTO } from '../DTO/ICreateUserDTO';
import { User } from '../models/user';

interface IUserRepository {
  create({
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
  }: ICreateUserDTO): Promise<User>;
  update({
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
  }: ICreateUserDTO): Promise<User>;
  findById(id_user: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  list(id_store: string): Promise<User[]>;
  deleteByID(id_user: string): Promise<void>;
  deleteByEmail(id_user: string): Promise<void>;
  search(searchTerm: string): Promise<User[]>;
}

export { IUserRepository };
