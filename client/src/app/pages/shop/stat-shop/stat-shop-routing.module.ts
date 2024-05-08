import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatShopPage } from './stat-shop.page';

const routes: Routes = [
  {
    path: '',
    component: StatShopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatShopPageRoutingModule {}
