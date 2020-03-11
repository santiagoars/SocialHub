import { Component, OnInit, Input } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import {SocialSharing} from '@ionic-native/social-sharing/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.page.html',
  styleUrls: ['./twitter.page.scss'],
})
export class TwitterPage implements OnInit {

  message: string;
  display: any;

  constructor(private socialSharing: SocialSharing,
              private camera: Camera,
              public actionSheetController: ActionSheetController,
              private toastController: ToastController
              ) { }

  ngOnInit() {
  }

  shareOnTwitter(){
    this.socialSharing.shareViaTwitter(this.message, this.display, null).then(() => {

    })
    .catch(e => {
      this.errorToast("Please download Twitter first and login")
    })
  }

  async errorToast(error) {
    const toast = await this.toastController.create({
      message: error,
      duration: 2000
    });
    toast.present();
  }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      sourceType: sourceType
    }
    this.camera.getPicture(options).then((imageData) => {
      this.display = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      this.errorToast("Could not fetch image")
    });
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        icon: 'images-outline',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        icon: 'camera-outline',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  deleteImage(){
    this.display = null;
  }


}
