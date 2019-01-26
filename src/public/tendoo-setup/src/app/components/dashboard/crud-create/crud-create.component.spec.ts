import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCreateComponent } from './crud-create.component';

describe('CrudCreateComponent', () => {
  let component: CrudCreateComponent;
  let fixture: ComponentFixture<CrudCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
