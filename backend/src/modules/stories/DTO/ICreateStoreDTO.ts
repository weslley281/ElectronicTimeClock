interface ICreateStoreDTO {
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
  updatedAt: Date | string;
  createdAt?: Date | string;
}

export { ICreateStoreDTO };
