import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from 'shared/services';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
})
export class SidenavComponent implements OnInit {
  constructor(
    public router: Router,
    private sidenavService: SidenavService,
  ) {
  }

  ngOnInit() {
  }

  close() {
    this.sidenavService.close();
  }
}
