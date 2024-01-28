interface ICreatePointRecordDTO {
  id_pointRecord?: string;
  id_user: string;
  checkIn: Date | string;
  checkInLunch?: Date | string | null;
  checkOutLunch?: Date | string | null;
  checkOut?: Date | string | null;
  updatedAt: Date | string;
  createdAt?: Date | string;
}

export { ICreatePointRecordDTO };
