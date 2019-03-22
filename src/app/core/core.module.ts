import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Store } from './services';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    Store,
  ],
})

export class CoreModule {
}
