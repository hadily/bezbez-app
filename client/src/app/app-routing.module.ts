import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'forgetpassword',
    loadChildren: () => import('./pages/forgetpassword/forgetpassword.module').then( m => m.ForgetpasswordPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./pages/otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./pages/changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
