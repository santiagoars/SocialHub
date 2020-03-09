import { Component, OnInit, Input } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import {File} from '@ionic-native/file/ngx';
import {SocialSharing} from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.page.html',
  styleUrls: ['./instagram.page.scss'],
})
export class InstagramPage {

  message: string;
  image: any;
  display: any;

  constructor(private socialSharing: SocialSharing,
                      private camera: Camera,
                      public actionSheetController: ActionSheetController,
                      private file: File) { }

  publishToInstagram(){
    this.socialSharing.shareViaInstagram(this.message, this.image).then(() => {

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
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
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
