import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { SidenavService } from 'shared/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  isChild: boolean;

  constructor(
    private sidenavService: SidenavService,
  ) {
  }

  click() {
    this.sidenavService.toggle();
  }

  ngOnInit() {
  }

}
