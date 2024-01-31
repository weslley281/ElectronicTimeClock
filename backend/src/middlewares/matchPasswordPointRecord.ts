import { compare } from 'bcrypt';
import { IUserRepository } from '../modules/users/repositories/IUserRepository';

interface IRequest{
    email: string;
    password: string;
}

export class MatchPasswordPointRecord{
    constructor(private userRepository: IUserRepository) {}
    
    async execute({email, password}: IRequest): Promise<Boolean>{
    const user = await this.userRepository.findByEmail(email);

    const passwordMatch = await compare(
        password,
        user.password ? user.password : ''
      );

      if (!passwordMatch) throw new Error('E-mail ou senha incorretos!');

      return true
    }
}