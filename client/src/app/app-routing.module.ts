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
  {
    path: 'store',
    loadChildren: () => import('./pages/store/store.module').then( m => m.StorePageModule)
  },
  {
    path: 'search-articles',
    loadChildren: () => import('./pages/search-articles/search-articles.module').then( m => m.SearchArticlesPageModule)
  },
  {
    path: 'search-bezbezes',
    loadChildren: () => import('./pages/search-bezbezes/search-bezbezes.module').then( m => m.SearchBezbezesPageModule)
  },
  {
    path: 'payment-success',
    loadChildren: () => import('./pages/payment-success/payment-success.module').then( m => m.PaymentSuccessPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'payment-method',
    loadChildren: () => import('./pages/payment-method/payment-method.module').then( m => m.PaymentMethodPageModule)
  },
  {
    path: 'add-card',
    loadChildren: () => import('./pages/add-card/add-card.module').then( m => m.AddCardPageModule)
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
