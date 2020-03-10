import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';
import {NativePageTransitions} from '@ionic-native/native-page-transitions/ngx';
import {SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Instagram } from '@ionic-native/instagram/ngx';
import {SuperTabsModule} from '@ionic-super-tabs/angular';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SuperTabsModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    Instagram,
    Camera,
    File,
    SocialSharing,
    NativePageTransitions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
