import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
              private router: Router,
              private nativePageTransitions: NativePageTransitions,
              public navCtrl: NavController) {

  }

  goToApp(){
    this.router.navigate(["/tabs"]);
    this.slidePage();
  }

  slidePage(){
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
    }
    this.nativePageTransitions.slide(options);
    this.navCtrl.navigateRoot('tabs');
  }


}
