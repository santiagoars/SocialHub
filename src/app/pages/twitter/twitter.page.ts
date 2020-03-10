import { Component, OnInit, Input } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import {File} from '@ionic-native/file/ngx';
import {SocialSharing} from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.page.html',
  styleUrls: ['./twitter.page.scss'],
})
export class TwitterPage implements OnInit {

  message: string;
  image: any;
  display: any;

  constructor(private socialSharing: SocialSharing,
              private camera: Camera,
              public actionSheetController: ActionSheetController,
              private file: File) { }

  ngOnInit() {
  }

  shareOnTwitter(){
    this.socialSharing.shareViaTwitter(this.message, this.image, null).then(() => {

    })
  }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      sourceType: sourceType
    }
    this.camera.getPicture(options).then((imageData) => {
      this.image = imageData;
      this.display = (<any>window).Ionic.WebView.convertFileSrc(imageData);
    }, (err) => {
      // Handle error
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


}
