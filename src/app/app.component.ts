import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, Mixpanel } from 'ionic-native'; //import Mixpanel as per OOPS  
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      
      /**
      * Mixpanel Initialization
      **/
      var onSuccess = function (success) {
        console.log('Initiated', success);
      },
      onError = function (error) {
        console.log('Initialization Error', error);
      },
      mixpanelToken= 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // https://mixpanel.com/help/questions/articles/where-can-i-find-my-project-token

      Mixpanel.init(mixpanelToken)
              .then(onSuccess)
              .catch(onError);
      /** End **/
    });
  }
}
