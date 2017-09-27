import {Component, ViewChild} from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  rootParams: any;

  menuItems: any[] = [
    {
      name: '9jaCinemas',
      page: 'HomePage',
      params: { type: 'all' }
    }
  ];

  constructor(platform: Platform, splashScreen: SplashScreen, statusBar: StatusBar) {
  /*    this.rootPage = 'FrontPage';
    setTimeout(() => {

     }, 10000); */
     this.rootPage = this.menuItems[0].page;
     this.rootParams = this.menuItems[0].params;
    platform.ready().then(() => {
      splashScreen.hide();
      statusBar.backgroundColorByHexString('#3949AB')
    });
  }

  openPage(page) {
    this.nav.setRoot(page.page, page.params);
  }
}
