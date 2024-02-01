import { MatchPasswordPointRecord } from 'middlewares/matchPasswordPointRecord';
import { PointRecordRepository } from '../../repositories/implementations/pointRecordRepository';
import { CreatePointRecordController } from './CreatePointRecordController';
import { CreatePointRecordUseCase } from './CreatePointRecordUseCase';
import { UserRepository } from '@modules/users/repositories/implementations/userRepository';
import { GetUserByEmailUseCase } from '@modules/users/useCases/findByEmail/GetUserByEmailUseCase';

const pointrecordRepository = PointRecordRepository.getInstance();
const userRepository = UserRepository.getInstance();

const createPointRecordUseCase = new CreatePointRecordUseCase(
  pointrecordRepository
);
const matchPasswordPointRecord = new MatchPasswordPointRecord(userRepository);
const getUserByEmailUseCase = new GetUserByEmailUseCase(userRepository);

const createPointRecordController = new CreatePointRecordController(
  createPointRecordUseCase,
  matchPasswordPointRecord,
  getUserByEmailUseCase
);

export { createPointRecordController };
