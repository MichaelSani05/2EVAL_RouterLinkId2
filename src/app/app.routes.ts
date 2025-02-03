import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { HouseComponent } from './pages/house/house.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path: "", component: MainComponent},
    {path: "alojamiento", component: MainComponent},
    {path: "house/:id", component: HouseComponent},
    {path: "Cabaña/:id", component: HouseComponent},
    {path: "Playa/:id", component: HouseComponent},
    {path: "Mansion/:id", component: HouseComponent},
    {path: "home", component: HomeComponent},
];
