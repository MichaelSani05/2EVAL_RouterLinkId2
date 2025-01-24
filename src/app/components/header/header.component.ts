import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BookingComponent } from '../../booking/booking.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, BookingComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild('datePicker') datePicker!: ElementRef;
  fechaCLicked : boolean = false

  constructor(private renderer: Renderer2) {}

  changeStyle(): void {
    if (this.datePicker && this.fechaCLicked) {
      this.renderer.setStyle(this.datePicker.nativeElement, 'background-color', 'red');
      this.fechaCLicked = false;
    } else if (this.datePicker && !this.fechaCLicked) {
      this.renderer.setStyle(this.datePicker.nativeElement, 'background-color', 'blue');
      this.fechaCLicked = true;
    }
  }
}
