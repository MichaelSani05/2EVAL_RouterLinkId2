import { Component } from '@angular/core';
import { HousesComponent } from '../../components/houses/houses.component';
import { HouseService } from '../../services/house.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HousesComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  houses : any[] = [];
  category : string = ''
  constructor(private houseService: HouseService){}

  ngOnInit(): void {
    this.houses = this.houseService.getHouses();
  }

  changeCategory(category : string){
    if (category == '') {
      this.houses = this.houseService.getHouses();
      this.category = category;
    } else{
      this.houses = this.houseService.filterHousesByCategory(category);
      this.category = category;
    }
  }

}
