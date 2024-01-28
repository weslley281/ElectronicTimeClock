import { AppError } from '../../../../middlewares/Erros';
import { Store } from '../../models/store';
import { IStoreRepository } from '../../repositories/IStoreRepository';
import { hash } from 'bcrypt';

interface IRequest {
  id_store: string,
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
  updatedAt: Date;
}

class UpdateStoreUseCase {
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
  }: IRequest): Promise<Store> {
    try {
      return this.storeRepository.update({
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
      });
    } catch (error) {
      throw new AppError(`Cannot update Store: ${error}`);
    }
  }
}

export { UpdateStoreUseCase };
