import { PointRecordRepository } from '@modules/pointRecord/repositories/implementations/pointRecordRepository';
import { FindPointRecordByTodayController } from './FindPointRecordByTodayController';
import { FindPointRecordByTodayUseCase } from './FindPointRecordByTodayUseCase';

const pointRecordRepository = PointRecordRepository.getInstance();
const findPointRecordByTodayUseCase = new FindPointRecordByTodayUseCase(pointRecordRepository);
const findPointRecordByTodayController = new FindPointRecordByTodayController(findPointRecordByTodayUseCase);

export { findPointRecordByTodayController };
