import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediasUploadComponent } from './medias-upload.component';

describe('MediasUploadComponent', () => {
  let component: MediasUploadComponent;
  let fixture: ComponentFixture<MediasUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediasUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediasUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
