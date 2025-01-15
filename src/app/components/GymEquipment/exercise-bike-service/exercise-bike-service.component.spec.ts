import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseBikeServiceComponent } from './exercise-bike-service.component';

describe('ExerciseBikeServiceComponent', () => {
  let component: ExerciseBikeServiceComponent;
  let fixture: ComponentFixture<ExerciseBikeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseBikeServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExerciseBikeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
