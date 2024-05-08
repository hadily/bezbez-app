import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LikesPageRoutingModule } from './likes-routing.module';

import { LikesPage } from './likes.page';
import { LikedItemsComponent } from 'src/app/components/liked-items/liked-items.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LikesPageRoutingModule
  ],
  declarations: [
    LikesPage,
    LikedItemsComponent
  ]
})
export class LikesPageModule {}
