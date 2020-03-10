import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage {

  loaded:   boolean = false;
  tabIndex: number  = 0;

  constructor(private nativePageTransitions: NativePageTransitions,
              public navCtrl: NavController) { }


  private getAnimationDirection(index:number):string {
    var currentIndex = this.tabIndex;

    this.tabIndex = index;

    switch (true){
      case (currentIndex < index):
        return('left');
      case (currentIndex > index):
        return('right');
    }
  }

  public transition(e:any):void {    
    let options: NativeTransitionOptions = {
     direction:this.getAnimationDirection(e.index),
     duration: 200,
     slowdownfactor: -1,
     slidePixels: 0,
     iosdelay: 20,
     androiddelay: 0,
     fixedPixelsTop: 0,
     fixedPixelsBottom: 48
    };

    if (!this.loaded) {
      this.loaded = true;
      return;
    }

    this.nativePageTransitions.slide(options);

  }

}
