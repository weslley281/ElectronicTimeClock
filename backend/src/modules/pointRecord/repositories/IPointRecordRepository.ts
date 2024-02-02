import { ICreatePointRecordDTO } from '../DTO/ICreatePointRecordDTO';
import { PointRecord } from '../models/pointRecord';

interface IPointRecordRepository {
  create({
    id_pointRecord,
    id_user,
    checkIn,
    checkInLunch,
    checkOutLunch,
    checkOut,
    updatedAt,
    createdAt,
  }: ICreatePointRecordDTO): Promise<PointRecord>;
  update({
    id_pointRecord,
    id_user,
    checkIn,
    checkInLunch,
    checkOutLunch,
    checkOut,
    updatedAt,
  }: ICreatePointRecordDTO): Promise<PointRecord>;
  findById(id_pointRecord: string): Promise<PointRecord>;
  findByDate(
    id_user: string,
    initialDate: Date | string,
    finalDate: Date | string
  ): Promise<PointRecord[]>;
  findByToday(id_user: string, today: Date | string): Promise<PointRecord>;
  deleteById(id_pointRecord: string): Promise<void>;
}

export { IPointRecordRepository };
