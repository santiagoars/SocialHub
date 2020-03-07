import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstagramPageRoutingModule } from './instagram-routing.module';

import { InstagramPage } from './instagram.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstagramPageRoutingModule
  ],
  declarations: [InstagramPage]
})
export class InstagramPageModule {}
