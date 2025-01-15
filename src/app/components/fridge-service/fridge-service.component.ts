import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-fridge-service',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './fridge-service.component.html',
  styleUrl: './fridge-service.component.css'
})
export class FridgeServiceComponent {

}
