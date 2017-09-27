import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListingsProvider } from '../../providers/listings/listings';
import { Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult} from '@ionic-native/native-geocoder';

/**
 * Generated class for the CinemaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cinema',
  templateUrl: 'cinema.html',
})
export class CinemaPage {
  isAndroid: boolean = false;
  lists;

  place :any;
  longi;
  lati;
  street;
  rootNavCtrl: NavController;
  pageclass: string;
  constructor(public zone: NgZone,private nativeGeocoder: NativeGeocoder,private geolocation: Geolocation,public navCtrl: NavController, public navParams: NavParams,public platform: Platform, public listingsService : ListingsProvider) {
    this.pageclass = 'SearchCinemaPage';
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.isAndroid = platform.is('android');
    this.listingsService.getCinemas().subscribe((response :any) =>{
console.log(response);
this.lists = response;

/* let that = this;
this.lists.forEach(function(obj) {


    that.listingsService.getTimeDistance('Ebute Ipakodo Road, Ikorodu, Lagos, Nigeria',obj.formated_address ).subscribe((respon :any) =>{
      if (obj.time){
      obj.time = '';}
      obj.time = respon.rows[0].elements[0].duration.text;
      obj.distance = '';
 obj.distance = respon.rows[0].elements[0].distance.text;
      })
    })
    console.log(this.lists);
  })
this.getLocation();
 */
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CinemaPage');
  }


ViewShowing(data){
this.rootNavCtrl.push('ViewCinemaPage', {
      listdata: data
    });
}

/* getLocation(){
  this.geolocation.getCurrentPosition().then((resp) => {
    // resp.coords.latitude
    this.zone.run(() => {
    console.log(resp);
    console.log(resp.coords.latitude);
    console.log(resp.coords.longitude);
    this.lati =resp.coords.latitude;
    this.longi = resp.coords.longitude;
    })
    this.getLocationname(resp.coords.latitude,resp.coords.longitude);

    // resp.coords.longitude
   }).catch((error) => {
     console.log('Error getting location', error);
   });

  }

  getLocationname(lati, longi){
    this.nativeGeocoder.reverseGeocode(lati,longi)
    .then((result: any) => {
    console.log('The address is ' + result.street + ' in ' + result.countryCode)
    this.place = result;
    }).catch((error: any) => { this.place = error.message;});
  }

getTimeDistance(userlocation,){

} */


/* searchPage(){
  this.rootNavCtrl.push('SearchCinemaPage')
  } */


}


