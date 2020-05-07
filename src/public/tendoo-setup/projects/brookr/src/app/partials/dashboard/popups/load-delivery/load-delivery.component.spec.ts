import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDeliveryComponent } from './load-delivery.component';

describe('LoadDeliveryComponent', () => {
  let component: LoadDeliveryComponent;
  let fixture: ComponentFixture<LoadDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
