import { IPointRecordRepository } from '@modules/pointRecord/repositories/IPointRecordRepository';
import { AppError } from '../../../../middlewares/Erros';
import { PointRecord } from '../../models/pointRecord';

import { hash } from 'bcrypt';

interface IRequest {
  id_pointRecord?: string;
  id_user: string | undefined;
  checkIn: Date | string;
  checkInLunch?: Date | string | null;
  checkOutLunch?: Date | string | null;
  checkOut?: Date | string | null;
  updatedAt: Date | string;
  createdAt?: Date | string;
}

class CreatePointRecordUseCase {
  constructor(private pointRecordRepository: IPointRecordRepository) {}

  async execute({
    id_pointRecord,
    id_user,
    checkIn,
    checkInLunch,
    checkOutLunch,
    checkOut,
    updatedAt,
    createdAt,
  }: IRequest): Promise<PointRecord> {
    try {
      return this.pointRecordRepository.create({
        id_pointRecord,
        id_user,
        checkIn,
        checkInLunch,
        checkOutLunch,
        checkOut,
        updatedAt: updatedAt || new Date(),
        createdAt,
      });
    } catch (error) {
      throw new AppError(`Cannot create User: ${error}`);
    }
  }
}

export { CreatePointRecordUseCase };
