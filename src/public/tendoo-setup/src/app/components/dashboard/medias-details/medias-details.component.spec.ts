import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediasDetailsComponent } from './medias-details.component';

describe('MediasDetailsComponent', () => {
  let component: MediasDetailsComponent;
  let fixture: ComponentFixture<MediasDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediasDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
