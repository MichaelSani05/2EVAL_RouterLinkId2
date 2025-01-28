import { Component, HostListener, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HouseService } from '../../services/house.service';
import { BookingComponent } from '../../booking/booking.component';
import { HousesComponent } from "../../components/houses/houses.component";

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

  constructor(private houseService : HouseService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.productId = parseInt(params.get('id')!);
      if (this.productId) {
        this.house = this.houseService.getHouseById(this.productId);
        this.houses = this.houseService.filterHousesByCategory(this.house.category);
        this.houses = this.houses.filter((house) => house.id !== this.house.id);
      }
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
}
