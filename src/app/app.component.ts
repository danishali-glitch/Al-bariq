import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'alrafahweb';
  platform: any
  isMobile: boolean = false
  ngOnInit(): void {


    // console.log(this.analytics.app);

    console.log(navigator.platform);
    this.platform = this.detectPlatform();
    console.log(this.platform);
    const edu = document.querySelector('.edu')
    if (this.platform == 'mobile') {
      console.log('Mobile...');
      this.isMobile = true
    } else{
      this.isMobile = false
    }

  }
  detectPlatform(): string {
    const userAgent = navigator.userAgent.toLowerCase();

    if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)) {
      return 'mobile';
    } else {
      return 'desktop';
    }
  }

  constructor(
    private router: Router,
    private renderer: Renderer2
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
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }



  }
}
