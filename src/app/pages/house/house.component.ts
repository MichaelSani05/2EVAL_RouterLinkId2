import { Component, HostListener, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HouseService } from '../../services/house.service';
import { BookingComponent } from '../../booking/booking.component';
import { HousesComponent } from "../../components/houses/houses.component";
import { BookingDatesService } from '../../services/booking-dates.service';

@Component({
  selector: 'app-house',
  standalone: true,
  imports: [BookingComponent, HousesComponent],
  templateUrl: './house.component.html',
  styleUrl: './house.component.css'
})
export class HouseComponent {
  private route = inject(ActivatedRoute);
  productId!: number;
  house! : any[10]
  houses! : any[]
  totalNights: number = 0
  totalPrice = 0

  constructor(private houseService : HouseService, private bookingService : BookingDatesService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.productId = parseInt(params.get('id')!);
      if (this.productId) {
        this.house = this.houseService.getHouseById(this.productId);
        this.houses = this.houseService.filterHousesByCategory(this.house.category);
        this.houses = this.houses.filter((house) => house.id !== this.house.id);
        
      }
    });

    this.bookingService.startDate$.subscribe((date) => {
      this.totalPrice = this.calculatePricePerNight();
      this.totalNights = this.bookingService.calculateTotalNights();
    });

    this.bookingService.endDate$.subscribe((date) => {
      this.totalNights = this.bookingService.calculateTotalNights();
      this.totalPrice = this.calculatePricePerNight();
    });

  }

  isSticky: boolean = true;

  ngAfterViewInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.checkScroll();
  }

  checkScroll(): void {
    const houseSection = document.querySelector('.house-section');
    const houseContent = document.querySelector('.house-content');
    const housePrice = document.querySelector('.house-price');

    if (houseSection && houseContent && housePrice) {
      const sectionBottom = houseSection.getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight;

      if (sectionBottom <= viewportHeight) {
        this.isSticky = false;
        housePrice.classList.remove('sticky');
      } else {
        this.isSticky = true;
        housePrice.classList.add('sticky');
      }
    }
  }

  calculatePricePerNight(): number{
    const pricePerNight = this.house.pricePerNight;
    const nights = this.totalNights;
    const price = pricePerNight * nights;

    return price;
  }
}
