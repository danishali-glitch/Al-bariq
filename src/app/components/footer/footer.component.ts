import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
constructor(
    private router: Router
  ) { }

  open(router: string) {

    if (router === '/about-us') {
      this.router.navigateByUrl(router);
    } else if (router === '/Washing-Machine-Service') {
      this.router.navigateByUrl(router);
    } else if (router === '/Cooking-Range-Service') {
      this.router.navigateByUrl(router);
    } else if (router === '/Washer-Dryer-Service') {
      this.router.navigateByUrl(router);
    } else if (router === '/Fridge-Service') {
      this.router.navigateByUrl(router);
    } else if (router === '/Dishwasher-Service') {
      this.router.navigateByUrl(router);
    } else if (router === '/Trademill-Service') {
      this.router.navigateByUrl(router);
    } else if (router === '/Exercise-Bike-Service') {
      this.router.navigateByUrl(router);
    } else if (router === '/Elliptical-Service') {
      this.router.navigateByUrl(router);
    } else if (router === '/contact-us') {
      this.router.navigateByUrl(router);
    } else {
      this.router.navigateByUrl('/#');
    }




  }

}
