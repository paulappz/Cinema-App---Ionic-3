import { Component, NgZone  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListingsProvider } from '../../providers/listings/listings';
import { Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult} from '@ionic-native/native-geocoder';


/**
 * Generated class for the MoviePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
})
export class MoviePage {
lists: any ;
isAndroid: boolean = false;
place :any;
longi;
lati;
street;
segment = 'today';
rootNavCtrl: NavController;
pageclass : string ;

public geocoded: boolean;
  constructor(public zone: NgZone,private nativeGeocoder: NativeGeocoder,private geolocation: Geolocation,public navCtrl: NavController,public platform: Platform, public navParams: NavParams,  public listingsService : ListingsProvider) {
    this.pageclass = 'SearchMoviePage';
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.isAndroid = platform.is('android');
    this.listingsService.getListings().subscribe((response :any) =>{
this.lists = response;
this.getLocation();
this.getdistance();
/* this.performReverseGeocoding(); */

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviePage');
  }

ViewMovie(list){
  console.log(list);
this.rootNavCtrl.push('ViewPage', {
      listdata: list
    });
}

getdistance(){
  let that = this;
  let newarr = [];
  let sort :any = [];
  let itm ;[];
  this.lists.forEach(function(obj) {
  //  newarr.push(obj.movie_id);
    that.listingsService.getMovieShowing(obj.movie_id).subscribe((response :any) =>{
response.forEach(function(obj2){ obj2.movie = obj.title;  });
if (response.length > 0)
newarr.push(response);
          })
   });
 console.log(newarr);
 newarr.forEach(function (obj3){
   for(let i=0; i < newarr.length; i++){
          sort.push(obj3[i]);
           }
})
/* console.log(sort); */
}


getLocation(){
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

/*   searchPage(){
    this.rootNavCtrl.push('SearchMoviePage')
    }
 */
}
