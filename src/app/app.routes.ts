import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CookingRangeServiceComponent } from './components/cooking-range-service/cooking-range-service.component';
import { DishwasherServiceComponent } from './components/dishwasher-service/dishwasher-service.component';
import { FridgeServiceComponent } from './components/fridge-service/fridge-service.component';
import { EllipticalServiceComponent } from './components/GymEquipment/elliptical-service/elliptical-service.component';
import { ExerciseBikeServiceComponent } from './components/GymEquipment/exercise-bike-service/exercise-bike-service.component';
import { TrademillServiceComponent } from './components/GymEquipment/trademill-service/trademill-service.component';
import { OurLocationsComponent } from './components/our-locations/our-locations.component';
import { WasherDryerServiceComponent } from './components/washer-dryer-service/washer-dryer-service.component';
import { WashingMachineServiceComponent } from './components/washing-machine-service/washing-machine-service.component';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'Home'
    },
    {
        path: 'Home', component: HomeComponent, title: 'Al-Bariq : Home'
    },
    {
        path:'about-us', component:AboutUsComponent, title:'Al-Bariq : About-Us'
    },
    {
        path:'contact-us', component:ContactUsComponent, title:'Al-Bariq : Contact-Us'
    },
    {
        path:'Cooking-Range-Service', component:CookingRangeServiceComponent, title:'Al-Bariq : Cooking Range Service'
    },
    {
        path:'Dishwasher-Service', component:DishwasherServiceComponent, title:'Al-Bariq : Dishwasher-Service'
    },
    {
        path:'Fridge-Service', component:FridgeServiceComponent, title:'Al-Bariq : Fridge-Service'
    },
    {
        path:'Elliptical-Service', component:EllipticalServiceComponent, title:'Al-Bariq : Elliptical-Service'
    },
    {
        path:'Exercise-Bike-Service', component:ExerciseBikeServiceComponent, title:'Al-Bariq : Exercise-Bike-Service'
    },
    {
        path:'Trademill-Service', component:TrademillServiceComponent, title:'Al-Bariq : Trademill-Service'
    },
    {
        path:'Our-Location', component:OurLocationsComponent, title:'Al-Bariq : Our-Location'
    },
    {
        path:'Washer-Dryer-Service', component:WasherDryerServiceComponent, title:'Al-Bariq : Washer-Dryer-Service'
    },
    {
        path:'Washing-Machine-Service', component:WashingMachineServiceComponent, title:'Al-Bariq : Washing-Machine-Service'
    }
];
