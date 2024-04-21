import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchArticlesPageRoutingModule } from './search-articles-routing.module';

import { SearchArticlesPage } from './search-articles.page';
import { SearchedArticlesComponent } from 'src/app/components/searched-articles/searched-articles.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchArticlesPageRoutingModule
  ],
  declarations: [
    SearchArticlesPage,
    SearchedArticlesComponent
  ]
})
export class SearchArticlesPageModule {}
