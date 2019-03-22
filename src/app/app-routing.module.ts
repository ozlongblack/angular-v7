import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { paths } from 'shared/constants';

const routes: Routes = [
  {
    path: paths.root,
    loadChildren: './modules/home/home.module#HomeModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
