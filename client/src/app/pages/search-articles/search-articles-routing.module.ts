import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchArticlesPage } from './search-articles.page';

const routes: Routes = [
  {
    path: '',
    component: SearchArticlesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchArticlesPageRoutingModule {}
