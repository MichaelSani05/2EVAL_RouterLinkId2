import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingDatesService {
  private startDateSubject = new BehaviorSubject<Date | null>(null);
  private endDateSubject = new BehaviorSubject<Date | null>(null);

  public startDate$: Observable<Date | null> = this.startDateSubject.asObservable();
  public endDate$: Observable<Date | null> = this.endDateSubject.asObservable();

  constructor() {}

  setDates(startDate: Date | null, endDate: Date | null): void {
    this.startDateSubject.next(startDate);
    this.endDateSubject.next(endDate);
  }

  getStartDate(): Date | null {
    return this.startDateSubject.getValue();
  }

  getEndDate(): Date | null {
    return this.endDateSubject.getValue();
  }

  calculateTotalNights(): number {
    const startDate = this.getStartDate();
    const endDate = this.getEndDate();

    if (startDate && endDate) {
      if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        throw new Error('Las fechas proporcionadas no son válidas.');
      }

      const timeDiff = endDate.getTime() - startDate.getTime();

      const nights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

      return nights > 0 ? nights : 0;
    }

    return 0;
  }
}