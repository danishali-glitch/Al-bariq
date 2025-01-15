import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishwasherServiceComponent } from './dishwasher-service.component';

describe('DishwasherServiceComponent', () => {
  let component: DishwasherServiceComponent;
  let fixture: ComponentFixture<DishwasherServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishwasherServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DishwasherServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
