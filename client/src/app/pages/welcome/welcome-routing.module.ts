import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomePage } from './welcome.page';
import { ItemComponent } from 'src/app/components/item/item.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(
    routes,
    
    )],
  exports: [RouterModule],
})
export class WelcomePageRoutingModule {}
