import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeShopPageRoutingModule } from './home-shop-routing.module';

import { HomeShopPage } from './home-shop.page';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeShopPageRoutingModule,
    SharedComponentsModule 
  ],
  declarations: [HomeShopPage]
})
export class HomeShopPageModule {}
