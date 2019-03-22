import {
  Component,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { Unsubscribe } from 'shared/components';
import { SidenavService } from 'shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent extends Unsubscribe implements OnInit {
  title = '';
  isChild = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sidenavService: SidenavService,
  ) {
    super();
    this.getRouteData();
  }

  toggleSidenav() {
    this.sidenavService.toggle();
  }

  close() {
    if (this.sidenavService.opened) {
      this.sidenavService.close();
    }
  }

  getRouteData() {
    // this.router.events
    //   .pipe(
    //     takeUntil(this.unsubscribe),
    //     filter(e => e instanceof NavigationEnd),
    //     map(() => findFirstChild(this.activatedRoute)),
    //     mergeMap(route => route.data),
    //   )
    //   .subscribe((data: Route) => {
    //     this.title = data.title;
    //     this.isChild = data.children;
    //   });
  }

  ngOnInit() {
  }
}
