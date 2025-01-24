import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HouseService } from '../../services/house.service';
import { BookingComponent } from '../../booking/booking.component';

@Component({
  selector: 'app-house',
  standalone: true,
  imports: [BookingComponent],
  templateUrl: './house.component.html',
  styleUrl: './house.component.css'
})
export class HouseComponent {
  private route = inject(ActivatedRoute);
  productId!: number;
  house! : any[10]

  constructor(private houseService : HouseService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.productId = parseInt(params.get('id')!);
      if (this.productId) {
        this.house = this.houseService.getHouseById(this.productId);
      }
    });
  }

}
