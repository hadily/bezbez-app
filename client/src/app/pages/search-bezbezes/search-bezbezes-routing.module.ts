import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchBezbezesPage } from './search-bezbezes.page';

const routes: Routes = [
  {
    path: '',
    component: SearchBezbezesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchBezbezesPageRoutingModule {}
