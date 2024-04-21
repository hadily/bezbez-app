import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProductShop1PageRoutingModule } from './add-product-shop1-routing.module';

import { AddProductShop1Page } from './add-product-shop1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProductShop1PageRoutingModule
  ],
  declarations: [AddProductShop1Page]
})
export class AddProductShop1PageModule {}
