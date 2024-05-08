import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeP1PageRoutingModule } from './home-p1-routing.module';

import { HomeP1Page } from './home-p1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeP1PageRoutingModule
  ],
  declarations: [HomeP1Page]
})
export class HomeP1PageModule {}
