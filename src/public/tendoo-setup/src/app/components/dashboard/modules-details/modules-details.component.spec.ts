import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesDetailsComponent } from './modules-details.component';

describe('ModulesDetailsComponent', () => {
  let component: ModulesDetailsComponent;
  let fixture: ComponentFixture<ModulesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
