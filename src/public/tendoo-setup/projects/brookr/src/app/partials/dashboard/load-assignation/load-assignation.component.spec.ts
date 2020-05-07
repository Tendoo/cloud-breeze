import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadAssignationComponent } from './load-assignation.component';

describe('LoadAssignationComponent', () => {
  let component: LoadAssignationComponent;
  let fixture: ComponentFixture<LoadAssignationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadAssignationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadAssignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
