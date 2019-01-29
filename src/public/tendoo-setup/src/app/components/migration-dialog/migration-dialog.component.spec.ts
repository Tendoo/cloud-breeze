import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationDialogComponent } from './migration-dialog.component';

describe('MigrationDialogComponent', () => {
  let component: MigrationDialogComponent;
  let fixture: ComponentFixture<MigrationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigrationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
