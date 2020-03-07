import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'facebook',
        loadChildren: () => import('../facebook/facebook.module').then( m => m.FacebookPageModule)
      },
      {
        path: 'instagram',
        loadChildren: () => import('../instagram/instagram.module').then( m => m.InstagramPageModule)
      },
      {
        path: 'twitter',
        loadChildren: () => import('../twitter/twitter.module').then( m => m.TwitterPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/facebook',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
