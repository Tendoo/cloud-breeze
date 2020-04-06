import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadsReportComponent } from './loads-report.component';

describe('LoadsReportComponent', () => {
  let component: LoadsReportComponent;
  let fixture: ComponentFixture<LoadsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
