import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TwitterPageRoutingModule } from './twitter-routing.module';

import { TwitterPage } from './twitter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TwitterPageRoutingModule
  ],
  declarations: [TwitterPage]
})
export class TwitterPageModule {}
