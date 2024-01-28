class Store {
  id_store?: string | undefined;
  store: string | undefined;
  phone: string | undefined;
  email: string | undefined;
  address_line1: string | undefined;
  address_line2: string | undefined;
  postalCode: string | undefined;
  neighborhood: string | undefined;
  city: string | undefined;
  state: string | undefined;
  country: string | undefined;
  active: 'active' | 'inactive' | undefined;
  updatedAt: Date | string | undefined;
  createdAt?: Date | string | undefined;
}

export { Store };
