import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookingDatesService {
  private startDate: Date | null = null;
  private endDate: Date | null = null;

  setDates(startDate: Date | null, endDate: Date | null): void {
    this.startDate = startDate;
    this.endDate = endDate;
  }

  getStartDate(): Date | null {
    return this.startDate;
  }

  getEndDate(): Date | null {
    return this.endDate;
  }
}