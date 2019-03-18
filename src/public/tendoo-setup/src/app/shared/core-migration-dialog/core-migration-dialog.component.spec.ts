import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreMigrationDialogComponent } from './core-migration-dialog.component';

describe('CoreMigrationDialogComponent', () => {
  let component: CoreMigrationDialogComponent;
  let fixture: ComponentFixture<CoreMigrationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreMigrationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreMigrationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
