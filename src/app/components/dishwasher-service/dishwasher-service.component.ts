import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-dishwasher-service',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './dishwasher-service.component.html',
  styleUrl: './dishwasher-service.component.css'
})
export class DishwasherServiceComponent {

}
