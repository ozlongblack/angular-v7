import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';

import { AuthenticationService } from 'core/services';
import { MaterialModule } from 'material';
import { SidenavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule,
      ],
      declarations: [SidenavComponent],
      providers: [
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
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
