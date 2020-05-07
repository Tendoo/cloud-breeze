import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadStatusComponent } from './load-status.component';

describe('LoadStatusComponent', () => {
  let component: LoadStatusComponent;
  let fixture: ComponentFixture<LoadStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
