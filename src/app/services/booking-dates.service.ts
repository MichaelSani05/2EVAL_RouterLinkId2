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
}