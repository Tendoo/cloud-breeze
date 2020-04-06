import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceManageComponent } from './maintenance-manage.component';

describe('MaintenanceManageComponent', () => {
  let component: MaintenanceManageComponent;
  let fixture: ComponentFixture<MaintenanceManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
