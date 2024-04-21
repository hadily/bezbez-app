import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchBezbezesPageRoutingModule } from './search-bezbezes-routing.module';

import { SearchBezbezesPage } from './search-bezbezes.page';
import { SearchedBezbezesComponent } from 'src/app/components/searched-bezbezes/searched-bezbezes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchBezbezesPageRoutingModule
  ],
  declarations: [
    SearchBezbezesPage,
    SearchedBezbezesComponent
  ]
})
export class SearchBezbezesPageModule {}
