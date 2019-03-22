import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from 'material';
import { SidenavComponent } from 'shared/components';
import { SidenavService } from 'shared/services';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  providers: [
    SidenavService,
  ],
  exports: [
    MaterialModule,
    SidenavComponent,
  ],
  declarations: [
    SidenavComponent,
  ],
  entryComponents: [],
})
export class SharedModule {
}
