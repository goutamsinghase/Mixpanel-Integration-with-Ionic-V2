import { Component } from '@angular/core';
import { Mixpanel } from 'ionic-native'; // import Mixpanel as per OOPS  
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  logMixpanelEvent(event) {
    console.log('Mixpanel Track Button Clicked');
    Mixpanel.track('Mixpanel Integrated in Ionic 2');
  }

}
