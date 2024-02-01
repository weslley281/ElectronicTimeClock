import { PointRecord } from '@modules/pointRecord/models/pointRecord';
import { AppError } from '../../../../middlewares/Erros';
import { IPointRecordRepository } from '../../repositories/IPointRecordRepository';

interface IRequest {
  id_user: string;
  initialDate: Date | string;
  finalDate: Date | string;
}

class FindByDatePointRecordUseCase {
  constructor(private pointrecordRepository: IPointRecordRepository) {}

  async execute({id_user, initialDate, finalDate }: IRequest): Promise<PointRecord[]> {
    try {
      const pointrecord = await this.pointrecordRepository.findByDate(id_user, initialDate, finalDate);

      if (!pointrecord) throw new Error('PointRecord not exists');

      return pointrecord;
    } catch (error) {
      throw new AppError(`Cannot findbydate PointRecord: ${error}`);
    }
  }
}

export { FindByDatePointRecordUseCase };
