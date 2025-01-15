import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingRangeServiceComponent } from './cooking-range-service.component';

describe('CookingRangeServiceComponent', () => {
  let component: CookingRangeServiceComponent;
  let fixture: ComponentFixture<CookingRangeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookingRangeServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CookingRangeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
