import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  open(compeny: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private renderer: Renderer2,
    // private analytics:Analytics
  ) { }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log(offset);
    const img1 = document.querySelector('.img1');
    const img2 = document.querySelector('.img2');
    const card2a = document.querySelector('.card2a');
    const card2b = document.querySelector('.card2b');
    const card2c = document.querySelector('.card2c');
    const card2d = document.querySelector('.card2d');
    const card2e = document.querySelector('.card2e');
    const card2f = document.querySelector('.card2f');
    const landing = document.querySelector('.landing');
    if (landing) {
      if (offset > 400) {


        this.renderer.addClass(landing, 'landingblur');

      } else {

        this.renderer.removeClass(landing, 'landingblur');
      }

    }
    if (img1) {
      if (offset > 533) {


        this.renderer.addClass(img1, 'scrollimg');
      } else {

        this.renderer.removeClass(img1, 'scrollimg');
      }

    }
    if (img2) {
      if (offset > 1224) {


        this.renderer.addClass(img2, 'slideInimg');
        this.renderer.removeClass(img2, 'slideOutimg');
      } else {
        this.renderer.addClass(img2, 'slideOutimg');
        this.renderer.removeClass(img2, 'slideInimg');
      }

    }
    if (card2a) {
      if (offset > 2100) {


        this.renderer.addClass(card2a, 'slideInimg');
        this.renderer.removeClass(card2a, 'slideOutimg');
      } else {
        this.renderer.addClass(card2a, 'slideOutimg');
        this.renderer.removeClass(card2a, 'slideInimg');
      }

    }
    if (card2b) {
      if (offset > 2100) {


        this.renderer.addClass(card2b, 'slideInimg1');
        this.renderer.removeClass(card2b, 'slideOutimg1');
      } else {
        this.renderer.addClass(card2b, 'slideOutimg1');
        this.renderer.removeClass(card2b, 'slideInimg1');
      }

    }
    if (card2c) {
      if (offset > 2500) {


        this.renderer.addClass(card2c, 'slideInimg');
        this.renderer.removeClass(card2c, 'slideOutimg');
      } else {
        this.renderer.addClass(card2c, 'slideOutimg');
        this.renderer.removeClass(card2c, 'slideInimg');
      }

    }
    if (card2d) {
      if (offset > 2500) {


        this.renderer.addClass(card2d, 'slideInimg1');
        this.renderer.removeClass(card2d, 'slideOutimg1');
      } else {
        this.renderer.addClass(card2d, 'slideOutimg1');
        this.renderer.removeClass(card2d, 'slideInimg1');
      }

    }
    if (card2e) {
      if (offset > 2900) {


        this.renderer.addClass(card2e, 'slideInimg');
        this.renderer.removeClass(card2e, 'slideOutimg');
      } else {
        this.renderer.addClass(card2e, 'slideOutimg');
        this.renderer.removeClass(card2e, 'slideInimg');
      }

    }
    if (card2f) {
      if (offset > 2900) {


        this.renderer.addClass(card2f, 'slideInimg1');
        this.renderer.removeClass(card2f, 'slideOutimg1');
      } else {
        this.renderer.addClass(card2f, 'slideOutimg1');
        this.renderer.removeClass(card2f, 'slideInimg1');
      }

    }



  }

}

