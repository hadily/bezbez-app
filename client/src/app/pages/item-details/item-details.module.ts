import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ItemDetailsPage } from './item-details.page';
import { ItemDetailsPageRoutingModule } from './item-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemDetailsPageRoutingModule,
    RouterModule.forChild([
      {
        path: 'item-details/:item_id',
        component: ItemDetailsPage
      }
    ])
  ],
  declarations: [ItemDetailsPage]
})
export class ItemDetailsPageModule {}
