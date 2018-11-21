import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoSetupComponent } from './do-setup.component';

describe('DoSetupComponent', () => {
  let component: DoSetupComponent;
  let fixture: ComponentFixture<DoSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
