import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgeServiceComponent } from './fridge-service.component';

describe('FridgeServiceComponent', () => {
  let component: FridgeServiceComponent;
  let fixture: ComponentFixture<FridgeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FridgeServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FridgeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
