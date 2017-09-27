import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Searchbar  } from 'ionic-angular';
import { ListingsProvider } from '../../providers/listings/listings';
/**
 * Generated class for the SearchMoviePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-movie',
  templateUrl: 'search-movie.html',
})
export class SearchMoviePage {
  temparr = [];
  filteredusers = [];
  @ViewChild('searchbar') searchbar:Searchbar;
  constructor(public navCtrl: NavController, public navParams: NavParams, public listingsService : ListingsProvider) {
    this.listingsService.getListings().subscribe((response :any) =>{
      this.filteredusers = response;
      this.temparr = response;

          })
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.searchbar.setFocus();
 });
}


searchuser(searchbar) {
  this.filteredusers = this.temparr;
  var q = searchbar.target.value;
  if (q.trim() == '') {
    return;
  }

  this.filteredusers = this.filteredusers.filter((v) => {
    console.log(v.title);
    if (v.title.toLowerCase().indexOf(q.toLowerCase()) > -1)

      {
      return true;
    }
    return false;
  })
}

ViewMovie(list){
  console.log(list);
this.navCtrl.push('ViewPage', {
      listdata: list
    });
}
}
