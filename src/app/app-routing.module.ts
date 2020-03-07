import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'facebook',
    loadChildren: () => import('./pages/facebook/facebook.module').then( m => m.FacebookPageModule)
  },
  {
    path: 'instagram',
    loadChildren: () => import('./pages/instagram/instagram.module').then( m => m.InstagramPageModule)
  },
  {
    path: 'twitter',
    loadChildren: () => import('./pages/twitter/twitter.module').then( m => m.TwitterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
