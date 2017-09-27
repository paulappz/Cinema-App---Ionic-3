import { Component } from '@angular/core';

import {IonicPage, NavController, NavParams} from 'ionic-angular';
// import {SuperTabsController} from "ionic2-super-tabs";
import { SuperTabsController } from '../../ionic2-super-tabs/src';

@IonicPage({
  segment: 'home/:type'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  page1: any = 'MoviePage';
  page2: any = 'CinemaPage';
  page3: any = 'Page1Page';

  showIcons: boolean = true;
  showTitles: boolean = true;
  pageTitle: string = '9jaCinemas';

  rootNavCtrl: NavController;

  pageclass : string ;

  constructor(public navCtrl: NavController, private navParams: NavParams, private superTabsCtrl: SuperTabsController) {
    this.pageclass = 'SearchMoviePage';
    const type = navParams.get('type');
/*     switch (type) {
      case 'icons-only':
        this.showTitles = false;
        this.pageTitle += ' - Icons only';
        break;

      case 'titles-only':
        this.showIcons = false;
        this.pageTitle += ' - Titles only';
        break;
    } */
  }

  ngAfterViewInit() {
    // this.superTabsCtrl.increaseBadge('page1', 10);
    // this.superTabsCtrl.enableTabSwipe('page3', false);
    // this.superTabsCtrl.enableTabsSwipe(false);
  }

  onTabSelect(tab: { index: number; id: string; }) {
    if (tab.index == 1){
      this.pageclass = 'SearchCinemaPage';
    }
    if (tab.index == 0){
      this.pageclass = 'SearchMoviePage';
    }
    console.log(this.pageclass);
    console.log(`Selected tab: `, tab);
  }



  searchPage(page){
    console.log(page);
    this.navCtrl.push(page)
    }

}
