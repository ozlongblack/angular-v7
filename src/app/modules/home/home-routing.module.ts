import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { paths } from 'shared/constants';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: paths.root,
    component: HomeComponent,
    children: [
      // {
      //   path: paths.signin,
      //   loadChildren: '../signin/signin.module#SignInModule',
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}
