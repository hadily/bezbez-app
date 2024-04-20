import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeP3PageRoutingModule } from './home-p3-routing.module';

import { HomeP3Page } from './home-p3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeP3PageRoutingModule
  ],
  declarations: [HomeP3Page]
})
export class HomeP3PageModule {}
