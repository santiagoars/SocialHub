import { Component } from '@angular/core';
import {Facebook, FacebookLoginResponse} from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private fb: Facebook) {

  }

  loginWithFB(){
    this.fb.login(['email', 'public_profile', 'user_friends'])
    .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
    .catch(e => console.log('Error logging into Facebook', e));
  }

}
