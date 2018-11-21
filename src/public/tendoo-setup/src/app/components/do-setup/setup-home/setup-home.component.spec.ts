import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupHomeComponent } from './setup-home.component';

describe('SetupHomeComponent', () => {
  let component: SetupHomeComponent;
  let fixture: ComponentFixture<SetupHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
