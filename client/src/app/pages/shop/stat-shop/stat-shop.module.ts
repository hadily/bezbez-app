import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatShopPageRoutingModule } from './stat-shop-routing.module';

import { StatShopPage } from './stat-shop.page';
import { ShopNavBarComponent } from 'src/app/components/shop-nav-bar/shop-nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatShopPageRoutingModule
  ],
  declarations: [StatShopPage]
})
export class StatShopPageModule {}
