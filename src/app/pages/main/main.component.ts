import { Component } from '@angular/core';
import { HousesComponent } from '../../components/houses/houses.component';
import { HouseService } from '../../services/house.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HousesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  houses : any[] = [];
  constructor(private houseService: HouseService){}

  ngOnInit(): void {
    this.houses = this.houseService.getHouses();
  }

  changeCategory(category : string){
    if (category == '') {
      this.houses = this.houseService.getHouses();
    } else{
      this.houses = this.houseService.filterHousesByCategory(category);
    }
  }

}
