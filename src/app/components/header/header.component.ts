import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BookingComponent } from '../../booking/booking.component';
import { BookingDatesService } from '../../services/booking-dates.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, BookingComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild('datePicker') datePicker!: ElementRef;
  fechaCLicked : boolean = false
  startDate: Date | null = null;
  endDate: Date | null = null;

  constructor(private renderer: Renderer2, private bookingDatesService: BookingDatesService) {}

  ngOnInit(): void {
    this.bookingDatesService.startDate$.subscribe((date) => {
      this.startDate = date;
    });
    this.bookingDatesService.endDate$.subscribe((date) => {
      this.endDate = date;
    });
  }
  
  changeStyle(): void {
    if (this.datePicker && this.fechaCLicked) {
      this.renderer.setStyle(this.datePicker.nativeElement, 'display', 'none');
      this.fechaCLicked = false;
    } else if (this.datePicker && !this.fechaCLicked) {
      this.renderer.setStyle(this.datePicker.nativeElement, 'display', 'block');
      this.fechaCLicked = true;
    }
  }
}
