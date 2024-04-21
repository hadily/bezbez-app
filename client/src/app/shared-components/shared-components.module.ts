import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopNavBarComponent } from '../components/shop-nav-bar/shop-nav-bar.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ShopNavBarComponent],
  imports: [

    CommonModule,
    IonicModule 
  ],  exports: [
    ShopNavBarComponent
  ]
})
export class SharedComponentsModule { }
