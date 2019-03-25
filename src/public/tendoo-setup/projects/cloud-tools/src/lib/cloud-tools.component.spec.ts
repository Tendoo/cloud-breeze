import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudToolsComponent } from './cloud-tools.component';

describe('CloudToolsComponent', () => {
  let component: CloudToolsComponent;
  let fixture: ComponentFixture<CloudToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
