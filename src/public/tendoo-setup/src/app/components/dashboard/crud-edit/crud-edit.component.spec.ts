import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEditComponent } from './crud-edit.component';

describe('CrudEditComponent', () => {
  let component: CrudEditComponent;
  let fixture: ComponentFixture<CrudEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
