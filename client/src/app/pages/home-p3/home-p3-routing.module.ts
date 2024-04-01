import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeP3Page } from './home-p3.page';

const routes: Routes = [
  {
    path: '',
    component: HomeP3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeP3PageRoutingModule {}
