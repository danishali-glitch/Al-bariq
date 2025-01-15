import { Component, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { OdometerComponent } from '../odometer/odometer.component';
import { FooterComponent } from '../footer/footer.component';
declare const Odometer: any;
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [OdometerComponent, FooterComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  constructor(private renderer: Renderer2,
    // private analytics:Analytics
    private el: ElementRef
  ) { }

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

  @Input() value: number = 0; // Value to update the odometer
  @Input() startValue: number = 0; // Initial odometer value

  private odometer: any; // Instance of Odometer


  ngOnInit(): void {
    this.createOdometer();
    this.observeOdometer();
  }

  // Initialize the Odometer
  private createOdometer(): void {
    const element = this.el.nativeElement.querySelector('.odometer');
    this.odometer = new Odometer({
      el: element,
      value: this.startValue,
    });
  }

  // Observe when the Odometer is visible
  private observeOdometer(): void {
    const element = this.el.nativeElement.querySelector('.odometer');
    let hasRun = false;

    const options = {
      threshold: [0, 0.9],
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasRun) {
          this.odometer.update(this.value); // Update the odometer with the final value
          hasRun = true;
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(element);
  }

}
