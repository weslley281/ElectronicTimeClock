interface ICreateUserDTO {
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
  updatedAt: Date | string;
  createdAt?: Date | string;
}

export { ICreateUserDTO };
