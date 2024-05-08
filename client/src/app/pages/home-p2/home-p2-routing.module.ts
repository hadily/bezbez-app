import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeP2Page } from './home-p2.page';

const routes: Routes = [
  {
    path: '',
    component: HomeP2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeP2PageRoutingModule {}
