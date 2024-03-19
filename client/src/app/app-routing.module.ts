import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home/p1',
    loadChildren: () => import('./pages/home-p1/home-p1.module').then( m => m.HomeP1PageModule)
  },
  {
    path: 'home/p2',
    loadChildren: () => import('./pages/home-p2/home-p2.module').then( m => m.HomeP2PageModule)
  },
  {
    path: 'home/p3',
    loadChildren: () => import('./pages/home-p3/home-p3.module').then( m => m.HomeP3PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
