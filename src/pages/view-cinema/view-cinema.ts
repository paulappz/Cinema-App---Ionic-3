import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListingsProvider } from '../../providers/listings/listings';

@IonicPage()
@Component({
  selector: 'page-view-cinema',
  templateUrl: 'view-cinema.html',
})
export class ViewCinemaPage {
listdata;
lists;
  constructor(public navCtrl: NavController, public navParams: NavParams, public listingsService: ListingsProvider) {
    this.listdata = navParams.get('listdata');
    this.listingsService.getCinemaShowing(this.listdata.cinema_id).subscribe((response :any) =>{
      console.log(response);
      this.lists = response;
      /* this.performReverseGeocoding(); */

          })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewCinemaPage');
  }

}
