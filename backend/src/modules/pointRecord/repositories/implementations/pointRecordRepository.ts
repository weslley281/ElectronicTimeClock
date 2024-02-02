import { PointRecord } from '@modules/pointRecord/models/pointRecord';
import { pointRecordModel } from '../../../../database/models/pointRecordModel';
import { AppError } from '../../../../middlewares/Erros';
import { ICreatePointRecordDTO } from '../../DTO/ICreatePointRecordDTO';
import { IPointRecordRepository } from '../IPointRecordRepository';
import { Op } from 'sequelize';

class PointRecordRepository implements IPointRecordRepository {
  private static instance: PointRecordRepository;

  public static getInstance(): PointRecordRepository {
    if (!PointRecordRepository.instance) {
      PointRecordRepository.instance = new PointRecordRepository();
    }

    return PointRecordRepository.instance;
  }

  async create({
    id_pointRecord,
    id_user,
    checkIn,
    checkInLunch,
    checkOutLunch,
    checkOut,
    updatedAt,
    createdAt,
  }: ICreatePointRecordDTO): Promise<PointRecord> {
    const obj: any = await pointRecordModel.create({
      id_pointRecord,
      id_user,
      checkIn,
      checkInLunch,
      checkOutLunch,
      checkOut,
      updatedAt,
      createdAt,
    });

    return obj.toJSON() as PointRecord;
  }

  async update({
    id_pointRecord,
    id_user,
    checkIn,
    checkInLunch,
    checkOutLunch,
    checkOut,
    updatedAt,
  }: ICreatePointRecordDTO): Promise<PointRecord> {
    const [rowsAffected] = await pointRecordModel.update(
      {
        id_pointRecord,
        id_user,
        checkIn,
        checkInLunch,
        checkOutLunch,
        checkOut,
        updatedAt,
      },
      {
        where: { id_pointRecord: id_pointRecord },
      }
    );

    if (rowsAffected === 0) {
      throw new AppError('Point record not found.', 404);
    }

    const updatedPointRecord = await pointRecordModel.findOne({
      where: { id_pointRecord: id_pointRecord },
    });

    return updatedPointRecord?.toJSON() as PointRecord;
  }

  async findById(id_pointRecord: string): Promise<PointRecord> {
    const obj: any = await pointRecordModel.findOne({
      where: { id_pointRecord: id_pointRecord },
    });

    return obj;
  }

  async findByDate(
    id_user: string,
    initialDate: Date | string,
    finalDate: Date | string
  ): Promise<PointRecord[]> {
    const pointRecords: any = await pointRecordModel.findAll({
      where: {
        id_user,
        checkIn: {
          [Op.between]: [initialDate, finalDate],
        },
      },
    });

    return pointRecords;
  }

  async findByToday(id_user: string, today: Date): Promise<PointRecord> {
    const startDate = new Date(today);
    startDate.setHours(0, 0, 0, 0); // Define a hora inicial como 00:00:00
  
    const endDate = new Date(today);
    endDate.setHours(23, 59, 59, 999); // Define a hora final como 23:59:59.999
  
    const pointRecords: any = await pointRecordModel.findOne({
      where: {
        id_user,
        checkIn: {
          [Op.between]: [startDate, endDate],
        },
      },
    });
  
    return pointRecords;
  }
  

  async findByTodayLunch(id_user: string, today: string): Promise<Boolean> {
    const pointRecord: any = await pointRecordModel.findOne({
      where: {
        id_user,
        checkIn: {
          [Op.between]: [today, today],
        },
      },
    });

    if (pointRecord.checkInLunch !== null) {
      return true;
    }

    return false;
  }

  async deleteById(id_pointRecord: string): Promise<void> {
    const rowsAffected = await pointRecordModel.destroy({
      where: { id_pointRecord },
    });

    if (rowsAffected === 0) {
      throw new AppError('Point record not found.', 404);
    }
  }
}

export { PointRecordRepository };
