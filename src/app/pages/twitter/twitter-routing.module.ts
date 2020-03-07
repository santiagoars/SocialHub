import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwitterPage } from './twitter.page';

const routes: Routes = [
  {
    path: '',
    component: TwitterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwitterPageRoutingModule {}
