import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'shared';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule {
}
