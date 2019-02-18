import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAppsComponent } from './profile-apps.component';

describe('ProfileAppsComponent', () => {
  let component: ProfileAppsComponent;
  let fixture: ComponentFixture<ProfileAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
