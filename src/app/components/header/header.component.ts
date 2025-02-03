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
  @ViewChild('headerFilters', { static: false }) headerFilters!: ElementRef;
  fechaCLicked : boolean = false
  startDate: Date | null = null;
  endDate: Date | null = null;
  showNav = false;
  isSmallScreen = false;

  constructor(private renderer: Renderer2, private bookingDatesService: BookingDatesService) {}

  ngOnInit(): void {
    this.bookingDatesService.startDate$.subscribe((date) => {
      this.startDate = date;
    });
    this.bookingDatesService.endDate$.subscribe((date) => {
      this.endDate = date;
    });
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
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

  ngAfterViewInit(): void {
    if (this.headerFilters) {
      console.log('Elemento headerFilters encontrado');
    } else {
      console.log('Elemento headerFilters NO encontrado');
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', () => this.checkScreenSize());
  }

  checkScreenSize(): void {
    this.isSmallScreen = window.innerWidth < 941;
    if (!this.isSmallScreen) {
      this.showNav = false;
    }
  }

  toggleNav(): void {
    this.showNav = true;
  
    const headerFilters = document.getElementById('header-filters');
    if (headerFilters) {
      this.renderer.setStyle(headerFilters, 'display', 'flex');
      console.log('Existe y se mostró');
    } else {
      console.log('No existe');
    }
  }
  
  closeNav(): void {
    this.showNav = false;
  
    const headerFilters = document.getElementById('header-filters');
    if (headerFilters) {
      this.renderer.setStyle(headerFilters, 'display', 'none');
      console.log('Existe y se ocultó');
    } else {
      console.log('No existe');
    }
  }
}
