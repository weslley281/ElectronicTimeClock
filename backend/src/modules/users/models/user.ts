class User {
  id_user?: string | undefined;
  user: string | undefined;
  password: string | undefined;
  birthday: Date | string | undefined;
  phone: string | undefined;
  email: string | undefined;
  address_line1: string | undefined;
  address_line2: string | undefined;
  postalCode: string | undefined;
  neighborhood: string | undefined;
  city: string | undefined;
  state: string | undefined;
  country: string | undefined;
  level: 'admin' | 'manager' | 'employee' | undefined;
  active: 'active' | 'inactive' | undefined;
  id_store: string | undefined;
  updatedAt: Date | string | undefined;
  createdAt?: Date | string | undefined;
}

export { User };
