import { Store } from '@modules/stories/models/store';
import { storeModel } from '../../../../database/models/storesModel';
import { AppError } from '../../../../middlewares/Erros';
import { ICreateStoreDTO } from '../../DTO/ICreateStoreDTO';
import { IStoreRepository } from '../IStoreRepository';
import { Op } from 'sequelize';

class StoreRepository implements IStoreRepository {
  private static instance: StoreRepository;

  public static getInstance(): StoreRepository {
    if (!StoreRepository.instance) {
      StoreRepository.instance = new StoreRepository();
    }

    return StoreRepository.instance;
  }

  async create({
    id_store,
    store,
    phone,
    email,
    address_line1,
    address_line2,
    postalCode,
    neighborhood,
    city,
    state,
    country,
    active,
    updatedAt,
    createdAt,
  }: ICreateStoreDTO): Promise<Store> {
    const obj: any = await storeModel.create({
      id_store,
      store,
      phone,
      email,
      address_line1,
      address_line2,
      postalCode,
      neighborhood,
      city,
      state,
      country,
      active,
      updatedAt,
      createdAt,
    });

    return obj.toJSON() as Store;
  }

  async update({
    id_store,
    store,
    phone,
    email,
    address_line1,
    address_line2,
    postalCode,
    neighborhood,
    city,
    state,
    country,
    active,
    updatedAt,
  }: ICreateStoreDTO): Promise<Store> {
    const [rowsAffected] = await storeModel.update(
      {
        store,
        phone,
        email,
        address_line1,
        address_line2,
        postalCode,
        neighborhood,
        city,
        state,
        country,
        active,
        updatedAt,
      },
      {
        where: { id_store: id_store },
      }
    );

    if (rowsAffected === 0) {
      throw new AppError('Store not found.', 404);
    }

    const updatedStore = await storeModel.findOne({
      where: { id_store: id_store },
    });

    return updatedStore?.toJSON() as Store;
  }

  async findById(id_store: string): Promise<Store> {
    const obj: any = await storeModel.findOne({
      where: { id_store: id_store },
    });

    return obj;
  }

  async findByEmail(email: string): Promise<Store> {
    const store: any = await storeModel.findOne({ where: { email } });
    return store;
  }

  async list(): Promise<Store[]> {
    const stores: any = await storeModel.findAll({});
    return stores;
  }

  async deleteByID(id_store: string): Promise<void> {
    const rowsAffected = await storeModel.destroy({
      where: { id_store },
    });

    if (rowsAffected === 0) {
      throw new AppError('Store not found.', 404);
    }
  }

  async deleteByEmail(id_store: string): Promise<void> {
    const rowsAffected = await storeModel.destroy({
      where: { id_store },
    });

    if (rowsAffected === 0) {
      throw new AppError('Store not found.', 404);
    }
  }

  async search(searchTerm: string): Promise<Store[]> {
    const stores = await storeModel.findAll({
      where: {
        [Op.or]: [
          { store: { [Op.iLike]: `%${searchTerm}%` } },
          { city: { [Op.iLike]: `%${searchTerm}%` } },
          { state: { [Op.iLike]: `%${searchTerm}%` } },
        ],
      },
    });

    return stores.map((store) => store.toJSON() as Store);
  }
}

export { StoreRepository };
