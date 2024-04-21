import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProductShop1Page } from './add-product-shop1.page';

const routes: Routes = [
  {
    path: '',
    component: AddProductShop1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProductShop1PageRoutingModule {}
