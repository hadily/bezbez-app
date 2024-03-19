import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeP2PageRoutingModule } from './home-p2-routing.module';

import { HomeP2Page } from './home-p2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeP2PageRoutingModule
  ],
  declarations: [HomeP2Page]
})
export class HomeP2PageModule {}
