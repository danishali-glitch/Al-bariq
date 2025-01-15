import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EllipticalServiceComponent } from './elliptical-service.component';

describe('EllipticalServiceComponent', () => {
  let component: EllipticalServiceComponent;
  let fixture: ComponentFixture<EllipticalServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EllipticalServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EllipticalServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
