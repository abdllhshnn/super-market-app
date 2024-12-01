import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MarketComponent} from './component/market/market.component';

const routes: Routes = [
  // {
  //   path: 'market',
  //   component: MarketComponent,
  // },
  // {
  //   path:'',
  //   redirectTo: 'market',
  //   pathMatch: 'full',
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
