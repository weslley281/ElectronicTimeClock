class PointRecord {
  id_pointRecord?: string | undefined;
  id_user: string | undefined;
  checkIn: Date | string | undefined;
  checkInLunch?: Date | string | undefined | null;
  checkOutLunch?: Date | string | undefined | null;
  checkOut?: Date | string | undefined | null;
  updatedAt: Date | string | undefined;
  createdAt?: Date | string | undefined;
}

export { PointRecord };
