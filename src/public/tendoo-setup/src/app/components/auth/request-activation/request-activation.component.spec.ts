import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestActivationComponent } from './request-activation.component';

describe('RequestActivationComponent', () => {
  let component: RequestActivationComponent;
  let fixture: ComponentFixture<RequestActivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestActivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
