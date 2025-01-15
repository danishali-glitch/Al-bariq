import { Component, HostListener, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-washing-machine-service',
  standalone: true,
  imports: [FormsModule,FooterComponent],
  templateUrl: './washing-machine-service.component.html',
  styleUrl: './washing-machine-service.component.css'
})
export class WashingMachineServiceComponent {

  constructor(private renderer:Renderer2){}
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log(offset);
    const img1 = document.querySelector('.img');
    if (img1) {
      if (offset > 350) {


        this.renderer.addClass(img1, 'landingblur');

      } else {

        this.renderer.removeClass(img1, 'landingblur');
      }

    }
    if (img1) {
      if (offset > 533) {


        this.renderer.addClass(img1, 'scrollimg');
      } else {

        this.renderer.removeClass(img1, 'scrollimg');
      }

    }
  }
}
