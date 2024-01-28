import { ICreateStoreDTO } from '../DTO/ICreateStoreDTO';
import { Store } from '../models/store';

interface IStoreRepository {
  create({
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
  }: ICreateStoreDTO): Promise<Store>;
  update({
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
  }: ICreateStoreDTO): Promise<Store>;
  findById(id_store: string): Promise<Store>;
  findByEmail(email: string): Promise<Store>;
  list(): Promise<Store[]>;
  deleteByID(id_store: string): Promise<void>;
  deleteByEmail(id_store: string): Promise<void>;
  search(searchTerm: string): Promise<Store[]>;
}

export { IStoreRepository };
