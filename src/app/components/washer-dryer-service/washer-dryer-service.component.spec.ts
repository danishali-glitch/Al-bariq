import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherDryerServiceComponent } from './washer-dryer-service.component';

describe('WasherDryerServiceComponent', () => {
  let component: WasherDryerServiceComponent;
  let fixture: ComponentFixture<WasherDryerServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WasherDryerServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WasherDryerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
