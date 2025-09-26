import { AbstractDocument } from '@app/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ReservationsRepository extends AbstractDocument {
  timestamp: Date;
  startDate: Date;
  endDate: Date;
  userId: string;
  placeId: string;
  invoiceId: string;
}
