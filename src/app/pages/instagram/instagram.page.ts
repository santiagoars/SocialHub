import { Component, OnInit, Input } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Instagram } from '@ionic-native/instagram/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.page.html',
  styleUrls: ['./instagram.page.scss'],
})
export class InstagramPage {

  message: string;
  display: any;

  constructor(        private camera: Camera,
                      public actionSheetController: ActionSheetController,
                      private ig: Instagram,
                      private toastController: ToastController) { }

  publishToInstagram(){
    this.ig.share(this.display, this.message)
   .then(() => console.log('Shared!'))
   .catch((error: any) => {
     this.errorToast("Please upload an image first!")
   });
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
    }
    , (err) => {
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
