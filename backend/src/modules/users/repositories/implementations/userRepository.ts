import { User } from '@modules/users/models/user';
import { userModel } from '../../../../database/models/usersModel';
import { AppError } from '../../../../middlewares/Erros';
import { ICreateUserDTO } from '../../DTO/ICreateUserDTO';
import { IUserRepository } from '../IUserRepository';
import { Op } from 'sequelize';

class UserRepository implements IUserRepository {
  private static instance: UserRepository;

  public static getInstance(): UserRepository {
    if (!UserRepository.instance) {
      UserRepository.instance = new UserRepository();
    }

    return UserRepository.instance;
  }

  async create({
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
    createdAt,
  }: ICreateUserDTO): Promise<User> {
    const obj: any = await userModel.create({
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
      createdAt,
    });

    return obj.toJSON() as User;
  }

  async update({
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
  }: ICreateUserDTO): Promise<User> {
    const [rowsAffected] = await userModel.update(
      {
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
      },
      {
        where: { id_user: id_user },
      }
    );

    if (rowsAffected === 0) {
      throw new AppError('User not found.', 404);
    }

    const updatedUser = await userModel.findOne({
      where: { id_user: id_user },
    });

    return updatedUser?.toJSON() as User;
  }

  async findById(id_user: string): Promise<User> {
    const obj: any = await userModel.findOne({
      where: { id_user: id_user },
    });

    return obj;
  }

  async findByEmail(email: string): Promise<User> {
    const user: any = await userModel.findOne({ where: { email } });
    return user;
  }

  async list(id_store: string): Promise<User[]> {
    const user: any = await userModel.findAll({
      where: {
        id_store,
      },
    });
    return user;
  }

  async deleteByID(id_user: string): Promise<void> {
    const rowsAffected = await userModel.destroy({
      where: { id_user },
    });

    if (rowsAffected === 0) {
      throw new AppError('User not found.', 404);
    }
  }

  async deleteByEmail(id_user: string): Promise<void> {
    const rowsAffected = await userModel.destroy({
      where: { id_user },
    });

    if (rowsAffected === 0) {
      throw new AppError('User not found.', 404);
    }
  }

  async search(searchTerm: string): Promise<User[]> {
    const users = await userModel.findAll({
      where: {
        [Op.or]: [
          { user: { [Op.iLike]: `%${searchTerm}%` } },
          { city: { [Op.iLike]: `%${searchTerm}%` } },
          { state: { [Op.iLike]: `%${searchTerm}%` } },
        ],
      },
    });

    return users.map((user) => user.toJSON() as User);
  }
}

export { UserRepository };
