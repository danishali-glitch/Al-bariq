import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrademillServiceComponent } from './trademill-service.component';

describe('TrademillServiceComponent', () => {
  let component: TrademillServiceComponent;
  let fixture: ComponentFixture<TrademillServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrademillServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrademillServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
