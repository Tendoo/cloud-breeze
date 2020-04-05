import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuListComponent } from './sub-menu-list.component';

describe('SubMenuListComponent', () => {
  let component: SubMenuListComponent;
  let fixture: ComponentFixture<SubMenuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMenuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
