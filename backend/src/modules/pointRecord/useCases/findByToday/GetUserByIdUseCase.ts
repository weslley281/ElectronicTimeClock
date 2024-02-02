import { IPointRecordRepository } from '@modules/pointRecord/repositories/IPointRecordRepository';
import { AppError } from '../../../../middlewares/Erros';
import { PointRecord } from '@modules/pointRecord/models/pointRecord';


interface IRequest {
  id_user: string;
  today: Date;
}

class FindPointRecordByTodayUseCase {
  constructor(private pointrecordRepository: IPointRecordRepository) {}

  async execute({ id_user, today }: IRequest): Promise<PointRecord> {
    try {
      const pointrecord = await this.pointrecordRepository.findByToday(id_user, today);

      if (!pointrecord) throw new Error('PointRecord not exists');

      return pointrecord;
    } catch (error) {
      throw new AppError(`Cannot get PointRecord: ${error}`);
    }
  }
}

export { FindPointRecordByTodayUseCase };
