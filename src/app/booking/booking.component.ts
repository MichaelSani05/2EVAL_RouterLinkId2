import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookingDatesService } from '../services/booking-dates.service'; // Importa el servicio

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [MatDatepickerModule, MatFormFieldModule, MatInputModule, FormsModule, CommonModule, MatNativeDateModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {
  startDate: Date | null = null;
  endDate: Date | null = null;
  pricePerNight = 100;

  constructor(private bookingDatesService: BookingDatesService) {}

  ngOnInit(): void {
    this.bookingDatesService.startDate$.subscribe((date) => {
      this.startDate = date;
      this.calculateTotals();
    });

    this.bookingDatesService.endDate$.subscribe((date) => {
      this.endDate = date;
      this.calculateTotals();
    });
  }

  saveDates(): void {
    this.bookingDatesService.setDates(this.startDate, this.endDate);
  }

  calculateTotals(): void {
    this.totalNights = this.calculateTotalNights();
    this.totalPrice = this.calculateTotalPrice();
  }

  calculateTotalNights(): number {
    if (this.startDate && this.endDate) {
      const timeDiff = this.endDate.getTime() - this.startDate.getTime();
      return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    }
    return 0;
  }

  calculateTotalPrice(): number {
    return this.totalNights * this.pricePerNight;
  }

  totalNights: number = 0;
  totalPrice: number = 0;
}