import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ListingsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ListingsProvider {
url ;
cinema_url;
direction ;
key;
http:any;
showingcinema;
showingmovie;
distance;
  constructor(public httpp: Http) {
     this.http = httpp;
   /*  this.url = 'https://sleepy-tor-76293.herokuapp.com/public/index.php/api/cinemas'; */
    this.url = 'https://sleepy-tor-76293.herokuapp.com/public/index.php/api/movies';
    this.cinema_url = 'https://sleepy-tor-76293.herokuapp.com/public/index.php/api/cinemas'
    this.direction = 'https://maps.googleapis.com/maps/api/distancematrix/json?';
    this.key='AIzaSyA-BkmtK7-S7c2gNXTGICjQJK4gWRSm1bk';
    this.showingcinema ='https://sleepy-tor-76293.herokuapp.com/public/index.php/api/showing/cinema/';
    this.showingmovie ='https://sleepy-tor-76293.herokuapp.com/public/index.php/api/showing/movie/';
    this.distance = 'https://maps.googleapis.com/maps/api/distancematrix/json?'
    console.log('Hello ListingsProvider Provider');
  }



  getListings(){
      return this.http.get(this.url)
      .map(res => res.json());
  }

  getCinemas(){
    return this.http.get(this.cinema_url)
    .map(res => res.json());
  }

  getDistance(origins,destinations){
  return this.http.get(this.direction+'origins='+origins+'&destinations='+destinations+'&key='+this.key )
  .map(res => res.json());
  }


  getCinemaShowing(cinema_id){
    return this.http.get(this.showingcinema+cinema_id)
    .map(res => res.json());
    }

    getMovieShowing(movie_id){
      return this.http.get(this.showingmovie+movie_id)
      .map(res => res.json());
      }

      getTimeDistance(userlocation,cinemalocation){
        return this.http.get(this.direction+'origins='+userlocation+'&destinations='+cinemalocation+'&key='+this.key)
        .map(res => res.json());
        }

}
