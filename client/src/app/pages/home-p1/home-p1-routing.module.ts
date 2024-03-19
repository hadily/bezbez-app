import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeP1Page } from './home-p1.page';

const routes: Routes = [
  {
    path: '',
    component: HomeP1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeP1PageRoutingModule {}
