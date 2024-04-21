import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupShopPageRoutingModule } from './signup-shop-routing.module';

import { SignupShopPage } from './signup-shop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupShopPageRoutingModule
  ],
  declarations: [SignupShopPage]
})
export class SignupShopPageModule {}
