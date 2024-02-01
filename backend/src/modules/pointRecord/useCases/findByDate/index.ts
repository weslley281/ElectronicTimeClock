import { PointRecordRepository } from "@modules/pointRecord/repositories/implementations/pointRecordRepository";
import { FindByDatePointRecordController } from "./findByDateController";
import { FindByDatePointRecordUseCase } from "./findByDateUseCase";


const pointRecordRepository= PointRecordRepository.getInstance();
const findByDatePointRecordUseCase = new FindByDatePointRecordUseCase(pointRecordRepository);
const findByDatePointRecordController = new FindByDatePointRecordController(findByDatePointRecordUseCase);

export { findByDatePointRecordController };
