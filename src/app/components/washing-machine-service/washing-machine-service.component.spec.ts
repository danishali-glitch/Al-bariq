import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingMachineServiceComponent } from './washing-machine-service.component';

describe('WashingMachineServiceComponent', () => {
  let component: WashingMachineServiceComponent;
  let fixture: ComponentFixture<WashingMachineServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WashingMachineServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WashingMachineServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
