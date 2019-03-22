import {
  inject,
  TestBed,
} from '@angular/core/testing';
import { SidenavService } from './sidenav.service';

describe('SidenavService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidenavService],
    });
  });

  it('should be created', inject([SidenavService], (service: SidenavService) => {
    expect(service).toBeTruthy();
  }));

  it('should toggle value', inject([SidenavService], (service: SidenavService) => {
    let currentValue;

    const subscription = service.change.subscribe((opened) => {
      currentValue = opened;
    });

    service.toggle();
    expect(currentValue).toBe(true);

    service.toggle();
    expect(currentValue).toBe(false);

    subscription.unsubscribe();
  }));

  it('should open and close', inject([SidenavService], (service: SidenavService) => {
    let currentValue;

    const subscription = service.change.subscribe((opened) => {
      currentValue = opened;
    });

    service.open();
    expect(currentValue).toBe(true);

    service.close();
    expect(currentValue).toBe(false);

    subscription.unsubscribe();
  }));
});
