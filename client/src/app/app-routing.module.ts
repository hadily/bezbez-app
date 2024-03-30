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
  },
  {
    path: 'all-items',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },   
  {
    path: 'check',
    loadChildren: () => import('./pages/check/check.module').then( m => m.CheckPageModule)
  }, 
  { 
    path: 'all-items/item-details/:item_id', 
    loadChildren: () => import('./pages/item-details/item-details.module').then(m => m.ItemDetailsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'likes',
    loadChildren: () => import('./pages/likes/likes.module').then( m => m.LikesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, 
      { preloadingStrategy: PreloadAllModules }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
