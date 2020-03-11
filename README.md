# SocialHub
An IOS/Android application used to make Facebook and Instagram posts. 

# Pre-requisites
Ionic and Cordova are necessary to create builds for either IOS or Android. To install Ionic, we will use Node Package Manager (npm)
You can install npm with the following link: https://nodejs.org/en/download

Then use the following command

```bash
npm install -g cordova ionic
```

The app only works on mobile as it requires the native applications of Facebook, Instagram and Twitter. However, you can see the design of the app on the browser.

# Creating an IOS Build (Mac Only)
Using your terminal, go to the root directory where you installed SocialHub and type the following command

```bash
ionic cordova platform add ios
```

Once your build is succesful, you can go to the platforms folder, then choose the IOS folder and there you will see a file called SocialHub.xcworkspace
You can open that with Xcode and click the play button to simulate the application

# Creating an Android Build (Windows and Mac)
Using your terminal, go to the root directory where you installed SocialHub and type the following command. Be sure to have your ANDROID_SDK_ROOT environment variable set, otherwise the build will fail

```bash
ionic cordova platform add android
```
```bash
ionic cordova build android
```

Once your build is succesful, you can go to the platforms folder,  do \android\app\build\outputs\apk\debug and there you will find a file named app_debug.apk, which you can simulate on your phone or using Android Studio.

# Browser
You can take a look at the application using the following
```bash
ionic serve
```

