import { Component } from '@angular/core';
import {Facebook, FacebookLoginResponse} from '@ionic-native/facebook/ngx';
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
              private fb: Facebook,
              private router: Router,
              private nativePageTransitions: NativePageTransitions,
              public navCtrl: NavController) {

  }

  loginWithFB(){
    this.fb.login(['email', 'public_profile', 'user_friends'])
    .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
    .then(data => {
      this.router.navigate(["/main"]);
      this.slidePage();
    })
    .catch(e => console.log('Error logging into Facebook', e));
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
