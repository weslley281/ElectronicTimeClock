import { AppError } from '../../../../middlewares/Erros';
import { Store } from '../../models/store';
import { IStoreRepository } from '../../repositories/IStoreRepository';
import { hash } from 'bcrypt';

interface IRequest {
  id_store?: string;
  store: string;
  phone: string;
  email: string;
  address_line1: string;
  address_line2: string;
  postalCode: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  active: 'active' | 'inactive';
  updatedAt?: Date | string;
  createdAt: Date | string;
}

class CreateStoreUseCase {
  constructor(private storeRepository: IStoreRepository) {}

  async execute({
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
  }: IRequest): Promise<Store> {
    const storeAlreadyExists = await this.storeRepository.findByEmail(email);

    if (storeAlreadyExists) throw new Error('Store already exists');

    try {
      return this.storeRepository.create({
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
        updatedAt: updatedAt || new Date(),
        createdAt,
      });
    } catch (error) {
      throw new AppError(`Cannot create Store: ${error}`);
    }
  }
}

export { CreateStoreUseCase };
