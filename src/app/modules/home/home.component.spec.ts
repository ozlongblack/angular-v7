import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';

import { AuthenticationService } from 'core/services/authentication/authentication.service';
import { SiteService } from 'core/services/site/site.service';
import { MaterialModule } from 'material';
import { SharedModule } from 'shared';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MaterialModule,
        RouterTestingModule,
        SharedModule,
      ],
      declarations: [HomeComponent],
      providers: [
        SiteService,
        {
          provide: AuthenticationService, useValue: {
            userHasScopes: () => {
              return true;
            },
            userProfile: new BehaviorSubject({
              appMetadata: {
                authorization: { roles: ['Vendor Admin'] },
              },
              userId: 'userId',
            }),
          },
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
