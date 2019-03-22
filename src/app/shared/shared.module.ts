import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from 'material';
import { SidenavComponent } from 'shared/components';
import {
  SidenavService,
  Store,
} from 'shared/services';
import {
  FooterComponent,
  HeaderComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  providers: [
    SidenavService,
    Store,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MaterialModule,
    SidenavComponent,
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
  ],
  entryComponents: [],
})
export class SharedModule {
}
