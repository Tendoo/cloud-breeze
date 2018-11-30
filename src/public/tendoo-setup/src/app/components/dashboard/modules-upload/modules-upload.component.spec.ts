import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesUploadComponent } from './modules-upload.component';

describe('ModulesUploadComponent', () => {
  let component: ModulesUploadComponent;
  let fixture: ComponentFixture<ModulesUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
