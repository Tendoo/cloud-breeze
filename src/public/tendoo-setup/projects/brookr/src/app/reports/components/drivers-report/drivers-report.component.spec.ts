import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversReportComponent } from './drivers-report.component';

describe('DriversReportComponent', () => {
  let component: DriversReportComponent;
  let fixture: ComponentFixture<DriversReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriversReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
